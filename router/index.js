const express = require('express');
const router = express.Router();

const habitController = require('../controllers/habitController');

// router.get('/', (req, res) => {
//     return res.render('home');
// });

router.get('/fetchAllOnLoad', habitController.home);
router.post('/addNewHabit', habitController.addNewHabit);
router.get('/deleteHabit', habitController.deleteHabit);
router.get('/viewHabit', habitController.viewHabit);
router.get('/fetchHabit', habitController.fetchHabit);


module.exports = router;