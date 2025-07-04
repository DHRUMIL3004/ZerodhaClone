
const bcrypt = require("bcryptjs");
const User = require("../model/UsersModel.js");
const {createSecretToken} = require("./SecretToken.js");

module.exports.SignUp = async (req, res, next) => {
    try {
     
      const { email, password } = req.body;
      //console.log(`${email}--------${password}`); 

      const existingUser = await User.findOne({ email });
      if (existingUser) {
        return res.status(202).json({ message: "User already exists" });
      }
      const user = await User.create({ email, password });
      const token = createSecretToken(user._id);
      res.cookie("token", token, {
        withCredentials: true,
        httpOnly: false,
      });
      res
        .status(201)
        .json({ message: "User signed in successfully", success: true, user });
      next();
    } catch (error) {
      console.error(error);
    }
};

module.exports.LogIn = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    if(!email || !password ){
      return res.json({message:'All fields are required'})
    }
    const user = await User.findOne({ email });
    if(!user){
      return res.status(202).json({message:'Incorrect password or email' }) 
    }
    const auth = await bcrypt.compare(password,user.password)
    if (!auth) {
      return res.json({message:'Incorrect password or email' }) 
    }
     const token = createSecretToken(user._id);
     res.cookie("token", token, {
       withCredentials: true,
       httpOnly: false,
     });
     res.status(201).json({ message: "User logged in successfully", success: true });
     next()
  } catch (error) {
    console.error(error);
  }
}
