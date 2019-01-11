'use strict'

const authModel = require('../models/authModel')
const authService = require('../services/authService')

exports.login = async (req, res, next) => {
    try {
        const credentials = {
            name: req.body.name,
            password: req.body.password
        }

        const data = await authModel.login(credentials)

        if (data[0]) {
            const { id, name, profile, nickname } = data[0]
            const expirationTime = process.env.EXPIRATION_TIME

            return res.status(200).send({
                token: await authService.generateToken({ id, profile }),
                id: id,
                name: name,
                profile: profile,
                nickname: nickname,
                expirationTime
            })
        }
    } catch (error) {
        return res.status(400).send({ message: error.message })
    }
}
