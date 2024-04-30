
const express = require("express");
const router = express.Router();
const { uploadHero, getHeros, getHeroById, deleteHero, updateHero } = require("../controllers/hero");
const multer = require('multer');
const RequireAuth = require("../middleware/auth");

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

router.use(RequireAuth);
router.post("/hero", upload.single("image"), uploadHero);
router.put("/hero", updateHero);
router.delete("/hero", deleteHero);

module.exports = router;






