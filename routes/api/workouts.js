const express = require('express');
const router = express.Router();
const workoutsCtrl = require('../../controllers/workouts');
const multer  = require('multer'); //initialize multer
const upload = multer();
// /*---------- Public Routes ----------*/
router.post('/', upload.single('photo'), workoutsCtrl.create); //then add multer to the middle chain on the function
//to receive the file 

//details page 
// router.get('/:id', workoutsCtrl.show);

router.get('/', workoutsCtrl.index);


/*---------- Protected Routes ----------*/
//can also use isLoggedIn middleware; would have to included in a route you want to protect
//and import it in those files/pages
// function isLoggedIn(req, res, next){
//     if(req.user) next();
//     res.status(401).json({data: 'not authorized, please log in'})
// }
module.exports = router;