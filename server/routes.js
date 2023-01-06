const express = require("express");
const router = express.Router();

router.get("/todos", (req, res) => db.getTodos(res));
router.post("/complete", (req, res) => db.completeTodo(res, req.body.id));

module.exports = router;
