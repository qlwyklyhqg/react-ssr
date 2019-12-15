const express = require('express')
const app = express()

app.get('/api/course/list', (req, res) => {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Method', 'GET,POST,PUT,DELETE')
    res.header('Content-Type', "application/json;charset=utf-8")
    res.json({
        code: 0,
        list: [
            { name: 'web', id: 1 },
            { name: 'js', id: 2 },
            { name: 'java', id: 3 },
        ]
    })
})

app.get('/api/user/userinfo', (req, res) => {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Method', 'GET,POST,PUT,DELETE')
    res.header('Content-Type', "application/json;charset=utf-8")
    res.json({
        code: 0,
        userinfo: { name: 'web' },
    })
})

app.listen(9090, () => {
    console.log('mock started')
})