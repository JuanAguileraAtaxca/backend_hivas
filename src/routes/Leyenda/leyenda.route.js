
import {Router} from 'express';
import { listarLeyendas, obtenerLeyendaPorNombre } from '../../controllers/leyenda.controller.js';

const route = Router();

route.get('/obtener-leyendas', listarLeyendas);
route.get('/obtener-leyenda-por-nombre/:nombre', obtenerLeyendaPorNombre);

export default route;
