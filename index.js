import express from 'express'
import { DB } from './config/db.js'
import { ENV_ACCESS } from './config/envAccess.js'


const app = express()

app.get('/', async (rep, res) => {
    const [result] = await DB().query("SELECT NOW()")
    res.json(result)
})

app.get('/ping', (rep, res) => {
    res.send('hello word')
})

app.listen(ENV_ACCESS.nodeDockerPort, () => {
    console.log(`server is running on port: ${ENV_ACCESS.nodeDockerPort}`)
})

