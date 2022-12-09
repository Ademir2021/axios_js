const express = require('express')
const cors = require('cors')

const app = express()

app.listen(3000, () => console.log('API rodando na porta 3000'))

app.use(cors())

app.use(express.json())

let users = [{
     id: 0,
     name: "",
     avatar: "",
     city: ""
}]

app.route('/api').get((req, res) => res.json({
    users
}))

app.route('/api/:id').get((req, res) => {
    const userId = req.params.id

    const user = users.find(user => Number(user.id)=== Number
    (userId))
    if (!user) {
        return res.json('User not found')
    }
    res.json(user)
})

app.route('/api').post((req, res) => {
    const lastId = users[users.length - 1].id
    users.push({
        id: lastId + 1,
        name: req.body.name,
        avatar: req.body.avatar,
        city: req.body.city
    })
    res.json('Saved User')
})

app.route('/api/:id').put((req, res) => {
    const userId = req.params.id

    const user = users.find(user => Number(user.id) == Number
        (userId))

    if (!user) {
        return res.json('User not found')
    }

    const updateUser = {
            ...user,
            name: req.body.name,
            avatar: req.body.avatar,
            city: req.body.city
        }
        
        users = users.map(user => {
            if (Number(user.id) === Number(userId)) {
                user = updateUser
            }
            return user
        })
        res.json("Updated user")
})


app.route('/api/:id').delete((req, res) => {
    const userId = req.params.id

    users = users.filter(user => Number(user.id) !== Number(userId)
    )
    res.json('Deleted User')
})



