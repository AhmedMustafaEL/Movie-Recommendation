const express = require("express");
const router = express.Router();
const  protect = require("../../Middlewares/IsAdmin");

const productsRoutes = ( ProductsController )=>{
    router.get('/products/' , async(req, res)=>{
        try{
            const products = await ProductsController.getProducts();
            if(products.length > 0)res.status(200).json({msg: "all products are below" , products})
                res.status(200).json({msg:"no products found"})
        }catch(err){
            console.log(err);
            res.status(500).json({msg: "error while retriving the data" , err: err.message})
        }
    }); 
    router.get('/products/:id' , async (req , res)=>{
        try{
            const id = req.params.id;
            const product = await ProductsController.getProduct(id);
            if(product){
                res.status(200).json({msg: "here is the product" , product})
            } else{
                res.status(200).json({msg:"product is not found"})
            }
        }catch(err){
            console.log(err);
            res.sendStatus(500).json({msg:"there is an error" , err: err.message});
        }
    });
    router.post('/products' , protect,async (req , res)=>{
        try{
            // const {productName , price , quantity , category} = req.body;
            const body = req.body;
            const newProduct = await ProductsController.addProduct(body);
            res.status(201).json({msg:"product is added successfully" , newProduct});
        }catch(err){
            console.log(err);
            res.status(500).json({msg:"there is an error happened" , err: err.message})
        }
    });
    router.put('/products/:id', protect ,async (req,res)=>{
        try{
            const id = req.params.id;
            const body = req.body;
            const toBeUpddated = await ProductsController.findProductAndUpdate(id , body);
            if(toBeUpddated){res.status(200).json({msg:"updated!" , toBeUpddated});}else{
                            res.status(200).json({msg:"product isn't found"});
            }
        }catch(err){
            console.log(err);
            res.status(500).json({msg:"there is an error" , err: err.message});
        }
    });
    router.delete('/products/:id' , protect ,async (req,res)=>{
        const id = req.params.id;
        const productToBeDeleted = await ProductsController.deleteThisProduct(id);
        const checkon = await ProductsController.getProduct();
        if(!checkon){
            res.status(200).json({msg:"deleted!"});
        }else{
            res.status(200).json({msg:"it's still there try again!"})
        }
        try{}catch(err){
            console.log(err);
            res.status(500).json({msg:"there is an error" , err:err.message})
        }
    });

    return router;
}

module.exports = productsRoutes;