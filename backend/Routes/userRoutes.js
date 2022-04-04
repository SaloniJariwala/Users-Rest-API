

const express = require("express")
const router = express.Router()


router.get("/", (req, res) => {
    res.status(200).json({ message: "Get Users"});
})

router.post("/", (req, res) => {
    res.status(200).json({ message: "Set Users"});
})

router.put("/:id", (req, res) => {
    res.status(200).json({ message: `Update user having id ${req.params.id}`});
})

router.delete("/:id", (req, res) => {
    res.status(200).json({ message: `Delete user having id ${req.params.id}`});
})

module.exports = router
