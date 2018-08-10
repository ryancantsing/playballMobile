import { combineReducers} from 'redux';
import AuthReducer from './AuthReducer';
import ActivityReducer  from './ActivityReducer';
import BulletinReducer from './BulletinReducer';
import TeamReducer from './TeamReducer';
import PlayerReducer from './PlayerReducer';
import UserReducer from './UserReducer';


export default combineReducers({
    auth: AuthReducer,
    activity: ActivityReducer,
    player: PlayerReducer,
    bulletin: BulletinReducer,
    team: TeamReducer,
    user: UserReducer

})