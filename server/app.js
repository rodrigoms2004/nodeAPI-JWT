'use strict'


const _ = require('lodash')
const express = require('express')
const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.json()) // middleware


//middleware, used to show where user is going...
app.use((req, res, next) => {
    // don't work under npm test
    if(process.env.NODE_ENV !== "test") {
      console.log('I was here: ', req.url)
    }
  
    next()
  })

// ROUTES
app.use('/api', require('./route/api'))

// middleware to deal with 404 error
app.use((req, res, next) => {
    let err = {
      message: 'route does not exist',
      status: 404
    }
    //let err = new Error('route does not exist')
    //err.status(404)
    next(err)  // send error to next middleware
})

// receives error from last middleware
app.use((err, req, res, next) => {
    // if error 404, sends back message 'route does not exist'
    // otherwise it sends Murphy's message
    console.log(err.status)
    res.status(err.status || 500).send(err.message || `Don't force it get a larger hammer.`)
})

module.exports = app
