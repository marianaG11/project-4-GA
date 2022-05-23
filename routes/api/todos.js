const express = require('express');
const router = express.Router();
const todosCtrl = require('../../controllers/todos');
const multer  = require('multer');
const upload = multer();
// /*---------- Public Routes ----------*/
router.post('/', upload.single('photo'), todosCtrl.create);
router.get('/', todosCtrl.index);


/*---------- Protected Routes ----------*/
//can also use isLoggedIn middleware; would have to included in a route you want to protect
//and import it in those files/pages
// function isLoggedIn(req, res, next){
//     if(req.user) next();
//     res.status(401).json({data: 'not authorized, please log in'})
// }
module.exports = router;