import express from 'express'
import basicController from './controllers/basicController'
const routers = express()
routers.get('/', basicController.get)

export default routers