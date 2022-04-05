const asyncHandler = require("express-async-handler")

const User = require("../Model/userModel");

const getUsers = asyncHandler(async (req, res) => {
    const users = await User.find()
    res.status(200).json(users);
})

const setUsers = asyncHandler(async (req, res) => {
    console.log("-----In Set User-----");
    if(!req?.body?.name){
        res.status(400);
        throw new Error("Please Provide Your Name");
    }

    const user = await User.create({
        name: req.body.name
    })
    res.status(2000).json(user);
})

const putUsers = asyncHandler(async (req, res) => {
    res.status(200).json({ message: `Update user having id ${req.params.id}`});
})

const deleteUsers = asyncHandler(async (req, res) => {
    res.status(200).json({ message: `Delete user having id ${req.params.id}`});
})

module.exports = { getUsers, setUsers, putUsers, deleteUsers }