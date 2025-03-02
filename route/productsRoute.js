import express from 'express'
import { getProductsContoller,addProductsController,getProductsByIdController,deleteProductsByIdController,updateProductByIdController } from "../contollers/productsContoller.js";


const productRouter = express.Router();



productRouter.get('/products',getProductsContoller)
productRouter.post('/addProduct',addProductsController)
productRouter.get('/product/:id',getProductsByIdController)
productRouter.delete('/product/:id',deleteProductsByIdController)
productRouter.put('/product/:id',updateProductByIdController)




export default productRouter;
