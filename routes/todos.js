const { Router } = require("express");
const Todo = require('../models/todo')
const router = Router()

router.get('/', async (request, response) => {
    const todos = await Todo.find().lean()
    
    response.render('index', {
        title: 'Todos list',
        isIndex: true,
        todos
    })
})

router.get('/create', (request, response) => {
    response.render('create', {
        title: 'Create todo',
        isCreate: true
    })
})

router.post('/create', async (request, response) => {
    const todo = new Todo({
        title: request.body.title
    })
    await todo.save()

    response.redirect('/')
})

router.post('/complite', async (request, response) => {
    const todo = await Todo.findById(request.body.id)

    todo.complited = !!request.body.complited

    await todo.save()

    response.redirect('/')
})

module.exports = router