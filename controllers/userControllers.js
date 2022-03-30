const User= require('../models/user');

// @desc add a new user
// @path POST /api/user
// @acess PUBLIC
const addUser = (req,res)=>{
    User.create(req.body)
    .then((data) => res.json(data))
    .catch((err) => {
        console.log(err);
        res.status(500).json({msg:'something went wrong.'});
    });
    };

// @desc get all users
// @path Get /api/user
// @acess PUBLIC
const getUser = (req,res)=>{
    User.find() 
    .then((data) => res.json(data))
    .catch((err) => {
        console.log(err);
        res.status(500).json({msg:'something went wrong.'});
    });
};
// @desc delete a user
// @path DELETE /api/user/:id
// @acess PUBLIC
const deleteUser = (req,res)=>{
    User.findByIdAndDelete(req.params.id)
    .then((data) => res.json(data))
.catch((err) => {
    console.log(err);
    res.status(500).json({msg:'something went wrong.'});
});
};
// @desc update a user
// @path PUT /api/user/:id
// @acess PUBLIC
const updateUser = (req,res)=>{
    User.findByIdAndUpdate(req.params.id, req.body, {new: true})
    .then((data) => res.json(data))
.catch((err) => {
    console.log(err);
    res.status(500).json({msg:'something went wrong.'});
});
};
module.exports= {addUser, getUser, deleteUser, updateUser}