const Workout = require('../models/Workout');

module.exports = {
    create,
    deleteLike
};

async function create(req, res){
 
    try {
		// find workout by id
        const workout = await Workout.findById(req.params.id);
		
        workout.likes.push({username: req.user.username, userId: req.user._id}); //mutating a document
        await workout.save()// save it
        res.status(201).json({data: 'like added'})
    } catch(err){
       
        res.status(400).json({err})
    }
    
};

async function deleteLike(req, res){
    try {
        
        const workout = await Workout.findOne({'likes._id': req.params.id, 'likes.username': req.user.username});
        workout.likes.remove(req.params.id) // mutating a document
		console.log(workout)
        // req.params.id is the like id 
        await workout.save() // after you mutate a document you must save
        res.json({data: 'like removed'})
    } catch(err){
        res.status(400).json({err})
    }
};