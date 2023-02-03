const express = require('express')
const app = express()
const exampleController = require('./example.controller')

// enabling our app to work with JSON
app.use(express.json());

// this will be our wrapper
const use = fn => (req, res, next) => Promise.resolve(fn(req, res, next)).catch(next);

// adding routes to our application
app.get('/', (req, res, next) => {
    res.send({
        message: 'Hello world'
    });
});

// this is the route we're going to "watch" with the error handler
app.get('/example', use(exampleController.throwErrorMethod));

// this will be our middleware, responsible for watching our routes
app.use(function(err, req, res, next) {
    res.status(500).send({
        message: err.message
    })
});

app.listen(3001, () => {
    console.log('App listening at 3001');
})
