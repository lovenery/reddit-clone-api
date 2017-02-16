import express from 'express'

import basicController from './controllers/basicController'
import userController from './controllers/userController'
import postController from './controllers/postController'

const routers = express()
routers.get('/', basicController.get)
routers.post('/signup', userController.post)
routers.post('/post', postController.post)
routers.get('/posts', postController.getAll)

export default routers