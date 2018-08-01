const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    first_name: {
        type: String,
        required: [true, "First Name required"]
    },
    last_name: {
        type: String,
        required: [true, "Yes, a last name is required, too"]
    },
    email: {
        type: String,
        required: [true, "An email is extremely important"]
    },
    password: {
        type: String,
        required: [true, "Gotta protect ya neck with a password, kid"]

    }
})
const PlayerSchema = new mongoose.Schema({
    user_id: {
        type: String,
        required: [true, "user id is applied!"]
    },
    position: {
        type: String,
        required: [true, "Select a position, dummy"]
    },

    active: {
        type: Boolean,
        default: true
    },
    team_name: {
        type: String,
    },
    player_name: {
        type: String
    }
})
const TeamSchema = new mongoose.Schema({
    coach_name: {
        type: String,
        required: [true, "how did you get this far without a coach name!?"]
    },
    team_name: {
        type: String,
        required: [true, "First Name Required"]
    },
    league_name: {
        type: String,
        required: [true, "League Name Required"]
    },
    password: {
        type: String,
        required: [true, "Protect your team! Have a password!"]
    },
    coach_id: {
        type: String,
        required: [true, "Coach ID is very important and you need it"]
    }
})
const BulletinSchema = new mongoose.Schema({
    bulletin: {
        type: String
    },
    date: {
        type: Date,
        default: Date.now()
    },
    team_id: {
        type: String
    }

})

const ActivitySchema = new mongoose.Schema({
    activity_type: {
        type: String,
        required: [true, "activitys need a type"]
    },
    activity_name: {
        type: String,
        required: [true, "activitys need a name"]
    },
    activity_date: {
        type: String,
        required: [true, "What is the date of your activity?"]
    },
    activity_time: {
        type: String,
        required: [true, "What is the time of your activity?"]
    },
    activity_description: {
        type: String,
        required: [true, "Please describe your activity"]
    },
    team_id: {
        type: String,
        required: [true, "Need that team ID Bro"]
    }
})
mongoose.model('User', UserSchema);
mongoose.model('Player', PlayerSchema);
mongoose.model('Activity', ActivitySchema);
mongoose.model('Bulletin', BulletinSchema);
mongoose.model('Team', TeamSchema);