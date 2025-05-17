
import { Sequelize } from "sequelize";
import { 
    POSTGRES_DB, 
    POSTGRES_USER, 
    POSTGRES_PORT, 
    POSTGRES_PASSWORD, 
    POSTGRES_SERVER
} from "../loadEnv.js";

const db = new Sequelize(POSTGRES_DB, POSTGRES_USER, POSTGRES_PASSWORD, {
    host: POSTGRES_SERVER, 
    dialect: 'postgres', 
    port: POSTGRES_PORT, 
    define: {
        timestamps: false
    },
    pool: {
        min: 0, 
        max: 20, 
        acquire: 30000,
        idle: 10000
    }, 
});

export default db;
