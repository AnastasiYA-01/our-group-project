import express from 'express' 
import cors from 'cors'
import bodyParser from 'body-parser'
import { Client } from 'pg'

const app = express() 
app.use(cors())
app.use(bodyParser.urlencoded({extented: true}))
const port = 5500

document.getElementById('quizForm').addEventListener('submit' {
    

    const weatherOptions = document.querySelectorAll('input[name="weather"]:checked')
    const temperatureOptions = document.querySelectorAll('input[name="temperature"]:checked')
    const styleOptions = document.querySelectorAll('input[name="style"]:checked')

    const divHead = document.getElementById('head')
    const divUp = document.getElementById('up')
    const divDown = document.getElementById('down')
    const divShoes = document.getElementById('shoes')

    if (weatherOptions.length === 0 || temperatureOptions.length === 0 || styleOptions.length === 0) {
        try { 
            return (resultDiv.textContent = 'Не даны условия поиска') 
        }
        catch (error) {
            console.log(error)
        }
        return;
    }

    let outfit = []

    try {
        const headRes = Client.query(
            'SELECT * FROM head WHERE weather = $1 AND temp = $2 AND style = $3', 
            [weatherOptions[0].value, temperatureOptions[0].value, styleOptions[0].value])
        if (headRes.rows.length > 0) {
            outfit[0] = headRes.rows[0].photo
            divHead.innerHTML = `<img src="${outfit[0]}"></img>`
        } else {
            divHead.textContent = 'Изображение не найдено'
        }
    } catch (error) {
        console.log(error)
    }

    try {
        const upRes = Client.query(
            'SELECT * FROM up WHERE weather = $1 AND temp = $2 AND style = $3', 
            [weatherOptions[0].value, temperatureOptions[0].value, styleOptions[0].value])
        if (upRes.rows.length > 0) {
            outfit[1] = upRes.rows[0].photo
            divUp.innerHTML = `<img src="${outfit[1]}"></img>`
        } else {
            divUp.textContent = 'Изображение не найдено'
        }
    } catch (error) {
        console.log(error)
    }

    try {
        const downRes = Client.query(
            'SELECT * FROM down WHERE weather = $1 AND temp = $2 AND style = $3', 
            [weatherOptions[0].value, temperatureOptions[0].value, styleOptions[0].value])
        if (downRes.rows.length > 0) {
            outfit[2] = downRes.rows[0].photo
            divDown.innerHTML = `<img src="${outfit[2]}"></img>`
        } else {
            divDown.textContent = 'Изображение не найдено'
        }
    } catch (error) {
        console.log(error)
    }

    try {
        const shoesRes = Client.query(
            'SELECT * FROM shoes WHERE weather = $1 AND temp = $2 AND style = $3', 
            [weatherOptions[0].value, temperatureOptions[0].value, styleOptions[0].value])
        if (shoesRes.rows.length > 0) {
            outfit[3] = shoesRes.rows[0].photo
            divShoes.innerHTML = `<img src="${outfit[3]}"></img>`
        } else {
            divShoes.textContent = 'Изображение не найдено'
        }
    } catch (error) {
        console.log(error)
    }


})

app.listen(port, () => {
    console.log(`Server is started on http://127.0.0.1:${port}`);
    })
