const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const logger = require('morgan');
const cors = require('cors');

// const questions  = require('./routes/questionsRoutes');
// const answer = require('./routes/answerRoutes');
// const preguntasasociadas = require('./routes/preguntasasociadasRoutes');
// const consultasRoutes = require('./routes/consultasRoutes');


const port = process.env.PORT || 3000;


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({
    extended:true
}));
app.use(cors());

app.disable('x-powered-by');

app.set('port', port);


// questions(app);
// answer(app);
// preguntasasociadas(app);
// consultasRoutes(app);


server.listen(3000, function(){
    console.log('Aplicacion de NodeJS ' + process.pid + ' Iniciada...')
});

app.get('/', (req, res) => {
    res.send('Ruta raiz del backend');
});


// Error handler
app.use((err, req, res, next) =>{
    console.log(err);
    res.status(err.status || 500).send(err.stack);
});

module.exports = {
    app: app,
    server: server
}