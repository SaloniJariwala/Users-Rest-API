const asyncHandler = require("express-async-handler")

const User = require("../Model/userModel");

const getUsers = asyncHandler(async (req, res) => {
    const users = await User.find();
    res.status(200).json(users);
})

const setUsers = asyncHandler(async (req, res) => {
    console.log("-----In Set User-----");
    if(!req?.body?.name){
        //console.log(req.body.name);
        res.status(400);
        throw new Error("Please Provide Your Name");
    }
    const user = await User.create({
        name: req.body.name
    });
    //console.log(user);
    res.status(200).json(user);
})

const putUsers = asyncHandler(async (req, res) => {
    const user = await User.findById(req.params.id);

    if(!user){
        res.status(400);
        throw new Error("User Not Found")
    }

    const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    })

    res.status(200).json(updatedUser);
})

const deleteUsers = asyncHandler(async (req, res) => {
    const user = await User.findById(req.params.id);

    if(!user){
        res.status(400);
        throw new Error("User Not Found")
    }

    await user.remove();

    res.status(200).json({ message: `Delete user having id ${req.params.id}`});
})

module.exports = { getUsers, setUsers, putUsers, deleteUsers }