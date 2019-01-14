const todoModel = require('../models/todoModel')
const _ = require('lodash');

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
        try {
            const data = await todoModel.list()
            return res.status(200).send({data})
        } catch(error) {
            console.error(error)
            res.status(400).send({ message: error.message })
        }
    },
    byId: async(req, res) => {
        try {
            const id = req.params.id
            const data = await todoModel.byId(id)
            return res.status(200).send({data})
        } catch(error) {
            console.error(error)
            res.status(400).send({ message: error.message })
        }
    },
    delete: async(req, res) => {
        try {
            const id = req.params.id
            const data = await todoModel.delete(id)
            return res.status(200).send({
                id,
                deleted: (data == 1) ? true : false
            })
        } catch(error) {
            console.error(error)
            res.status(400).send({ message: error.message })
        }
    },
    update: async(req, res) => {
        try {
            const id = req.params.id
            const body = _.pick(req.body, ['finish']);
            const data = await todoModel.update(id, body)
            return res.status(200).send({
                id,
                updated: (data == 1) ? true : false
            })
        } catch(error) {
            console.error(error)
            res.status(400).send({ message: error.message })
        }
    }
}   // end todoController

module.exports = todoController