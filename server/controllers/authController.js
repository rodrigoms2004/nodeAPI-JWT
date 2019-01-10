'use strict'

const authModel = require('../models/authModel')
const authService = require('../services/authService')

exports.login = async (req, res, next) => {
    try {
        const credentials = {
            phone: req.body.phone,
            password: req.body.password
        }

        const data = await authModel.login(credentials)

        if (data[0]) {
            const { id, establishment_id, profile, nickname } = data[0]

            // return res.send(200, {
            return res.status(200).send({
                token: await authService.generateToken({ id, profile }),
                id: id,
                establishment_id: establishment_id,
                profile: profile,
                nickname: nickname
            })
        }
    } catch (error) {
        // return res.send(400, { message: error.message })
        return res.status(400).send({ message: error.message })
    }
}
