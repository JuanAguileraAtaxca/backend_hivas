
// se importa los modelos 
import { municipio, leyenda, categoria } from "../models/models.js";

/**
 * 
 * @param {*} req 
 * @param {*} res 
 * @returns 
 * obtenerMunicipios(req, res): se obtienen los municipios de db
 */
export const obtenerMunicipios = async (req, res) => {
    try {
        
        // con la funcion findAll() se obtienen todas las categorias
        const municipios = await municipio.findAll();

        // si la lista de los municipios en longitud es 0, se manda un objeto de error
        if(municipios.length === 0){
            return res.status(404).json({
                ok: false,
                message: 'No hay municipios disponibles'
            });
        }

        console.log(municipios);

        // si la longitud es mayor a 0, se retorna la lista de municipios
        return res.status(200).json(municipios);

    } catch (error) {
        console.error(error);
        // en caso de excepciones, se lanza un objeto de error 
        // con status 404
        return res.status(404).json({
            ok: false,
            message: "No fue posible obtener los municipios"
        });
    }
}

/**
 * 
 * @param {*} req 
 * @param {*} res 
 * @returns 
 * obtenerLeyendasPorMunucipio(req, res): se obtiene un listado de leyendas por municipio
 */
export const obtenerLeyendasPorMunicipio = async (req, res) => {

    try {
        
        // se obtiene el id de la url
        const {id} = req.params;

        // se hace la consulta que obtiene todas las leyendas por id 
        // del municipio, se hace un join para obtener el nombre de las 
        //categorias y municipios
        const leyendas = await leyenda.findAll({
            where: {
                idmunicipio: id
            }, 
            include: [
                {
                    model: categoria, 
                    attributes: ["nombre"]
                },
                {
                    model: municipio, 
                    attributes: ['nombre'], 
                    
                }, 
            ]
        });


        // si la longitud es 0, se devuelve un codigo de error 404
        if(leyendas.length === 0){

            return res.status(404).json({
                ok: false,
                message: 'No hay municipios disponibles'
            });
        }

        // de lo contario, se obtiene todas las leyendas por municipio
        return res.status(200).json(leyendas);

    } catch (error) {
        console.error(error);

        // si se presenta una excepcion, se retorna un objeto de error
        return res.status(404).json({
            ok: false,
            message: 'Error al obtener las leyendas'
        });
    }
}

