import express from 'express' 
import cors from 'cors'
import bodyParser from 'body-parser'
import { getAllElements, storeElements } from './element.service'

const app = express() 
app.use(cors())
app.use(bodyParser.urlencoded({extented: true}))
const port = 5500

app.get('/', async (req, res) => { 
    const elem_clothes = await getAllElements()
    res.send(elem_clothes)
})

app.post('/', async (req, res) => {
    const element = await storeElements(req.body)
    res.json(JSON.stringify(req.body))
})

app.listen(port, () => {
    console.log(`Server is started on http://127.0.0.1:${port}`);
    })
    