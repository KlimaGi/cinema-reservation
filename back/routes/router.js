const express = require('express');
const router = express.Router();

const { indexInfo, reserve, cancelReserve } = require('../controllers/mainController');

router.get('/indexInfo', indexInfo);

router.get("/reserve/:cell/:movie", reserve);
router.get("/cancelReserve/:cell/:movie", cancelReserve);

module.exports = router; 