const db = require('../database/config')

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
    list: async(req, res) => {

    },
    byId: async(req, res) => {

    },
    delete: async(req, res) => {

    },
    update: async(req, res) => {

    }
}   // end todoModel

module.exports = todoModel
