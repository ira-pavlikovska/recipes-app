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


const loginError = [
    {
        error: true,
        errorText: 'username or password did not found'
    }
]


app.post('/login', function (req, res) {
    const {username, password} = req.body
    const filePath = path.join(__dirname, 'users.json');
    try {
        const data = fs.readFileSync(filePath, 'utf8');
        const users = JSON.parse(data);
        const user = users.filter(u => u.username === username && u.password === password)[0]
        let result = '';
        if (users.includes(user)) {
            result = user
        } else {
            result = loginError[0]
        }
        res.send(result)
    } catch (err) {
        console.error(err);
    }

})

app.get('/recipes', function (req, res) {
    // TODO: use userId to load recipes
    const {userId, keyword} = req.query
    // console.log(`userId = ${userId}`)
    // console.log(`keyword = ${keyword}`)
    const filePath = path.join(__dirname, 'recipes.json');
    try {
        const data = fs.readFileSync(filePath, 'utf8');
        const recipes = JSON.parse(data)
        let filteredByUserId = recipes.filter(r => r.userId === parseInt(userId, 10));

        let filteredByKeyword = filteredByUserId.filter(r => {
            const kw = keyword.toLowerCase();
            if (r.recipeName.toLowerCase().includes(kw)) {
                return true
            }

            for(let i = 0; i < r.instructions.length; i++) {
                let ins = r.instructions[i]
                if (ins.toLowerCase().includes(kw)) {
                    return true
                }
            }

            for(let i = 0; i < r.ingredients.length; i++) {
                let ing = r.ingredients[i]
                if (ing.name.toLowerCase().indexOf(kw) > -1) {
                    return true
                }
            }

            return false
        });


        res.send( filteredByKeyword)
            // .filter((r) =>
            //         r.recipeName.toLowerCase().indexOf(keyword.toLowerCase()) > -1 ||
            //         r.instructions.map(i => i.toLowerCase().indexOf(keyword.toLowerCase()) > -1)
            // ))
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
        arr = arr.map(item => item.recipeId === recipe.recipeId ? recipe : item)
        let dataStr = JSON.stringify(arr)
        fs.writeFileSync(filePath, dataStr)
    } catch (err) {
        console.error(err);
    }

    res.send(JSON.stringify(recipe))
})

app.delete('/recipe/:id', function (req, res) {
    const { id } = req.params

    const filePath = path.join(__dirname, 'recipes.json');
    try {
        let data = fs.readFileSync(filePath, 'utf8');
        let arr = JSON.parse(data)
        arr = arr.filter(item => item.recipeId !== id)
        let dataStr = JSON.stringify(arr)
        fs.writeFileSync(filePath, dataStr)
    } catch (err) {
        console.error(err);
        res.status(500).send('error')
    }

    res.send('ok')
})

//update first name
app.patch('/user', function (req, res) {
    const filePath = path.join(__dirname, 'users.json');
    let user = req.body
    try {
        let data = fs.readFileSync(filePath, 'utf8');
        let arr = JSON.parse(data)
        arr = arr.map(item => item.id === user.id ? user : item)
        let dataStr = JSON.stringify(arr)
        fs.writeFileSync(filePath, dataStr)
    } catch (err) {
        console.error(err);
    }

    res.send(JSON.stringify(user))
})

console.log(`server is running ...`)


app.listen(4000)
