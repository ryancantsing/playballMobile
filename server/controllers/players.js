var mongoose = require('mongoose').set('debug', true);
const jwt = require('jsonwebtoken');
const jwt_decode = require('jwt-decode')
var Player = mongoose.model('Player');
var Team = mongoose.model('Team');
var User = mongoose.model('User')

module.exports = {
    create: function(req, res){
        console.log("checkpoint player create controller");
        const returnToken = req.token
        jwt.verify(returnToken, 'secretbusiness', (err) => {
            if(err){
                res.json({message: "Token not found", err})
            } else {
            const userDecoder = jwt_decode(returnToken)
            const name = `${userDecoder.user.first_name} ${userDecoder.user.last_name}`
            const player = new Player({
                team_id: req.params.team_id,
                user_id: req.params.user_id,
                position: req.body.position,
                active: true,
                player_name: name
            })
            player.save((err, player) => {
                if(err){
                    res.json({message: "error creating player!", err})
                } else {
                    res.json({message: "Player created!", player})
                }
            });
            }
        })

        },
    findYourPlayers: function(req, res){
        console.log("checkpoint FIND your players controller");
        const returnToken = req.token
        jwt.verify(returnToken, 'secretbusiness', (err) => {
            if(err){
                res.json({message: "token not found", err})
            } else {
                const userDecoder = jwt_decode(returnToken)
                console.log(userDecoder)
                Player.find({user_id: userDecoder.user._id}, (err, players) => {
                    if(err){
                        res.json({message: "error finding players"})
                    } else if(null){
                        res.json({message: "no players"})
                    } else {
                        res.json({message: "Players found", players})
                    }
                })
            }
        })
    },
    delete: function(req, res){
        console.log("checkpoint Delete player controller");
        Player.findOne({_id: req.params.player_id}, (err, player)=> {
            if(err){
                res.json({message: "error finding player", err})
            } else {
                player.remove((err) => {
                    if(err){
                        res.json({message: "error deleting player", err})
                    } else {
                        res.json({message: "player deleted!"})
                    }
                });
            }
        })
    },
    update: function(req, res){
        console.log("checkpoint update player controller");
        Player.findOne({_id: req.params.player_id}, (err, player) => {
            if(err){
                res.json({message: "error finding player", err})
            } else if(null){
                res.json({message: "player not found"})
            } else {
                player.update({
                    position: req.body.position
                }, (err, player) => {
                    if(err){
                        res.json({message: "failure to update", err})
                    } else {
                        res.json({message: "successfully updated!", player})
                    }
                })
            }
        })
    },
    setActive: function(req, res){
        console.log("checkpoint change active status controlller");
        Player.findOne({_id: req.params.player_id}, (err, player) => {
            if(err){
                res.json({message: "Error finding player", err})
            } else if(null){
                res.json({message: "no player exists"})
            } else {
                let activity = !player.active
                player.update({
                    active: activity
                }, (err, player) => {
                    if(err){
                        res.json({message: "error updating active status"})
                    } else {
                        res.json({message: "Player status changed", player})
                    }
                })
            }
        })
    },
    findTeamPlayers: function(req, res){
        console.log("checkpoint find team players controller");
        Player.find({team_id: req.params.team_id}, (err, players) => {
            if(err){
                res.json({ message: "error finding team players", err})
            } else if(null){
                res.json({message: "no such players"})
            } else {
                res.json({message: "Players found", players})
            }
        })
    }
}
