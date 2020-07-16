import express from 'express'
import path from 'path'
import cors from 'cors'
import bodyParser from 'body-parser'
import axios from 'axios'
import { renderToStaticNodeStream } from 'react-dom/server'
import React from 'react'

import cookieParser from 'cookie-parser'
// import config from './config'
import Html from '../client/html'

const Root = () => ''

try {
  console.log(Root)
} catch (ex) {
  console.log(' run yarn build:prod to enable ssr')
}

const port = process.env.PORT || 8090
const server = express()

const middleware = [
  cors(),
  express.static(path.resolve(__dirname, '../dist/assets')),
  bodyParser.urlencoded({ limit: '50mb', extended: true, parameterLimit: 50000 }),
  bodyParser.json({ limit: '50mb', extended: true }),
  cookieParser()
]

middleware.forEach((it) => server.use(it))

server.post('/api/v3/auth/login', async (req, res) => {
  const { login, password } = req.body
  await axios({
    method: 'post',
    url: 'http://transstage1.iwayex.com/transnextgen/v3/auth/login',
    data: { login, password }
  })
    .then(({ data }) => {
      res.json(data)
    })
    .catch((err) => res.json({ status: 'error', err }))
})

server.get('/api/v3/orders/trips', async (req, res) => {
  await axios({
    method: 'get',
    url: 'http://transstage1.iwayex.com/transnextgen/v3/orders/trips',
    headers: { Authorization: req.headers.authorization }
  })
    .then(({ data }) => {
      res.json(data)
    })
    .catch((err) => res.json({ status: 'error', err }))
})

server.use('/api/', (req, res) => {
  res.status(404)
  res.end()
})

const [htmlStart, htmlEnd] = Html({
  body: 'separator',
  title: ''
}).split('separator')

server.get('/', (req, res) => {
  const appStream = renderToStaticNodeStream(<Root location={req.url} context={{}} />)
  res.write(htmlStart)
  appStream.pipe(res, { end: false })
  appStream.on('end', () => {
    res.write(htmlEnd)
    res.end()
  })
})

server.get('/*', (req, res) => {
  const initialState = {
    location: req.url
  }

  return res.send(
    Html({
      body: '',
      initialState
    })
  )
})

server.listen(port)

console.log(`Serving at http://localhost:${port}`)
