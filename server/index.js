import express from 'express'
import React from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter, matchPath, Route, Switch } from 'react-router-dom'
import { Provider } from "react-redux";
import routes from '../src/App'
import { getServerStore } from '../src/store/store'
import Header from "../src/components/Header";
import proxy from 'http-proxy-middleware'
import { isContext } from 'vm';

const store = getServerStore();
const app = new express()
app.use(express.static('public'))

app.use(proxy('/api', { target: 'http://localhost:9090' }))

app.get('*', (req, res) => {
  const promises = [];
  routes.some(route => {
    const match = matchPath(req.path, route)
    if (match) {
      const { loadData } = route.component;
      if (loadData) {
        promises.push(loadData(store))
      }
    }
  })

  Promise.all(promises.map(p => p.catch(e => null)))
    .then(() => {
      const context = {}
      const content = renderToString(<Provider store={store}>
        <StaticRouter location={req.url} context={context}>
          <Header></Header>
          <Switch>
            {routes.map(route => <Route {...route}></Route>)}
          </Switch>
        </StaticRouter>
      </Provider>
      )

      if (context.statuscode)
        res.status(context.statuscode)

      if (context.action == "REPLACE")
        res.redirect(context.url)

      res.send(
        `
      <html>
          <head>
              <meta charset="utf-8">
          </head>
          <body>
              <div id="root">${content}</div>
              <script>window.__context=${JSON.stringify(store.getState())}</script>
              <script src="bundle.js"></script>
          </body>
      </html>
    `)
    })
})

app.listen(3000, () => {
  console.log('http://localhost:3000/')
})
