const Books = require('../models/books')

module.exports = {
    async getAll(req, res, next){
        try{
            const data = await Books.getAll();
            return res.status(201).json(data);          
        }catch(error){
            console.log(`Error: ${error}`);
            return res.status(501).json({
                success: false,
                massage: 'Error al obtener los libros'
            });           
        }
    }

};