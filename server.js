import express from 'express'
import React from 'react'
import ReactDOMServer from 'react-dom/server'
import { match, StaticRouter } from 'react-router'
import { Provider } from 'react-redux'
import { store } from './js-babel/Store'
import App from './js-babel/app.js'
import _ from 'lodash'
import fs from 'fs'
const port = 5050
const baseTemplate = fs.readFileSync('./index.html')
const template = _.template(baseTemplate)

const app = express()

// Enable CORS
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
    next()
})

app.use('/public', express.static('./public'))

app.use((req, res) => {
    const context = {}

    const body = ReactDOMServer.renderToString(
        <Provider store={store}>
            <StaticRouter location={req.url} context={context}>
                {App.Routes()}
            </StaticRouter>
        </Provider>
    )

    if (context.url) {
        res.writeHead(301, {
            Location: context.url
        })
        res.end()
    } else {
        res.status(200).send(template({ body }))
    }
})

app.listen(port, () => console.log('listening on port %s', port))
