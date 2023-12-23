import dotenv from "dotenv";
dotenv.config();

export const ENV_ACCESS = {
    host: process.env.MYSQLDB_HOST,
    user: process.env.MYSQLDB_USER,
    password: process.env.MYSQLDB_PASS,
    database: process.env.MYSQLDB_DATA_BASE,
    mySQLLocalPort: process.env.MYSQLDB_LOCAL_PORT,
    mySQLdockerPort: process.env.MYSQLDB_DOCKER_PORT,
    nodeLocalPort: process.env.NODE_LOCAL_PORT,
    nodeDockerPort: process.env.NODE_DOCKER_PORT,
}


