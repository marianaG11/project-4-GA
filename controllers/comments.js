const Workout = require('../models/Workout');
 
module.exports = {
    createComment
};
 
 
async function createComment(req, res){
    try{
        //find the workout by id
        const workout = await Workout.findById(req.params.id);
        workout.comments.push({ username: req.user.username, userId: req.user._id});
        await workout.save()
        res.status(201).json({data: 'a comment was added'})
    } catch(err){
        res.status(400).json({err})
    }
};
