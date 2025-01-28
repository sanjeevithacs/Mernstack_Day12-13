// MORE SIMPLER   -   from app.js

const express = require("express")
const productRoutes=express.Router()
const {getProducts, getProduct , post_fun , delete_fun, patch_fun, put_fun, validate, idValidator}= require("../routeHandler/productFunctions")   //importing 

productRoutes.param("id",idValidator)           //after idValidator

// productRoutes.route("/").get(getProducts).post(post_fun)
productRoutes.route("/").get(getProducts).post(validate,post_fun)         //after validate function added  
productRoutes.route("/:id").get(getProduct).delete(delete_fun).patch(patch_fun).put(put_fun)

module.exports=productRoutes ;