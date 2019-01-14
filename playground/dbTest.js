'use strict'

require('dotenv').config()
const knex = require('knex')

const connection = () => {
    // const connection = require('knex')({
    try {
        const connection = knex({
            client: 'mysql',
            version: '5.7',
            connection: {
                host: process.env.DB_HOST,
                user: process.env.DB_USER,
                password: process.env.DB_PASSWORD,
                database: process.env.DB_NAME,
                port: process.env.DB_PORT
            }
        })
        return connection
    } catch (e) {
        console.log(e)
    }
}

const todoDone = {
    done: false,    // true
    finish: null    // 1547485710 // "1547485703"
}

// const id = { id : 5 }
const id = 5

// connection()m.select('*').from('toDoList')
//     // .where('done', true)
//     .where(id)
//     .then(result => {
//         console.log(result)
//     })

connection().update(todoDone).from('toDoList')
    .where('id', 5)
    .then(result => {
        console.log(result)
    }).catch(e => {
        console.log("ERROR", e)
    })


// > Math.round(Date.now()/1000)
