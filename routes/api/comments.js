const express = require('express');
const router = express.Router();
const commentsCtrl = require('../../controllers/comments');
 
router.post('/workouts/:id', commentsCtrl.createComment);
// router.post('/', commentsCtrl.createComment);
module.exports = router;