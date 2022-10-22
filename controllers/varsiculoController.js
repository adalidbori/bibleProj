const Versos = require('../models/versiculos')

module.exports = {
    async getAll(req, res, next){

        const {libroid, capitulonumero} = req.body;

        try{
            const data = await Versos.getAll(libroid, capitulonumero);
            return res.status(201).json(data);          
        }catch(error){
            console.log(`Error: ${error}`);
            return res.status(501).json({
                success: false,
                massage: 'Error al obtener los versos'
            });           
        }
    },

    async getOne(req, res, next){

        const result = req.body;
        try{
            const data = await Versos.getOne(result.libroid, result.capitulonumero, result.versoNumero);
            return res.status(201).json(data);          
        }catch(error){
            console.log(`Error: ${error}`);
            return res.status(501).json({
                success: false,
                massage: 'Error al obtener el verso'
            });           
        }
    }



};