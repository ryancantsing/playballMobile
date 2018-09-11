const jwt = require('jsonwebtoken');
const players = require('../controllers/players');
const users = require('../controllers/users');
const teams = require('../controllers/teams');
const bulletins = require('../controllers/bulletins');
const activities = require('../controllers/activities');


module.exports = function(app){
    // LOGIN

    app.post('/login', (req, res) => {
        console.log("made it to routes LOGIN user")
        users.login(req, res);
    })

    // GET requests

    app.post('/getuser', verifyToken, (req, res) => {
        console.log("made it to routes GET user", req.body)
        users.view(req, res)
    })
    app.post('/:id/getPlayer', verifyToken, (req, res) => {
        console.log("made it to routes GET player")
        players.get(req, res)
    })
    app.post('/:id/getTeam', verifyToken, (req, res) => {
        console.log("made it to routes GET team")
        teams.get(req, res)
    })
    app.post('/:id/getPlayers', verifyToken, (req, res) => {
        console.log("made it to routes GET players for team")
    })
    app.post('/:team_id/getActivities', verifyToken, (req, res) => {
        console.log("made it to routes get all activities");
        activities.show(req, res)
    })

    // POST requests

    app.post('/addUser', (req, res) => {
        console.log("made it to routes CREATE user", req.body)
        users.create(req, res);
    })
    app.post('/addPlayer/:team_id', verifyToken, (req, res) => {
        console.log("made it to routes CREATE player")
        players.create(req, res);
    })
    app.post('/addTeam', verifyToken, (req, res) => {
        console.log("made it to routes CREATE team")
        teams.create(req, res);
    })
    app.post('/:team_id/addBulletin', verifyToken, (req, res) => {
        console.log("made it to routes CREATE bulletin");
        bulletins.create(req, res);
    })
    app.post('/:team_id/addActivity', verifyToken, (req, res) => {
        console.log("made it to routes CREATE activity");
        activities.create(req, res);
    })

    //DELETE requests

    app.post('/:activity_id/deleteActivity', verifyToken, (req, res) => {
        console.log("made it to routes DELETE activity");
        activities.delete(req, res);
    })
    app.post('/:bulletin_id/deleteBulletin', verifyToken, (req, res) => {
        console.log("made it to routes delete bulletins")
        bulletins.delete(req, res);
    })
    app.post('/:user_id/deleteUser', verifyToken, (req, res) => {
        console.log("made it to the routes delete user");
        users.delete(req, res);
    })
    app.post('/:team_id/deleteTeam', verifyToken, (req, res) => {
        console.log("made it to routes DELETE team");
        teams.delete(req, res);
    })
    app.post('/:player_id/deletePlayer', verifyToken, (req, res) => {
        console.log("made it to routes DELETE player");
        players.delete(req, res);
    })

    // PATCH requests

    app.post('/:player_id/updatePlayer', verifyToken, (req, res) => {
        console.log("made it to routes UPDATE player");
        players.update(req, res);
    })
    app.post('/:team_id/updateTeam', verifyToken, (req, res) => {
        console.log("made it to routes UPDATE teams");
        teams.update(req, res);
    })
    app.post('/:activity_id/updateActivity', verifyToken, (req, res) => {
        console.log("made it to routes UPDATE activity");
        activities.update(req, res);
    })
    app.post('/updateUser', verifyToken, (req, res) => {
        console.log("made it to routes UPDATE user", req.body);
        users.update(req, res);
    })
    app.post('/:player_id/changeStatus', verifyToken, (req, res) => {
        console.log("made it to routes UPDATE player");
        players.setActive(req, res);
    })
}
// JWT Verification Function -- CRUCIAL

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