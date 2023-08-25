const express = require("express");
const { listTasks } = require("../controllers/listTasks");
const { createNewTask } = require("../controllers/createTask");
const { updateTask } = require("../controllers/updateTask");
const { deleteTask } = require("../controllers/deleteTask");
const { updateDone } = require("../controllers/updateDone");

const router = express.Router();

router.get("/lista", listTasks);
router.post("/lista", createNewTask);
router.put("/lista/:id", updateTask);
router.delete("/lista/:id", deleteTask);

router.patch("/lista/:id", updateDone);


module.exports = router;