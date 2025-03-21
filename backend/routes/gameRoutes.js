const express = require('express');
const router = express.Router();
const gameController = require('../controllers/gameController');

router.get('/', gameController.getGameStatus);
router.post('/start', gameController.startGame);
router.post('/punch', gameController.punchWall);

module.exports = router;