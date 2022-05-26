const Workout = require('../models/Workout');
const S3 = require('aws-sdk/clients/s3');
const { v4: uuidv4 } = require('uuid');

const s3 = new S3();

module.exports = {
    create,
    index
};

function create(req, res){
    console.log(req.file, req.body, 'this is create method', req.user)
    try {
        const filePath = `${uuidv4()}/${req.file.originalname}`
        const params = {Bucket: process.env.BUCKET_NAME, Key: filePath, Body: req.file.buffer};
        s3.upload(params, async function(err, data){
			console.log(err, ' from aws')
            const workout = await Workout.create({caption: req.body.caption, user: req.user, photoUrl: data.Location});
            console.log(workout)
			// make sure the workout we're sending back has the user populated
			await workout.populate('user');
		
            res.status(201).json({workout: workout})
        })
    } catch(err){
        console.log(err)
        res.json({data: err})
    }
};

async function index(req, res){
    try {
        // this populates the user when you find the workouts
        // so you'll have access to the users information 
        // when you fetch workouts
        const workouts = await Workout.find({}).populate('user').exec()
        res.status(200).json({workouts})
    } catch(err){

    }
};


// async function show(req, res){
//     try {

//     }
// }


