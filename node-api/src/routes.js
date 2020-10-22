const {Router} = require('express')

const routes = Router()

const ProductController = require("./controllers/ProductController")

routes.get('/products',ProductController.index)
routes.get('/products/:id',ProductController.show)
routes.put('/products/:id',ProductController.update)
routes.delete('/products/:id',ProductController.destroy)
routes.post('/products',ProductController.storage)

module.exports = routes