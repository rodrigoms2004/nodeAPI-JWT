const db = require('../database/config')
const moment = require('moment')

const convertUnixToDate = result => {
    result.forEach(elem => {
        const startDate = moment.unix(elem.start)
        elem.start = startDate
        if (elem.finish != null) {
            const finishDate = moment.unix(elem.finish)
            elem.finish = finishDate
        }   // end if
    })
    return result
}   // convertUnixToDate

const todoModel = {
    create: async (todo) => {
        const connection = db.connection()
        const data = await connection.insert(todo).into('toDoList')
                .then((result) => {
                    return result
                }).catch(e => {
                    return {error: e}
                }) 
        return data     
    },
    list: async() => {
        const connection = db.connection()
        const data = await connection.select('id', 'description', 'done', 'start', 'finish')
                .from('toDoList')
                .then((result) => {
                    return convertUnixToDate(result)
                }).catch(e => {
                    return {error: e}
                })
        return data
    },
    byId: async(id) => {
        const connection = db.connection()
        const data = await connection.select('id', 'description', 'done', 'start', 'finish')
                .from('toDoList').where('id', id)
                .then((result) => {
                    return convertUnixToDate(result)
                }).catch(e => {
                    return {error: e}
                })
        return data
    },
    delete: async(id) => {
        const connection = db.connection()
        console.log(id)
        const data = await connection.delete().from('toDoList').where('id', id)
                .then((result) => {
                    return result
                }).catch(e => {
                    return {error: e}
                })
        return data
    },
    update: async(id, body) => {
        const connection = db.connection()
        // READ IT !!!!!!
        // thisKeyIsSkipped, without update query will show strange 'isEmpty' field
        // update `toDoList` set `done` = true, `finish` = '1547485703', `isEmpty` = (select *) where `id` = '5'
        // SEE: https://knexjs.org/#Builder-update
        const todoDone = {
            done: true,
            finish: body.finish,
            isEmpty: undefined      
        }
        // SHOW SQL QUERY BUILT BY KNEX
        // console.log(connection.update(todoDone).from('toDoList').where('id', id).toString())

        const data = await connection.update(todoDone).table('toDoList')
                .where('id', id)
                .then(result => {
                    return result
                }).catch(e => {
                    console.log(e)
                    return {error: e}
                })
        return data
    }
}   // end todoModel

module.exports = todoModel