const Products = require('../../Models/ProductModel/ProductModel');

class ProductRepo{
    constructor(){};

    async getProducts(){
        const products = await Products.find();
        if(products.length > 0 ) return products;
    }

    async addProduct(productData){
        const newProduct = new Products(productData);
        await newProduct.save();
        return newProduct;
    }

    async getTheProduct(id){
        const product = await Products.findById(id);
        if (product) {
            return product;
        }
    }

    async updateTheProduct(id , data){
        const prod = await Products.findByIdAndUpdate(id, data, {new:true});
        if(prod){
            return prod;
        }
    }

    async deleteIt(id){
        const product = await Products.findByIdAndDelete(id);
        return product;
    }

}

module.exports = ProductRepo;