import express from 'express' 
import cors from 'cors'
import bodyParser from 'body-parser'
import { getAllUps, storeUp } from './up.service'

const app = express() 
app.use(cors())
app.use(bodyParser.urlencoded({extented: true}))
const port = 5500

app.get('/', async (req, res) => { 
    const ups = await getAllUps()
    res.send(ups)
})

app.post('/', async (req, res) => {
    const up = await storeUp(req.body)
    res.json(JSON.stringify(req.body))
})

app.listen(port, () => {
console.log(`Server is started on http://127.0.0.1:${port}`);
})