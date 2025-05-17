
import { config } from "dotenv";

config(".env");

// server
export const PORT_SERVER  = process.env.PORT_SERVER;

// db server
export const POSTGRES_DB = process.env.POSTGRES_DB;
export const POSTGRES_USER = process.env.POSTGRES_USER;
export const POSTGRES_PASSWORD = process.env.POSTGRES_PASSWORD;
export const POSTGRES_PORT = process.env.POSTGRES_PORT;
export const POSTGRES_SERVER = process.env.POSTGRES_SERVER;
