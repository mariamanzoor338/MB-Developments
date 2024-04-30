const express = require('express');
const { getCareerById, getCareers } = require('../controllers/career');
const { getHeroById, getHeros } = require('../controllers/hero');
const router = express.Router();

router.get("/careerByid", getCareerById)
router.get("/career", getCareers)
router.get("/heroById", getHeroById);
router.get("/hero", getHeros);

module.exports = router;