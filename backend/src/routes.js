const { Router } = require('express');

const DeVController = require('./controllers/DevController');
const SearchController = require('./controllers/SearchController');

const routes = Router();

// Métodos HTTP: GET, POST, PUT, DELETE

// Tipos de parâmetros:
// a - Query Params: req.params ( Filtros, ordenação, paginação...)
// b - Route Params: req.params (Identificar um recurso na alteração ou remoção)
// c - Body: req.body ( Dados para criação ou alteração de um registro )

//

routes.get('/devs', DeVController.index);
routes.post('/devs', DeVController.store);

routes.get('/search', SearchController.index);


module.exports = routes;