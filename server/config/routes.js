const jwt = require('jsonwebtoken');
const players = require('../controllers/players');
const users = require('../controllers/users');
const teams = require('../controllers/teams');
const bulletins = require('../controllers/bulletins');
const activities = require('../controllers/activities');


module.exports = function(app){
    app.post('/login', (req, res) => {
        console.log("made it to routes LOGIN user")
        users.login(req, res);
    })
    app.post('/getuser', verifyToken, (req, res) => {
        console.log("made it to routes GET user", req.body)
        users.view(req, res)
    })
    app.get('/:id/getPlayer', (req, res) => {
        console.log("made it to routes GET player")
        players.get(req, res)
    })
    app.get('/:id/getTeam', (req, res) => {
        console.log("made it to routes GET team")
        teams.get(req, res)
    })
    app.get('/:id/getPlayers', (req, res) => {
        console.log("made it to routes GET players for team")
    })
    app.post('/addUser', (req, res) => {
        console.log("made it to routes CREATE user")
        users.create(req, res);
    })
    app.post('/:user_id/addPlayer/:team_id', (req, res) => {
        console.log("made it to routes CREATE player")
        players.create(req, res);
    })
    app.post('/:user_id/addTeam', (req, res) => {
        console.log("made it to routes CREATE team")
        teams.create(req, res);
    })
    app.post('/:team_id/addBulletin', (req, res) => {
        console.log("made it to routes CREATE bulletin");
        bulletins.create(req, res);
    })
    app.post('/:team_id/addActivity', (req, res) => {
        console.log("made it to routes CREATE activity");
        activities.create(req, res);
    })
    app.delete('/:activity_id/deleteActivity', (req, res) => {
        console.log("made it to routes DELETE activity");
        activities.delete(req, res);
    })
    app.delete('/:bulletin_id/deleteBulletin', (req, res) => {
        console.log("made it to routes delete bulletins")
        bulletins.delete(req, res);
    })
    app.delete('/:user_id/deleteUser', (req, res) => {
        console.log("made it to the routes delete user");
        users.delete(req, res);
    })
    app.delete('/:team_id/deleteTeam', (req, res) => {
        console.log("made it to routes DELETE team");
        teams.delete(req, res);
    })
    app.delete('/:player_id/deletePlayer', (req, res) => {
        console.log("made it to routes DELETE player");
        players.delete(req, res);
    })
    app.patch('/:player_id/updatePlayer', (req, res) => {
        console.log("made it to routes UPDATE player");
        players.update(req, res);
    })
    app.patch('/:team_id/updateTeam', (req, res) => {
        console.log("made it to routes UPDATE teams");
        teams.update(req, res);
    })
    app.patch('/:user_id/updateUser', (req, res) => {
        console.log("made it to routes UPDATE user");
        users.update(req, res);
    })
    app.patch('/:activity_id/updateActivity', (req, res) => {
        console.log("made it to routes UPDATE activity");
        activities.update(req, res);
    })
    app.patch('/:player_id/changeStatus', (req, res) => {
        console.log("made it to routes UPDATE player");
        players.setActive(req, res);
    })
    app.get('/:team_id/getActivities', (req, res) => {
        console.log("made it to routes get all activities");
        activities.show(req, res)
    })
}
function verifyToken(req, res, next){
    const bearerHeader = req.headers['authorization']
    console.log(bearerHeader);
    
    if(typeof bearerHeader !== 'undefined'){
        const bearer = bearerHeader.split(' ');
        const bearerToken = bearer[1];
        req.token = bearerToken;
        console.log(req.token.payload)
        next();
    } else if(req.body.key) {
        const bearerHeader = req.body.key
        const bearer = bearerHeader.split(' ');
        const bearerToken = bearer[0];
        req.token = bearerToken;
        next();
    } else {
       res.json({message: "no token found"})
    }
}