const versosController = require('../controllers/varsiculoController');
module.exports = (app) => {

    app.post('/api/es/versos/getAll', versosController.getAll);

    app.post('/api/es/versos/getOne', versosController.getOne);
    
}