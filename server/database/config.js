'use strict'

require('dotenv').config()

module.exports = {
    connection: () => {
        const connection = require('knex')({
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
    }
}
