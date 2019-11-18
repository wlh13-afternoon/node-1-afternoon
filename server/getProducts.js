const products = require('../products.json')

module.exports = {
    getProducts(req,res) {
        console.log(typeof req.query.price)
        if(req.query.price){
            res.status(200).send(products.filter(el => el.price >= req.query.price))
        }else {
            res.status(200).send(products)
        }
    },
    getProductById(req, res){
       let newProduct =  products.filter(el => el.id === +req.params.id)
       if(newProduct.length){
           res.status(200).send(newProduct)
       }else res.status(500).send({message: "Item not in list"})
    }
}