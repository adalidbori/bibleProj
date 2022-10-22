const jsonQuery = require('json-query')

const Versos = {};


Versos.getAll = (libroID, capituloNumero) =>{
    const file = require(`../Arreglados/ES/${libroID}.json`)
    return jsonQuery(`[*capitulo=${capituloNumero}]`, {data: file}).value
    // console.log(`Clientes: ${data}`); 
};

Versos.getOne = (libroID, capituloNumero, versoNumero) =>{
    const file = require(`../Arreglados/ES/${libroID}.json`)
    return jsonQuery(`[*capitulo=${capituloNumero} & numeroOrden=${versoNumero}]`, {data: file}).value
    // console.log(`Clientes: ${data}`); 
};

//let aux = jsonQuery('[*capitulo=1]', {data: file}).value


module.exports = Versos;