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

const {authenticate} = require('./../services/authenticate');

// API RESTFUL FOR TODOLIST
router.post('/todos', authenticate, todoController.create);
// router.get('/todos', authenticate, todoController.list);
// router.get('/todos/:id', authenticate, todoController.byId);
// router.delete('/todos/:id', authenticate, todoController.delete);
// router.put('/todos/:id', authenticate, todoController.update);



router.get('/test', (req, res) => {
    //res.status(404).send('Hello world!')
    var timestp = new Date()
    res.status(200).send({
     nome: 'Teste API',
     tempo: timestp.toJSON()
    })
  })


module.exports = router