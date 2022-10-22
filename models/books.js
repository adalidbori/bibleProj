

const file = require('../Arreglados/Libros/ES/books.json');

const Books = {};


Books.getAll = () =>{
    return file
};

//let aux = jsonQuery('[*capitulo=1]', {data: file}).value


module.exports = Books;
