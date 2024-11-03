const Users = require('../../Models/UserModel/UserModel');

class UserRepo{
    constructor(UserController){
        this.usercontroller = UserController;
    }

    async UserRegister(userName, email , password){
        const newUser = new Users({userName, email , password});
        await newUser.save();
        return newUser;
    }

    async UserLogin(email , password){
        let user;
        let isMatch;
        try{
            user = await this.Vaildation(email);
            isMatch = await user.passwordCompare(password);

        }catch(err){
            console.log(err);
        }  
        
    
        if (user && isMatch){ 
            return user;     
        }
    } 
      
    async Vaildation(email){ 
        const emailIsFound = await Users.findOne({email:email.toLowerCase()}); 
        if(emailIsFound){
           return emailIsFound;
        } 
        else{
            return "email is not found";
        }    
    }

    async GetUserById(id){
        const user = await Users.findById(id);
        return user;

    }

}
  
module.exports =  UserRepo; 


