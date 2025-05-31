
// enrutador de express 
import { Router } from "express";

// se exporta los controladores que manejaran la logica
import { 
    obtenerLeyendasPorMunicipio,
    obtenerMunicipios 
} from "../../controllers/municipio.controller.js";

// se crea un enrutador
const route = Router();

// Define la ruta GET '/obtener-municipios' que ejecuta la función obtenerMunicipios
// Esta ruta devuelve la lista completa de municipios disponibles
route.get('/obtener-municipios', obtenerMunicipios);

// Define la ruta GET '/obtener-leyendas-municipio/:id' que ejecuta obtenerLeyendasPorMunicipio
// Esta ruta recibe un 'id' que representa el identificador del municipio
// Devuelve las leyendas asociadas a ese municipio específicado
route.get('/obtener-leyendas-municipio/:id', obtenerLeyendasPorMunicipio);

export default route;
