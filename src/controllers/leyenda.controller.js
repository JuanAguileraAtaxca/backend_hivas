
// se importa Op para realizar operaciones logicas
import { Op } from 'sequelize';
// se importan los modelos 
import {
    categoria, 
    leyenda, 
    municipio
} from '../models/models.js';

/**
 * 
 * @param {*} req 
 * @param {*} res 
 * @returns 
 * listarLeyendas(req, res): se obtiene el listado de todas las leyendas
 */
export const listarLeyendas = async (req, res) => {

    try {

        // se hace una consulta para obtener todas las leyendas
        // a traves de un join se obtiene el nombre de los municipios
        // y categoria
        const leyendas = await leyenda.findAll({
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

        // se verifica la longitud de la lista, si es cero,
        // se devuelve un objeto de error
        if(leyendas.length == 0){

            return res.status(404).json({
                ok: false, 
                message: 'No hay leyendas disponibles'
            });
        }

        // caso contrario, sse devuelve un status 200 y el listado de las
        // leyendas en json
        return res.status(200).json(leyendas);

    } catch (error) {
        console.log(error);

        // si se trata de una excepcion se lanza un
        // objeto de error con status 404
        return res.status(404).json({
            ok: false,
            message: "Error al obtener las leyendas"
        });
    }

}

/**
 * 
 * @param {*} req 
 * @param {*} res 
 * @returns 
 * 
 * obtenerLeyendaPorNombre(req, res): se obtiene las leyendas por nombre
 */
export const obtenerLeyendaPorNombre = async (req, res) => {

    try {

        // se obtiene un parametro de la url
        const {nombre} = req.params;

        console.log(nombre);
        console.log(`${nombre}%`);

        // se obtiene un listado de leyendas, se usa el op para utiliza 
        // el operador ilike, este sirve para hacer busquedas de los nombres ignorando
        // mayusculas y minusculas
        const leyendas = await leyenda.findAll({
            where: {
                titulo: {
                    [Op.iLike] : `%${nombre}%`, 
                }
            }, 
            include: [
                {
                    model: categoria, 
                    attributes: ['nombre']
                }, 
                {
                    model: municipio, 
                    attributes: ['nombre']
                }
            ]
        });

        console.log(leyendas);

        // la longitud de las leyendas es 0, se devuelve un objeto 
        // de error
        if(leyendas.length === 0){

            return res.status(404).json({
                ok: false, 
                message: 'No hay leyendas con ese nombre'
            });
        }

        // de lo contrario, se devuelve un status 200 y el 
        // listado de las leyendas
        return res.status(200).json(leyendas);
        
    } catch (error) {
        console.log(error);
        // si se presenta una excepcion se manda un status 404,
        // se lanza un objeto de error
        return res.status(404).json({
            ok: false,
            message: 'No es posible obtener leyendas por nombre'
        });
    }
}
