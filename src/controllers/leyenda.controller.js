
import { Op } from 'sequelize';
import {
    categoria, 
    leyenda, 
    municipio
} from '../models/models.js';

export const listarLeyendas = async (req, res) => {

    try {

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

        if(leyendas.length == 0){

            return res.status(200).json({
                ok: false, 
                message: 'No hay leyendas disponibles'
            });
        }

        return res.status(200).json(leyendas);

    } catch (error) {
        console.log(error);
        return res.status(404).json({
            ok: false,
            message: "Error al obtener las leyendas"
        });
    }

}

export const obtenerLeyendaPorNombre = async (req, res) => {

    try {

        const {nombre} = req.params;

        console.log(nombre);
        console.log(`${nombre}%`);

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


        if(leyendas.length === 0){

            return res.status(200).json({
                ok: false, 
                message: 'No hay leyendas con ese nombre'
            });
        }

        return res.status(200).json(leyendas);
        
    } catch (error) {
        console.log(error);
        return res.status(404).json({
            ok: false,
            message: 'No es posible obtener leyendas por nombre'
        });
    }
}
