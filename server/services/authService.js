'use strict'

const jwt = require('jsonwebtoken')
const expirationTime = process.env.EXPIRATION_TIME

exports.generateToken = async (data) => {
    // return jwt.sign(data, process.env.SALT_KEY, { expiresIn: '1d' })
    return jwt.sign(data, process.env.SALT_KEY, { expiresIn: expirationTime })
}

exports.decodeToken = async (token) => {
    const data = await jwt.verify(token, process.env.SALT_KEY)
    return data
}

exports.authorize = function (req, res, next) {
    const token = req.body.token || req.query.token || req.headers['x-access-token']

    if (!token) {
        return res.json(400, { message: 'Acesso restrito' })
    } else {
        jwt.verify(token, process.env.SALT_KEY, function (error, decoded) {
            if (error) return res.json(400, { message: 'Token inválido' })
            return next()
        })
    }
}
