
/**
 * Punto de inicio del backend
 */
// importacion de librerias de terceros
import express, { json } from 'express';
import morgan from 'morgan';
import db from './src/db/connect.js';
import path from 'path';
import cors from 'cors';

// cargas variables de entorno
import { PORT_SERVER } from './src/loadEnv.js';

// importar rutas
import {
    routeCategoria, 
    routeLeyenda, 
    routeMunicipio
} from './src/routes/router.js'

// crear instancia de express
const server = express();

// usar morgan para monitorear peticiones
server.use(morgan("dev"));
// permitir uso de json
server.use(json());
// permitir peticiones
server.use(cors());

// dar la posibillidad de ingresar a recursos como imagenes
server.use('/static', express.static(path.join(process.cwd(), 'public')));

// conexion a la base de datos 
try {
    await db.authenticate();
    console.log("Conexion exitosa");
} catch (error) {
    console.log(error);
}

// indicar las rutas que se puede utilizar, 
// en este caso son tres (leyenda, categoria y municipio)
server.use('/hivas', routeLeyenda);
server.use('/hivas', routeCategoria);
server.use('/hivas', routeMunicipio);

// se activa el servidor y se le indica en que puerto va a escuchar
server.listen(PORT_SERVER, () => {
    console.log(`Escuchando en el puerto ${PORT_SERVER}...`);
});

