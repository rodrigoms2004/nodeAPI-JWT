const bcrypt = require('bcrypt')

// use bcrypt 3.0.0

const req = {
    body : {
        password: "123456"
    }
}


const testCrypt = async (req) => {
    try {
        const hash = await bcrypt.hash(req.body.password,10)
        console.log("Hash pass:", hash)    
    } catch(error) {
        console.error(error)
    }
} 

testCrypt(req)


