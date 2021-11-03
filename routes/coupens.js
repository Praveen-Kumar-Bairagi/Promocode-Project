const router = require("express").Router();

router.post("/coupens", require("../controller/addcoupen"));
router.get("/coupens", require("../controller/getallcoupons"));

module.exports = router;
