
import express, { json } from 'express';
import morgan from 'morgan';
import { PORT_SERVER } from './src/loadEnv.js';
import db from './src/db/connect.js';
import path from 'path';
import cors from 'cors';

import {
    routeCategoria, 
    routeLeyenda, 
    routeMunicipio
} from './src/routes/router.js'

const server = express();

server.use(morgan("dev"));
server.use(json());
server.use(cors());

server.use('/static', express.static(path.join(process.cwd(), 'public')));

try {
    await db.authenticate();
    console.log("Conexion exitosa");
} catch (error) {
    console.log(error);
}

server.use('/hivas', routeLeyenda);
server.use('/hivas', routeCategoria);
server.use('/hivas', routeMunicipio);

server.listen(PORT_SERVER, () => {
    console.log(`Escuchando en el puerto ${PORT_SERVER}...`);
});

