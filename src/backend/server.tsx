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
    {
        id: 2,
        firstName: 'Serega',
        username: 'serega',
        password: 'asdfasdf',
        token: 'asdf'
    },

]

const recipes = [
    {
        id: 76,
        userId: 1,
        name: 'Creamy Tuscan Shrimp with Bacon, Tomatoes, Spinach & Zucchini Noodles',
        ingredients: [
            {
               name: 'baby spinach',
               quantity: '1 (5 oz) pkg',
            },
            {
                name: 'bacon',
                quantity: '2 slices'
            },
            {
                name: 'fresh basil',
                quantity: '0.5 small pkg'
            },

            {
                name: 'garlic',
                quantity: '2 cloves'
            },

            {
                name: 'grape tomatoes',
                quantity: 'half pint'
            },

            {
                name: 'heavy whipping cream',
                quantity: '4 fl oz'
            },
            {
                name: 'Parmesan cheese',
                quantity: '2 oz'
            },

            {
                name: 'raw peeled shrimp, fresh or frozen',
                quantity: '¾ lb'
            },

            {
                name: 'zucchini squash',
                quantity: '1 medium'
            },

            {
                name: 'black pepper',
                quantity: 'on taste'
            },

            {
                name: 'crushed red pepper',
                quantity: 'on taste'
            },
            {
                name: 'Italian seasoning',
                quantity: 'on taste'
            },

            {
                name: 'salt',
                quantity: 'on taste'
            },
        ],
        instructions: [
            'Wash and dry the fresh produce.... ½ pint grape tomatoes ...',
            'If using frozen shrimp ...',
            'Preheat a skillet over medium heat.',
            'While the skillet heats up, small dice bacon.',
            'Once the skillet is hot, add bacon and cook, stirring occasionally, until crispy, 4-5 minutes. Using a slotted spoon, remove to a paper towel-lined plate, leaving the drippings in the skillet.',
            'Meanwhile, trim zucchini and use a julienne (or regular) peeler to make noodles. Place in a medium bowl and set aside.',
            'Halve the tomatoes.',
            'Return skillet (with bacon drippings) to medium heat; add tomatoes and spices to the skillet. Cook, stirring occasionally, until tomatoes soften, 3-4 minutes.' +
            '½ tsp Italian seasoning\n' +
            '¼ tsp crushed red pepper\n' +
            '¼ tsp salt\n' +
            '¼ tsp black pepper\n' +
            'STEP 9\n' +
            'Meanwhile, finely grate Parmesan.\n' +
            '\n' +
            '2 oz Parmesan cheese\n',
            'Peel and mince garlic.',
            'Add garlic and shrimp to the skillet; cook until shrimp are opaque, 1-2 minutes per side.',
            'Add spinach to the skillet in handfuls, waiting for the spinach to wilt slightly before adding the next handful.',
            'Add zucchini noodles, Parmesan (reserving a small handful for garnish), and cream to the skillet; stir to combine. Cook, stirring occasionally, until the sauce is melted and combined, 1-2 minutes.',
            'Meanwhile, pick basil leaves off the stems, roll up crosswise, and thinly slice into ribbons. Add half the to skillet (reserving the rest for garnish) and stir to combine. Remove from heat.',
            'To serve, divide shrimp, veggies, and sauce between bowls. Top with bacon and remaining Parmesan and basil. Enjoy!'
        ]
    },
    {
        id: 34,
        userId: 1,
        name: 'Spinach & Artichoke Dip" Gnocchi Bake with Cauliflower',
        ingredients: [
            {
                name: 'Alfredo sauce',
                quantity: '½ (16 oz) jar',
            },
            {
                name: 'artichoke hearts, marinated',
                quantity: '1 (6 oz) jar'
            },
            {
                name: 'cauliflower florets',
                quantity: '1 (10 oz) bag'
            },

            {
                name: 'frozen chopped spinach',
                quantity: '1 (10 oz) bag'
            },
            {
                name: 'Parmesan cheese, shredded',
                quantity: '80 ml'
            },

            {
                name: 'potato gnocchi',
                quantity: '1 (16 oz) pkg'
            },

            {
                name: 'black pepper',
                quantity: 'on taste'
            },

            {
                name: 'onion powder',
                quantity: 'on taste'
            },

            {
                name: 'salt',
                quantity: 'on taste'
            },

        ],
        instructions: [
            'Preheat oven to 450°F.',
            'Fill a medium saucepan about halfway with hot water (from the tap); cover and bring to a boil over high heat.',
            'While the water heats up, drain and roughly chop artichoke hearts. Place in a baking dish.\n',
            'Add Alfredo sauce and spices to the baking dish with the artichokes. Stir to combine and set aside.',
            'Once the water in the pan is boiling, add gnocchi and cauliflower. Cook, stirring occasionally, until gnocchi begins to float to the surface, 3-4 minutes.Meanwhile, place frozen spinach in a colander.',
            'When the gnocchi and cauliflower are done, drain in the colander over the spinach.',
            'Add gnocchi, cauliflower, and spinach to the baking dish. Stir to combine with the sauce, then top with cheese.',
            'Place baking dish in the oven and bake until cheese is golden, about 10 minutes. Remove from oven.',
            'To serve, divide gnocchi bake between plates or bowls. Enjoy!'
        ]
    },
    {
        id: 34,
        userId: 2,
        name: 'Caprese Salad with Fresh Mozzarella, Tomatoes, Basil & Balsamic',
        ingredients: [
            {
                name: 'fresh basil',
                quantity: '¼ small pkg'
            },

            {
                name: 'fresh mozzarella cheese',
                quantity: '½ (8 oz) pkg'
            },

            {
                name: 'grape tomatoes',
                quantity: '1 pint'
            },
            {
                name: 'balsamic vinegar',
                quantity: '1 pint'
            },

            {
                name: 'black pepper',
                quantity: 'on taste'
            },

            {
                name: 'extra virgin olive oil',
                quantity: '5 table spoons'
            },

            {
                name: 'salt',
                quantity: 'on taste'
            },

        ],
        instructions: [
            'Place oil, vinegar, salt, and pepper in a medium bowl. Whisk to combine the dressing.',
            'Medium dice cheese. Add to the bowl with the dressing.',
            'Wash, dry, and halve tomatoes. Add to the bowl.',
            'Wash, dry, and pick basil leaves off the stems; roll up crosswise and thinly slice into ribbons. Add to the bowl, then stir to combine the salad.',
            'To serve, divide salad between plates or bowls. Enjoy!'
        ]
    }
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
    const userId = 1
    res.send(recipes.filter(r => r.userId === userId))
})


console.log(`server is running ...`)


app.listen(4000)
