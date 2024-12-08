import pg from 'pg'

const { Client } = pg
const client = new Client({ 
    user: 'postgres',
    password: 'mysecretpassword',
    host: '127.0.0.1',
    port: 5432,
    database: 'yourlook',
})

await client.connect()

export function useDb() {
    return client
}