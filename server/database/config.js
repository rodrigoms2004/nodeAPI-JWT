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

module.exports = {
    connection
}
