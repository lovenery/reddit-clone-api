import express from 'express'
import basicController from './controllers/basicController'
import userController from './controllers/userController'

const routers = express()
routers.get('/', basicController.get)
routers.post('/signup', userController.post)

export default routers