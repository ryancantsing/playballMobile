import React from 'react'
import {Scene, Router} from 'react-native-router-flux';

import Main from './components/Main';
import BigForm from './components/BigForm';
import TeamPage from './components/TeamPage';
import Landing from './components/Landing';
const RouterComponent = () => {
    return(
        <Router>
            <Scene key="root" hideNavBar>
                <Scene key="landing" component={Landing} title="Playball Mobile" initial />
                <Scene key="main" component={Main} title="Welcome"   />
                <Scene key="form" component={BigForm} title="Form" />
                <Scene key="teamPage" component={TeamPage} title="Team Page" />
            </Scene>
        </Router>
    )
}

export default RouterComponent;