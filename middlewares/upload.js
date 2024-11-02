const multer = require("multer");
const storage = multer.memoryStorage();

const multerConfig = multer({
    storage: storage,
    limits: {
        fileSize: 10 * 1024 * 1024, // 2MB
    }
});
const upload = multerConfig.fields([
    { name: "solia_picture", maxCount: 1 },

]);

module.exports = upload;

