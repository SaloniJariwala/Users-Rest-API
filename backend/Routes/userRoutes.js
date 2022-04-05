const express = require("express")
const router = express.Router()
const { getUsers, setUsers, putUsers, deleteUsers } = require("../Controller/userController")

router.route("/").get(getUsers).post(setUsers)
router.route("/:id").put(putUsers).delete(deleteUsers)

module.exports = router
