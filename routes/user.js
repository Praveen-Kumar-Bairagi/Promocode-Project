const router = require("express").Router();

router.post("/user", require("../controller/user"));

module.exports = router;
