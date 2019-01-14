// CRUD = Create, Read, Update, Delete
// Create = POST method
// READ   = GET method
// UPDATE = PUT method
// DELETE = DELETE method

const router = require('express').Router()

const authController = require('../controllers/authController')
const userController = require('../controllers/userController')
const todoController = require('../controllers/todoController')

router.post('/register', userController.register)
router.post('/login', authController.login)

const {authenticate} = require('./../services/authenticate')

// API RESTFUL FOR TODOLIST
router.post('/todos', authenticate, todoController.create)          // create a todo
router.get('/todos', authenticate, todoController.list)             // get all todo
router.get('/todos/:id', todoController.byId)                       // get a todo by id
router.delete('/todos/:id', authenticate, todoController.delete)    // delete a todo by id
router.put('/todos/:id', authenticate, todoController.update)       // make a todo done by id



router.get('/test', (req, res) => {
    //res.status(404).send('Hello world!')
    const timestp = new Date()
    res.status(200).send({
     nome: 'Test API',
     tempo: timestp.toJSON()
    })
  })


module.exports = router