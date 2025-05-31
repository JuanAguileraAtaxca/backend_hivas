// importar router para crear las rutas
import { Router } from "express";
// se importan los controladores
import { 
    obtenerCategorias, 
    obtenerLeyendasPorCategoria 
} from "../../controllers/categoria.controller.js";

// se crea una instancia de Router
const route = Router();

// con el objeto creado se indica el verbo http que se utiliza, 
// la ruta y el controlador asociado
route.get('/obtener-leyendas-categoria/:id', obtenerLeyendasPorCategoria);
route.get('/obtener-categorias', obtenerCategorias);

// se hace un export no nombrado del objeto router
export default route;
