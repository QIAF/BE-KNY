
const router = require ('express').Router();
const {getAllSolia, createSolia, updateSolia, deleteSolia} = require ("../controllers/solia");
const upload = require ("../middlewares/upload");

router.get("/", getAllSolia)
router.post("/create", upload, createSolia)
router.patch("/update/:id", upload, updateSolia)
router.delete("/delete/:id", deleteSolia)

module.exports = router;