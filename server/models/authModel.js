'use strict'

const db = require('../database/config')
const bcrypt = require('bcrypt')

exports.login = async (user) => {
    const connection = db.connection()
    const result = await connection.select('id', 'name', 'nickname', 'profile', 'password')
            .from('user')
            .where('name', user.name)

    if (result.length === 0) throw new Error('Telefone não encontrado')

    const res = await bcrypt.compare(user.password, result[0].password)

    if (!res) throw new Error('Senha inválida')
    return result
}
