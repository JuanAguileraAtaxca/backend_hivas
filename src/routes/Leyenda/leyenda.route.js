
// se importa el enrutador de express
import {Router} from 'express';
// se importan controladores
import { listarLeyendas, obtenerLeyendaPorNombre } from '../../controllers/leyenda.controller.js';

const route = Router();

// Define la ruta GET '/obtener-leyendas' que ejecuta la función listarLeyendas
// Esta ruta devuelve la lista completa de leyendas
route.get('/obtener-leyendas', listarLeyendas);


// Define la ruta GET '/obtener-leyenda-por-nombre/:nombre' que ejecuta la función obtenerLeyendaPorNombre
// Esta ruta recibe un parámetro de 'nombre' y devuelve la leyenda correspondiente
route.get('/obtener-leyenda-por-nombre/:nombre', obtenerLeyendaPorNombre);

// exporta el objeto 
export default route;
