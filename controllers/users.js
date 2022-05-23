const User = require("../models/user");
const Workout = require('../models/Workout');
const jwt = require("jsonwebtoken");
const SECRET = process.env.SECRET;
const { v4: uuidv4 } = require("uuid");
const S3 = require("aws-sdk/clients/s3");
const s3 = new S3(); // initialize the constructor
// now s3 can crud on our s3 buckets

module.exports = {
  signup,
  login,
  profile
};

function signup(req, res) {
  console.log(req.body, req.file, 'req.body and req.file');

  // FilePath unique name to be saved to our bucket
  const filePath = `${uuidv4()}/${req.file.originalname}`;
  const params = {
    Bucket: process.env.BUCKET_NAME,
    Key: filePath, //filePath we are generating with the unique name
    Body: req.file.buffer, //body is the buffer of the file image
  };
 

  s3.upload(params, async function (err, data) {
    console.log(data, "from aws"); // data.Location is our photoUrl that exists on aws
    const user = new User({ ...req.body, photoUrl: data.Location });
    try {
      await user.save();
      //sending back the JWT token created to verify the user, back to the client
      //to be stored and sent with every request
      const token = createJWT(user); // user is the payload so this is the object in our jwt
      res.json({ token });
    } catch (err) {
      // Probably a duplicate email
      res.status(400).json(err);
    }
  });
 
};

async function login(req, res) {
  try {
    const user = await User.findOne({ email: req.body.email });
    console.log(user, " this user in login");
    if (!user) return res.status(401).json({ err: "bad credentials" });
    // had to update the password from req.body.pw, to req.body password
    user.comparePassword(req.body.password, (err, isMatch) => {
      if (isMatch) {
        const token = createJWT(user);
        res.json({ token });
      } else {
        return res.status(401).json({ err: "bad credentials" });
      }
    });
  } catch (err) {
    return res.status(401).json(err);
  }
};

async function profile(req, res){
  try {
    //both the user's workouts and their info is returned
    // First find the user using the params from the request
    // findOne finds first match, its useful to have unique usernames!
    const user = await User.findOne({username: req.params.username})
   //find all the user's workouts
    if(!user) return res.status(404).json({err: 'User not found'})

    const workouts = await Workout.find({user: user._id}).populate("user").exec();
    console.log(workouts, ' this is the workouts')
    res.status(200).json({workouts: workouts, user: user})
  } catch(err){
    console.log(err)
    res.status(400).json({err})
  }
}



/*----- Helper Functions -----*/

function createJWT(user) {
  return jwt.sign(
    { user }, // data payload
    SECRET,
    { expiresIn: "24h" }
  );
};
