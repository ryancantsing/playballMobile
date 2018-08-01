const mongoose = require('mongoose').set('debug', true);
const User = mongoose.model('User');

module.exports  = {
    create: function(req, res){
        console.log("checkpoint create user controller");
        const user = new User({
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            email: req.body.email,
            password: req.body.password,

        });
        user.save((err, user) => {
            if(err){
                res.json({ message: "Something went wrong adding user"})
            } else {
                res.json({ message: "Successfully registered!", user})
            }
        })
    },
    delete: function(req, res){
        const id = req.params.user_id
        console.log("Checkpoint delete user controller");
        const user = User.findOne({_id: id})
        user.remove((err) => {
            if(err){
                res.json({message: "Something went wrong in delete"})
            } else {
                res.json({ message: "Successfully Deleted!"})
            }
        })
    },
    update: function(req, res){
        console.log("checkpoint update User controller");
        const user = User.findOne({_id: req.params.user_id})
        user.update({
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            email: req.body.username,
            password: req.body.password
        }, (err, user) => {
            if(err){
                res.json({message: "Update did not work", err})
            } else {
                res.json({ message: "successfully updated", user})
            }
        })
    },
    view: function(req, res){
        console.log("checkpoint get user controller")
        User.findOne({_id: req.params.user_id}, (err, user) => {
            console.log(user)
            if(err){
                res.json({ message: "User not found", err})
            } else {
                res.json({ message: "User transported", user})
            }
        })
    },
    testUser: function(req, res){
        console.log("checkpoint TEST user controller");
        User.findOne({email: req.params.email}, (err, user) => {
            console.log(user)
            if(err){
                res.json({message: "user not found", err})
            } else {
                res.json({message: "found user thank christ", user})
            }
        })
    }
}