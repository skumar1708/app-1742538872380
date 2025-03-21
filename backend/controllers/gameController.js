const Game = require('../models/Game');

exports.getGameStatus = async (req, res) => {
  try {
    const game = await Game.findOne({});
    res.json(game);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.startGame = async (req, res) => {
  try {
    const game = new Game({ status: 'running' });
    await game.save();
    res.json(game);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.punchWall = async (req, res) => {
  try {
    const game = await Game.findOne({});
    if (game.status === 'running') {
      game.status = 'punched';
      await game.save();
    }
    res.json(game);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};