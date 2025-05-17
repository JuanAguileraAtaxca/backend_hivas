
import { Router } from "express";
import { 
    obtenerLeyendasPorMunicipio,
    obtenerMunicipios 
} from "../../controllers/municipio.controller.js";

const route = Router();

route.get('/obtener-municipios', obtenerMunicipios);
route.get('/obtener-leyendas-municipio/:id', obtenerLeyendasPorMunicipio);

export default route;
