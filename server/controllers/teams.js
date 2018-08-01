var mongoose = require('mongoose').set('debug', true)
var Team = mongoose.model('Team');
var User = mongoose.model('User');
module.exports = {
    create: function(req, res){
        console.log("checkpoint team create controller");
        User.findOne({_id: mongoose.Types.ObjectId(req.params.user_id)}, (err, user) => {
            const coach = `${user.first_name} ${user.last_name}`
            const team = new Team({
                coach_name: coach,
                team_name: req.body.team_name,
                league_name: req.body.league_name,
                password: req.body.password,
                coach_id: req.params.user_id
            })
            team.save((err, team) => {
                console.log(user.teams_coaching)
                if(err){
                    res.json({message: "error creating team!", err})
                } else {
                    res.json({ message: "Team added!", team})
                }
            })
        }) 
    },
    view: function(req, res){
        console.log("checkpoint get team controller");
        const team = Team.findById({_id: req.body.id}, (err, team) =>{
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
