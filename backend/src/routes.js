const express = require('express')
const OngController = require('./controllers/OngsController')
const IncidentController = require('./controllers/IncidentController')
const ProfileController = require('./controllers/ProfileController')
const SessionController = require('./controllers/SessionController')

const routes = express.Router()

routes.post('/session', SessionController.store)

routes.get('/ongs', OngController.index)
routes.post('/ongs', OngController.store)

routes.post('/incidents', IncidentController.store)
routes.get('/incidents', IncidentController.index)
routes.delete('/incidents/:id', IncidentController.delete)

routes.get('/profile', ProfileController.index)

module.exports = routes
