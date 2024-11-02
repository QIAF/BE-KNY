const router = require ("express").Router();

const solia = require ("./solia");
const advice = require ("./advice");

router.use("/api/v1/solia", solia);
router.use("/api/v1/advice", advice);

module.exports = router;