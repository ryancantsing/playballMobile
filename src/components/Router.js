import React from 'react'
import {Scene, Router} from 'react-native-router-flux';

import Main from './Main';
import BigForm from './BigForm'

const RouterComponent = () => {
    return(
        <Router>
            <Scene key="root" hideNavBar>
                <Scene key="main" component={Main} title="Welcome" initial  />
                <Scene key="form" component={BigForm} title="Form" />
            </Scene>
        </Router>
    )
}

export default RouterComponent;