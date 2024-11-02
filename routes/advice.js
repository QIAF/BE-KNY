const router = require("express").Router();
const {getAllAdvice, createAdvice, updateAdvice, deleteAdvice} = require("../controllers/advice");

router.get ("/", getAllAdvice);
router.post ("/create", createAdvice);
router.patch ("/update/:id", updateAdvice);
router.delete("/delete/:id", deleteAdvice);

module.exports = router;