// @ts-nocheck
const express = require('express')
const bodyParser = require('body-parser');
var cors = require('cors')
const fs = require('fs');
path = require('path');
const app = express()
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(bodyParser.raw());
const { v4: uuidv4 } = require('uuid');


app.use(cors())

const users = [
    {
        id: 1,
        firstName: 'Iryna',
        username: 'iryna',
        password: 'asdf',
        token: 'asdfasdfasdfasdfasdf'
    },
    {
        id: 2,
        firstName: 'Serega',
        username: 'serega',
        password: 'asdfasdf',
        token: 'asdf'
    },
]

const loginError = [
    {
        error: true,
        errorText: 'username or password did not found'
    }
]


app.post('/login', function (req, res) {
    const {username, password} = req.body
    const user = users.filter(u => u.username === username && u.password === password)[0]
    let result = '';
    if (users.includes(user)) {
        result = user
    } else {
        result = loginError[0]
    }
    // console.log(`login ${JSON.stringify(user)}`);
    res.send(result)
})

app.get('/recipes', function (req, res) {
    // TODO: use userId to load recipes
    const {userId} = req.query
    console.log(`userId = ${userId}`)
    const filePath = path.join(__dirname, 'recipes.json');
    try {
        const data = fs.readFileSync(filePath, 'utf8');
        const recipes = JSON.parse(data)
        res.send(recipes.filter(r => r.userId === parseInt(userId, 10)))
        // console.log(data);
    } catch (err) {
        console.error(err);
    }

    // const userId = 1
    // res.send(recipes.filter(r => r.userId === parseInt(userId, 10)))
})

app.put('/recipe', function (req, res) {
    const filePath = path.join(__dirname, 'recipes.json');
    let recipe = req.body
    recipe.recipeId = uuidv4();
    try {
        let data = fs.readFileSync(filePath, 'utf8');
        let arr = JSON.parse(data)
        arr.push(recipe)
        let dataStr = JSON.stringify(arr)
        fs.writeFileSync(filePath, dataStr)
    } catch (err) {
        console.error(err);
    }

    res.send(JSON.stringify(recipe))
})

app.patch('/recipe', function (req, res) {
    const filePath = path.join(__dirname, 'recipes.json');
    let recipe = req.body
    // recipe.recipeId = uuidv4();
    try {
        let data = fs.readFileSync(filePath, 'utf8');
        let arr = JSON.parse(data)
        arr.push(recipe)
        let dataStr = JSON.stringify(arr)
        fs.writeFileSync(filePath, dataStr)
    } catch (err) {
        console.error(err);
    }

    res.send(JSON.stringify(recipe))
})


console.log(`server is running ...`)


app.listen(4000)
