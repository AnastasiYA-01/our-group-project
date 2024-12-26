import { useDb } from "./db.js";

const db = useDb()

export async function getAllDowns() {
    try {
        return (await db.query('SELECT * FROM down')).rows
    } catch (error) {
        console.log(error);
    }
}

export async function storeDown(down) {
    try {
        return (await db.query(
            `INSERT INTO down (element_id) 
            VALUES ($1) RETURNING *`, 
            [down.elid]
        )).rows[0]
    } catch (error) {
        console.log(error)
    }
}