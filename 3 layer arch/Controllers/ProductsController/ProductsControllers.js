class ProductsController{
    constructor(ProductRepo){
        this.productsrepo = ProductRepo;
    };

    async getProducts(){
        const ProductsData = await this.productsrepo.getProducts();
        return ProductsData;
    }

    async addProduct(newProduct){
        const newProductTo = await this.productsrepo.addProduct(newProduct);
        return newProductTo;
    }

    async getProduct(id){
        const theProduct = await this.productsrepo.getTheProduct(id);
        return theProduct;
    }

    async findProductAndUpdate(id , data){
        const updatedProduct = await this.productsrepo.updateTheProduct(id , data);
        return updatedProduct;
    }

    async deleteThisProduct(id){
        const deletedProduct = await this.productsrepo.deleteIt(id);
        return deletedProduct;
    }

}

module.exports = ProductsController;