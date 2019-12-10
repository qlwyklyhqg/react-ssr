import express from 'express'
import React from 'react'
import {renderToString} from 'react-dom/server'
import App from '../src/App'

const app = new express()
app.use(express.static('public'))

app.get('/', (req, res) => {
    const content = renderToString(App)

    res.send(
        `
        <html>
            <head>
                <meta charset="utf-8">
            </head>
            <body>
                <div id="root">${content}</div>
                <script src="bundle.js"></script>
            </body>
        </html>
    `)
})

app.listen(3000, () => {
    console.log('http://localhost:3000/')
})
