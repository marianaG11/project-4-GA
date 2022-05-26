const Workout = require('../models/Workout');
 
module.exports = {
    createComment
}
 
 
async function createComment(req, res){
    try{
        //find the workout by id
        const workout = await Workout.findById(req.params.id);
        workout.comments.push({
            username: req.user.username,
            userId: req.user._id,
            workoutId: req.params.id,
            comment: req.body.comment,

        });
        await workout.save()
        console.log(workout, "this is the comment function in controllers!")
        res.status(201).json({data: workout})
    } catch(err){
        res.status(400).json({err})
    }
}
