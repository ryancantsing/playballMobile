const mongoose = require('mongoose').set('debug', true);
const Bulletin = mongoose.model('Bulletin');

module.exports = {
    create: function(req, res){
        console.log("checkpoing add Bulletin controller", req.params.team_id);
                const bulletin = new Bulletin({
                    bulletin: req.body.bulletin,
                    team_id: req.params.team_id
                })
                bulletin.save((err, bulletin) =>{
                    if(err){
                        res.json({message: "error creating bulletin", err})
                    } else {
                        res.json({message: "bulletin created!", bulletin})
                    }
                });

    },
    delete: function(req, res){
        console.log("checkpoint DELETE bulletin controller", req.params.bulletin_id);
        Bulletin.findOne({_id: req.params.bulletin_id}, (err, bulletin) => {
            if(err){
                res.json({message: "error deleting bulletin", err})
            } else {
                bulletin.remove();
                res.json({message: "successfully deleted"})
            }
        })
    },
    getTeamBulletins: function(req, res){
        console.log("find team bulletins checkpoint controller");
        Bulletin.find({_id: req.params.team_id}, (err, bulletins) => {
            if(err){
                res.json({message: "error finding Bulletins", err})
            } else if(null){
                res.json({message: "no bulletins!"})
            } else {
                res.json({message: "Found the bulletins", bulletins})
            }
        })
    },
}