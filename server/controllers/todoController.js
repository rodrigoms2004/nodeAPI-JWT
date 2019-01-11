const todoModel = require('../models/todoModel')

const todoController = {

    create: async(req, res) => {
        try {
            const todo = {
                description: req.body.description,
                start: req.body.start,
                done: true
            }
            // Math.round(Date.now() / 1000)
            const data = await todoModel.create(todo)

            if (!data.hasOwnProperty('error')) {
                return res.status(201).send({
                    // token: await authService.generateToken({ id, profile }),
                    todoList: `Todo id ${data} created`
                })
            } else {
                return res.status(406).send(data)
            }
        } catch(error) {
            console.error(error)
            res.status(400).send({ message: error.message })
        }
    },
    list: async(req, res) => {

    },
    byId: async(req, res) => {

    },
    delete: async(req, res) => {

    },
    update: async(req, res) => {

    }
}   // end todoController

module.exports = todoController