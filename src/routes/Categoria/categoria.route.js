
import { Router } from "express";
import { 
    obtenerCategorias, 
    obtenerLeyendasPorCategoria 
} from "../../controllers/categoria.controller.js";

const route = Router();

route.get('/obtener-leyendas-categoria/:id', obtenerLeyendasPorCategoria);
route.get('/obtener-categorias', obtenerCategorias);

export default route;
