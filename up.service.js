import { useDb } from "./db.js";

const db = useDb()

export async function getAllUps() {
    try {
        return (await db.query('SELECT * FROM up')).rows
    } catch (error) {
        console.log(error);
    }
}

export async function storeUp(up) {
    try {
        return (await db.query(
            `INSERT INTO up (element_id) 
            VALUES ($1) RETURNING *`, 
            [up.elid]
        )).rows[0]
    } catch (error) {
        console.log(error)
    }
}