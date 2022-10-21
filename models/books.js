const db = require('../config/config');
const jsonQuery = require('json-query')
const file = require('../Arreglados/EN/GEN.json');

class Books{

    
    static create(book){
        const sql = `
        INSERT into 
            books_english(id, book_name, chapters_num) 
            VALUES ($1, $2, $3) RETURNING id`;
        
            return db.oneOrNone(sql, [
                "book.id",
                "book.name",
                120
            ]);
    };
}

let aux = jsonQuery('[*capitulo=1]', {data: file}).value


console.log(aux)
