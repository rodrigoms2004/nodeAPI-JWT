'use strict'

const uuid = require('uuid/v4')
const bcrypt = require('bcrypt')
const userModel = require('../models/userModel')
const authService = require('../services/authService')

exports.register = async (req, res, next) => {
    try {
        const id = await uuid()
        const hash = await bcrypt.hash(req.body.password,10)
        

        const user = {
            id: id,
            name: req.body.name,
            nickname: req.body.nickname,
            phone: req.body.phone,
            email: req.body.email,
            password: hash
        }

        const data = await userModel.create(user)

        // Retorna undefined
        console.log(data)

        if (data) {
            const { establishment_id, profile } = data[0]

            // return res.send(201, {
            return res.status(201).send({
                token: await authService.generateToken({ id, profile }),
                id: id,
                establishment_id: establishment_id,
                profile: profile
            })
        }
    } catch(error) {
        console.error(error)

        // express deprecated
        // return res.send(400, { message: error.message })
        res.status(400).send({ message: error.message })
    }
}