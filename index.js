import express from 'express' 
import cors from 'cors'
import bodyParser from 'body-parser'
import { getAllUsers, storeUser } from './users.service.js'

const app = express() 
app.use(cors())
app.use(bodyParser.urlencoded({extented: true}))
const port = 3000

app.get('/', async (req, res) => { 
    const users = await getAllUsers()
    res.send(users)
})

app.post('/', async (req, res) => {
    const user = await storeUser(req.body)
    res.json(JSON.stringify(req.body))
})

app.listen(port, () => {
console.log(`Server is started on http://127.0.0.1:${port}`);
})