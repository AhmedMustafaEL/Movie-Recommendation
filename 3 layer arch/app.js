const express = require("express");
const app = express();
app.use(express.json());
const mongoose = require("mongoose");

//product layers linking

const Repo = require('./Repositories/ProductsRepo/ProductsRepo');
const Controller = require('./Controllers/ProductsController/ProductsControllers');
const Routes = require('./Routes/Products/Products.routes');

const productRepo = new Repo();
const productController = new Controller(productRepo);

app.use("/api/v1",Routes(productController));

//user layers linking

const UserRepo = require('./Repositories/UserRepo/UserRepo');
const UserController = require('./Controllers/UserController/UserController');
const UserRoutes = require('./Routes/UserRoutes/UserRoutes');

const userRepo = new UserRepo();
const userController = new UserController(userRepo);

app.use("/api/v1/auth/", UserRoutes(userController));

// videos layers linking
const VideosRepo = require('./Repositories/VideosRepo/VideosRepo');
const VideosController = require('./Controllers/VideosController/VideosController');
const VideosRoutes = require('./Routes/VideosRoutes/VideosRoutes');

const videoRepo = new VideosRepo();
const videoController = new VideosController(videoRepo);

app.use("/api/v1/watch/", VideosRoutes(videoController));


mongoose.connect("mongodb://localhost:27017/test")
.then(()=>{
    console.log("connected");
    app.listen(3000 , ()=>{
        console.log("running on port 3000");
    });
})
.catch((err)=>{
    console.log(err);
});
