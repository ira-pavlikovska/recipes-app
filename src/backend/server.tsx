// @ts-nocheck
const express = require('express')
const bodyParser = require('body-parser');
var cors = require('cors')
const app = express()
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(bodyParser.raw());


app.use(cors())

const users = [
    {
        id: 1,
        firstName: 'Iryna',
        username: 'iryna',
        password: 'asdf',
        token: 'asdfasdfasdfasdfasdf'
    },
]


app.post('/login', function (req, res) {
    const {username, password} = req.body
    const user = users.filter(u => u.username === username && u.password === password)[0]

    //   console.log(`cart ${JSON.stringify(user)}`);
    res.send(user)
})

console.log(`server is running ...`)


app.listen(4000)
