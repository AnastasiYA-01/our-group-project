import express from 'express' 
import cors from 'cors'
import bodyParser from 'body-parser'
import { getAllShoes, storeShoes } from './shoes.service'

const app = express() 
app.use(cors())
app.use(bodyParser.urlencoded({extented: true}))
const port = 5500

app.get('/', async (req, res) => { 
    const shoeses = await getAllShoes()
    res.send(shoeses)
})

app.post('/', async (req, res) => {
    const shoes = await storeShoes(req.body)
    res.json(JSON.stringify(req.body))
})

app.listen(port, () => {
console.log(`Server is started on http://127.0.0.1:${port}`);
})