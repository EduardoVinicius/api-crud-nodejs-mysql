// Express é um dos frameworks mais utilizados para desenvolvimento backend em Nodejs.
// Possui um conjunto de templates para aplicações full-stack.
const express = require('express');
const router = express.Router();

const CarController = require('./controllers/CarController');

router.get('/cars', CarController.getAll);
router.get('/car/:id', CarController.getCar);

module.exports = router;