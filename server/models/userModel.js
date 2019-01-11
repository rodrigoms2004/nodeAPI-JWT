'use strict'

const db = require('../database/config')

Object.prototype.isEmpty = function() {
    for (let key in this) {
        if(this.hasOwnProperty(key)) { return false; }
    }
    return true;
}

exports.create = async (user) => {
    const connection = db.connection()

    const data = await connection.select('id', 'name')
            .from('user')
            .where('name', user.name)
            .then((resultSet) => {
                return resultSet
            })
    
    if (data[0] === undefined) {
        console.log("entry insert!!!!!!!!!")
        await connection.insert(user).into('user')
        return data
    } else {
        return {error: `User ${user.name} already exists!`}
    }
    
    // const data = await connection.insert(user).into('user')
    // .then(() => {
    //     return connection.select('establishment_id', 'profile').from('user').where('id', user.id)
    // }).catch(e => {
    //     return e
    // })
    // return data
}
