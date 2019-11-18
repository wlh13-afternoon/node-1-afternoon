const express = require('express')
const app = express()
app.use(express.json())
const PORT = 4500

const ctrl = require('./getProducts')

app.get('/api/products', ctrl.getProducts)
app.get(`/api/product/:id`,ctrl.getProductById)


app.listen(PORT, () => console.log(`Listening on ${PORT}`))