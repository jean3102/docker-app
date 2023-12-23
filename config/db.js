
import { createPool } from 'mysql2/promise'
import { config } from 'dotenv'
import { ENV_ACCESS } from './envAccess.js'

config()

const configuration = {
    host: ENV_ACCESS.host,
    user: ENV_ACCESS.user,
    port: ENV_ACCESS.mySQLdockerPort,
    password: ENV_ACCESS.password,
    database: ENV_ACCESS.database,
    waitForConnections: true,
    connectionLimit: 10, // Adjust the limit based on your needs
    queueLimit: 0, // No limit on the connection queue
}

export const DB = () => {
    const pool = createPool(configuration)

    try {
        return pool
    } catch (error) {
        console.log(`🚀 ------------ error:`, error)
    }
}
