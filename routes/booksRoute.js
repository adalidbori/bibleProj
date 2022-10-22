const bookController = require('../controllers/bookController');
module.exports = (app) => {

    app.get('/api/es/book/getAll', bookController.getAll);
    
}