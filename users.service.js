import { useDb } from "./db.js";

const db = useDb()

export async function getAllUsers() {
    try {
        return (await db.query('SELECT * FROM users')).rows
    } catch (error) {
        console.log(error);
    }
}


export async function storeUser(user) {
    try {
        return (await db.query(
            `INSERT INTO users (name, password) VALUES ($1, $2) RETURNING *`, [user.name, user.password]
        )).rows[0]
    } catch (error) {
        console.log(error)
    }
}