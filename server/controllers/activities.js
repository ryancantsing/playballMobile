var mongoose = require('mongoose').set('debug', true);
var Activity = mongoose.model('Activity');


module.exports = {
    create: function(req, res){
        console.log("checkpoint create activity controller")
        const activity = new Activity({
            team_id: req.params.team_id,
            activity_name: req.body.activity_name,
            activity_description: req.body.activity_description,
            activity_date: req.body.activity_date,
            activity_time: req.body.activity_time,
            activity_type: req.body.activity_type
        })
        activity.save((err, activity) => {
            if(err){
                res.json({message: "error creating activity", err})
            } else {
                res.json({message: "activity created!", activity})
            }
        })
    },
    update: function(req, res){
        Activity.findOne({_id: req.params.activity_id}, (err, activity) => {
            if(err){
                res.json({message: "error finding activity", err})
            } else if(null){
                res.json({message: "no Activity!"})
            } else {
                activity.update({
                    activity_name: req.body.activity_name,
                    activity_description: req.body.activity_description,
                    activity_date: req.body.activity_date,
                    activity_time: req.body.activity_time,
                    activity_type: req.body.activity_type                
                })
                activity.save((err, activity) => {
                    if(err){
                        res.json({message: "error updating activity", err})
                    } else {
                        res.json({message: "successfully updated!", activity})
                    }
                })
            }
        })
    },
    show: function(req, res){
        Activity.find({team_id: req.params.team_id}, (err, activities) => {
            if(err){
                res.json({message: "error finding activities", err})
            } else if(null){
                res.json({message: "no activities"})
            } else {
                res.json({message: "Activities found", activities})
            }
        })
    },
    delete: function(req, res){
        Activity.findOne({_id: req.params.activity_id}, (err, activity) => {
            if(err){
                res.json({message: "error finding activity", err})
            } else if(null){
                res.json({message: "activity doesn't exist"})
            } else {
                activity.remove((err) => {
                    if(err){
                        res.json({message: "error deleting activity"})
                    } else {
                        res.json({message: "activity deleted"})
                    }
                })
            }
        })
    }
}