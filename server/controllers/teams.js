var mongoose = require('mongoose').set('debug', true)
const jwt = require('jsonwebtoken');
const jwt_decode = require('jwt-decode')
var Team = mongoose.model('Team');
var User = mongoose.model('User');
module.exports = {
    create: function(req, res){
        console.log("checkpoint team create controller");
        const returnToken = req.token
        jwt.verify(returnToken, 'secretbusiness', (err) => {
            if(err){
                res.json({message: "no token found", err})
            } else {
                const userDecoder = jwt_decode(returnToken)
                console.log(userDecoder)
                User.findOne({_id: userDecoder.user._id}, (err, user) => {
                    if(err){
                    res.json({ message: "User not found somehow", err})
                    } else {
                        const coach = `${user.first_name} ${user.last_name}`
                        const team = new Team({
                            coach_name: coach,
                            team_name: req.body.team_name,
                            league_name: req.body.league_name,
                            password: req.body.password,
                            coach_id: userDecoder.user._id
                        })
                        team.save((err, team) => {
                            if(err){
                                res.json({message: "error creating team!", err})
                            } else {
                                res.json({ message: "Team added!", team})
                            }
                        })
                    }
                }) 
            }
        })
    },
    view: function(req, res){
        console.log("checkpoint get team controller");
        Team.findById({_id: req.params.id}, (err, team) =>{
            console.log(team)
            if(err){
                res.json({ message: "Team not found", err})
            } else {
                res.json({ message: "Here's the team you were looking for", team})
            }
        })
    },
    update: function(req, res){
        console.log("checkpoint update Team controller");
        Team.findById({_id: req.params.team_id}, (err, team) => {
        team.update({
            team_name: req.body.team_name,
            league_name: req.body.league_name,
            password: req.body.password
        }, (err, team) => {
            if(err){
                res.json({message: "update team did not work", err})
            } else {
                res.json({message: "Team successfully updated", team})
            }
            })
        })
    },
    find_Coached: function(req, res){
        console.log("checkpoint find all coached teams controller");
        Team.find({coach_id: req.params.user_id}, (err, teams) => {
            if(err){
                res.json({message: "error finding teams!", err})
            } else if(!teams){
                res.json({message: "No teams found"})
            } else{
                res.json({message: "Found the teams!", teams})
            }
        })
    }
}
