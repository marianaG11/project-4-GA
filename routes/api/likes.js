const express = require('express');
const router = express.Router();
const likesCtrl = require('../../controllers/likes');


router.post('/workouts/:id/likes', likesCtrl.create); //send over the workout._id to add a like
router.delete('/likes/:id', likesCtrl.deleteLike); //now use the like id

module.exports = router;