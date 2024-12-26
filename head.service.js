import { useDb } from "./db.js";

const db = useDb()

export async function getAllHeads() {
    try {
        return (await db.query('SELECT * FROM head')).rows
    } catch (error) {
        console.log(error);
    }
}

export async function storeHead(head) {
    try {
        return (await db.query(
            `INSERT INTO head (element_id) 
            VALUES ($1) RETURNING *`, 
            [head.elid]
        )).rows[0]
    } catch (error) {
        console.log(error)
    }
}