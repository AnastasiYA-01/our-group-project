import { useDb } from "./db.js";

const db = useDb()

export async function getAllShoes() {
    try {
        return (await db.query('SELECT * FROM shoes')).rows
    } catch (error) {
        console.log(error);
    }
}

export async function storeShoes(shoes) {
    try {
        return (await db.query(
            `INSERT INTO shoes (element_id) 
            VALUES ($1) RETURNING *`, 
            [shoes.elid]
        )).rows[0]
    } catch (error) {
        console.log(error)
    }
}