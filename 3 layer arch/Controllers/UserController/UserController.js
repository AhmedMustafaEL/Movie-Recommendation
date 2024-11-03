const generateToken = require('../../Utils/jwtUTILS');
class userController{
    constructor(UserRepo){
        this.userRepo = UserRepo;
    }

    async userRegister(UserData){
        const {userName, email, password} = UserData;
        const emailCheck = await this.userRepo.Vaildation(email);
        if(!emailCheck){
           const newUser = await this.userRepo.UserRegister(userName, email, password); 
           return newUser;
        }else{
            return "email is already registered!";
        }
    }

    async userLogin(UserData){
        const {email , password} = UserData;
        const user = await this.userRepo.UserLogin(email , password);
        if(!user){
            return "invalid user or password";
        }else{
            const token = generateToken(user._id);
            return token;
        }

    }

}

module.exports = userController;