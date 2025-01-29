import express from 'express'
import { getProductsContoller,addProductsController,getProductsByIdController } from "../contollers/productsContoller.js";


const productRouter = express.Router();



productRouter.get('/products',getProductsContoller)
productRouter.post('/addProduct',addProductsController)
productRouter.get('/product/:id',getProductsByIdController)



export default productRouter;
