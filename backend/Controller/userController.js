const asyncHandler = require("express-async-handler")

const getUsers = asyncHandler(async (req, res) => {
    res.status(200).json({message: "Get Users"});
})

const setUsers = asyncHandler(async (req, res) => {
    if(!req?.body?.name){
        res.status(400);
        throw new Error("Please Provide Your Name");
    }
})

const putUsers = asyncHandler(async (req, res) => {
    res.status(200).json({ message: `Update user having id ${req.params.id}`});
})

const deleteUsers = asyncHandler(async (req, res) => {
    res.status(200).json({ message: `Delete user having id ${req.params.id}`});
})

module.exports = { getUsers, setUsers, putUsers, deleteUsers }