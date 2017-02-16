import express from 'express'

import basicController from './controllers/basicController'
import userController from './controllers/userController'
import postController from './controllers/postController'
import commentController from './controllers/commentController'

const routers = express()
routers.get('/', basicController.get)
routers.post('/signup', userController.post)

routers.post('/post', postController.post)
routers.get('/posts', postController.getAll)

routers.post('/comment', commentController.post)

export default routers