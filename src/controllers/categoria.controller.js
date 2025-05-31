
// se importan los modelos
import { categoria, leyenda, municipio } from "../models/models.js"

/**
 * 
 * @param {*} req 
 * @param {*} res 
 * @returns 
 * 
 * obtenerCategorias(req, res): obtiene todas las categorias de la db
 */
export const obtenerCategorias = async (req, res) => {

    try {
        
        // a traves de un await para experar la carga, se obtienen
        // todas las categorias cone el metodo "findAll()"
        const categorias = await categoria.findAll();

        // si la lista de categorias en cuanto a longitud es igual a 0, 
        // significa que no hay nada
        if(categorias.length === 0){
            // se retorna un status 404, con un objeto que 
            // indica que la respuesta no fue posible y un mensaje
            return res.status(404).json({
                ok: false, 
                message: "No hay categorias disponibles"
            });
        }

        // de lo contrario, se retorna un status 200 y el listado
        return res.status(200).json(categorias);

    } catch (error) {

        // en caso de una excepcion se retorna un objeto de error
        console.log(error);
        return res.status(404).json({
            ok: false, 
            message: "No es posible obtener las categorias"
        });
    }
}

/**
 * 
 * @param {*} req 
 * @param {*} res 
 * @returns 
 * 
 * obtenerLeyendasPorCategoria(req, res): se obtiene 
 * las leyendas de acuerdo a una categoria
 */
export const obtenerLeyendasPorCategoria = async (req, res) => {
    try {
        
        // se obtiene un parametro de la url
        const {id} = req.params;

        // se obtiene todas la leyendas de acuerdo al id
        // de la categoria, para obtener el nombre de la categoria y 
        // el municipio se hace un join
        const leyendas = await leyenda.findAll({
            where: {
                idcategoria: id
            }, 
            include: [
                {
                    model: municipio, 
                    attributes: ['nombre']
                },
                {
                    model: categoria, 
                    attributes: ['nombre'], 
                }
            ]
        });

        // si la longitud de la lista es 0, se devuelve un objeto
        // de error
        if(leyendas.length === 0){
            return res.status(404).json({
                ok: false, 
                message: "La categoria no existe"
            });
        }

        // de lo contario, se regresa un listado de las leyendas
        return res.status(200).json(leyendas);
    } catch (error) {

        // se regresa un objeto de error
        console.error(error);
        return res.status(404).json({
            ok: false, 
            message: "No fue posible obtener leyendas por categoria"
        });
    }
}


