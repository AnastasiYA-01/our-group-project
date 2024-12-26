import { useDb } from "./db.js";

const db = useDb()

export async function getAllElements() {
    try {
        return (await db.query('SELECT * FROM elem_clothes')).rows
    } catch (error) {
        console.log(error)
    }
}

export async function storeElements(elem_clothes) {
    try {
        return (await db.query(
            `INSERT INTO elem_clothes (photo, name_clothes, weather, style, temp, user_id)
            VALUES ($1, $2, $3, $4, $5, $6) RETURNING *`,
            [elem.photo, elem.name, elem.weather, elem.style, elem.temp, elem.usid]
        )).rows[0]
    } catch (error) {
        console.log(error)
    }
}