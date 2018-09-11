const mongoose = require('mongoose').set('debug', true);
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const jwt_decode = require('jwt-decode')
const User = mongoose.model('User');
const saltrounds = 10;
module.exports  = {
    create: function(req, res){
        console.log(req.body)
        bcrypt.hash(req.body.password, saltrounds, (err, hash) => {
            console.log(hash)
            if(err){
                res.json({message: "error adding bcrypt", err})
            } else {

                const user = new User({
                    first_name: req.body.first_name,
                    last_name: req.body.last_name,
                    email: req.body.email,
                    password: hash,
                    
                });
                user.save((err, user) => {
                    if(err){
                        res.json({ message: "Something went wrong adding user"})
                    } else {
                        res.json({ message: "Successfully registered!", user})
                    }
                })
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
        const returnToken = req.token
        jwt.verify(returnToken, 'secretbusiness', (err, token) => {
            if(err){
                res.json({ message: "token not verified", err})
            } else {
                const userDecoder = jwt_decode(returnToken)
                console.log(userDecoder)
                User.findOne({_id: userDecoder.user._id}, (err, user) => {
                    if(err){
                        res.json({message: "User not found", err})
                    } else {
                        user.update({
                            first_name: req.body.first_name,
                            last_name: req.body.last_name,
                            email: req.body.username,
                            password: req.body.password
                        }, (err, user) => {
                            if(err){
                                res.json({message: "Update did not work", err})
                            } else {
                                console.log(user)
                                res.json({ message: "successfully updated", user})
                            }})
                    }
                })
        }
        })
    
    },
    view: function(req, res){
        console.log(req.token)
        const returnToken = req.token
        jwt.verify(returnToken, 'secretbusiness', (err, token) => {
            if(err){
                res.json({message: "token not verified", err})
            } else {
            console.log("verified! checkpoint get user controller")
                const user = jwt_decode(returnToken);
                console.log(user);
                res.json({message: "got the user", user})
        }
        })
    },
    login: function(req, res){
        console.log("checkpoint LOGIN user controller");
        User.findOne({email: req.body.email}, (err, user) => {
            if(err){
                res.json({ message: "User not found", err})
            } else {
                if(bcrypt.compareSync(req.body.password, user.password) == true){
                    console.log("Password Accepted")
                    jwt.sign({user}, 'secretbusiness', (err, token) => {
                        if(err){
                            res.json({message: "error getting token", err})
                        } else {
                            res.json({message: "token created", token})
                        }
                    })
                } else {
                    res.json({message: "invalid password"})
                }
            }
        })
    }
}
