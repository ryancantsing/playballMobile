import React, {Component} from 'react';
import {connect} from 'react-redux';
import {TeamViewer, PlayerViewer, ViewTeams, YourTeams, ActivityViewer} from '../viewers';
import { Card} from './common';

class BigViewer extends Component {
    state = {
        viewState: this.props.viewerProps
    }
    viewChoice(){
        if(this.state.viewState === "activity"){
            return (
                <ActivityViewer />
            )
        }
        else if(this.state.viewState === "team"){
            return (
                <TeamViewer />
            )
        }
        else if(this.state.viewState === "player"){
            return (
                <PlayerViewer />
            )
        }
        else if(this.state.viewState === "yourTeams"){
            return (
                <YourTeams />
            )
        }
        else if(this.state.viewState === "viewTeams"){
            return (
                <ViewTeams />
            )
        }
    }
    render(){
        return (
            <Card>
                {this.viewChoice()}
            </Card>
        )
    }
}

const mapStateToProps = state => {
    const activity = state.activity
    const player = state.player
    const bulletin = state.bulletin
    const team = state.team
    const user = state.user
    return { activity, player, bulletin, team, user }
}
export default connect(mapStateToProps, {})(BigViewer);