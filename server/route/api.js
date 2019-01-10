// CRUD = Create, Read, Update, Delete
// Create = POST method
// READ   = GET method
// UPDATE = PUT method
// DELETE = DELETE method

const router = require('express').Router()

const authController = require('../controllers/authController')
const userController = require('../controllers/userController')

router.post('/register', userController.register)
router.post('/login', authController.login)




router.get('/test', (req, res) => {
    //res.status(404).send('Hello world!')
    var timestp = new Date()
    res.status(200).send({
     nome: 'Teste API',
     tempo: timestp.toJSON()
    })
  })


module.exports = router