const db = require('../config/config');

class Books{

    
    static create(book){
        const sql = `
        INSERT into 
            books_english(id, book_name, chapters_num) 
            VALUES ($1, $2, $3) RETURNING id`;
        
            return db.oneOrNone(sql, [
                book.id,
                book.name,
                book.capitulos
            ]);
    };
}



Books.create(ejemplo)
