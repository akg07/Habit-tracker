const express = require('express');
const router = express.Router();

const habitController = require('../controllers/habitController');

router.get('/', habitController.home);
router.post('/addNewHabit', habitController.addNewHabit);
router.get('/deleteHabit', habitController.deleteHabit);
router.get('/viewHabit', habitController.viewHabit);
router.get('/fetchHabit', habitController.fetchHabit);
router.get('/updateDbDate', habitController.updateDbDate);

module.exports = router;