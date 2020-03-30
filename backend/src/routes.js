const express = require('express');
const { celebrate, Joi, Segments } = require('celebrate');

const OngController = require('./controller/OngController');
const IncidentController = require('./controller/IncidentController');
const ProfileController = require('./controller/ProfileController');
const SessionController = require('./controller/SessionController');


const connection = require('./database/connection');

const routes = express.Router();

routes.get('/', (request, response) => {
    return response.json({
        evento: 'Semana OmniStack 11.0',
        aluno: 'Cleidson Oliveira',
        texto: 'Hello World!'
    })
});

routes.post('/sessions', celebrate({
    [Segments.BODY]: Joi.object().keys({
        id: Joi.string().required(),
    })
}), SessionController.create);

routes.post('/ongs', celebrate({
    [Segments.BODY]: Joi.object().keys({
        name: Joi.string().required(),
        email: Joi.string().required().email(),
        whatsapp: Joi.number().required().min(11),
        city: Joi.string().required(),
        uf: Joi.string().required().length(2)
    })
}), OngController.create);
routes.get('/ongs', OngController.index);

routes.get('/profile', celebrate({
    [Segments.HEADERS]: Joi.object({
        authorization: Joi.string().required(),
    }).unknown()
}), ProfileController.index);

routes.post('/incidents', celebrate({
    [Segments.BODY]: Joi.object().keys({
        title: Joi.string().required(),
        description: Joi.string().required(),
        value: Joi.number().required(),
    })
}), IncidentController.create);
routes.get('/incidents', celebrate({
    [Segments.QUERY]: Joi.object({
        page: Joi.number()
    })
}), IncidentController.index);
routes.delete('/incidents/:id', celebrate({
    [Segments.PARAMS]: Joi.object({
        id: Joi.number().required(),
    })
}), IncidentController.delete);

module.exports = routes;