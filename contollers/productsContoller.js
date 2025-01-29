import Product from "../models/productModel.js";


//get products
export const getProductsContoller = async (req,res) =>{
    try{
        const products = await Product.find({});
        res.json(products);

    }catch(e){
        res.status(500).send({message:e.message});
    }
}


//get product by id

export const getProductsByIdController = async (req,res) => {
    const { id: productId } = req.params;
    console.log(productId);
    try {
        console.log(productId);
        const product = await Product.findById(productId);
        console.log(product);
        if(!product){
            return res.status(404).json({message: "Product not found"})
        }
        
        res.json(product);
    }catch(e){
        res.status(500).send({message:e.message});
    }
}

//add products
export const addProductsController = async (req,res) =>{
const {productId,productName,productPrice,productImg,description,category} = req.body;
    if(!productId || !productName || !productPrice || !productImg || !description || !category){
        console.log("Please provide all data");
        return res.status(400).json({message: "Please provide all data"})
    }
    try{
        const newProduct = new Product({productId,productName,productPrice,productImg,description,category});
        await newProduct.save();
        res.status(201).json("Data added successfully !");

    }catch(e){
        res.status(404).send({message:e.message});
    }


}