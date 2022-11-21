const express = require('express');
const router = express.Router();

const { indexInfo, reserve } = require('../controllers/mainController');

router.get('/indexInfo', indexInfo);

router.get("/reserve/:cell/:movie", reserve);

module.exports = router; 