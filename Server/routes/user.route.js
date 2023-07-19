const {Router}  =require("express")
const userRoute = Router()
const {UserModel}  =require("../model/user.model")
const {userValidator} = require("../middlewares/userValidator")

//Get All the User Logic [Basically GET Request]
userRoute.get('/users', async (req, res) => {
  try {
    const getData = await UserModel.find();
    res.status(200).send(getData); // Using res.status(status).send(body)
  } catch (error) {
    res.status(404).send({ error: 'Something Went Wrong' });
  }
});



//Adding the User Logic [Basically POST Request]
userRoute.post("/users",userValidator,async(req,res)=>{
    try {
        const post =   new UserModel(req.body)
        await post.save();
        res.status(200).send({"message":"User Added Successfully"})
    } catch (error) {
        res.status(400).send({"error":error.message})
    }
    })

    module.exports={userRoute}