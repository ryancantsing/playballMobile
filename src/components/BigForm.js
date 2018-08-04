import React, { Component } from 'react';
import {connect} from 'react-redux'
import { loginUser, playerUpdate, teamUpdate, loginUpdate, activityUpdate, userUpdate } from '../actions';
import { Card } from './common';
import { PlayerForm, BulletinForm, ActivityForm, LoginForm, UserForm, TeamForm } from './forms';

class BigForm extends Component {

    state = {
        formState: this.props.formType,
        dateState: Date.now(),
    }
    onLoginPress(){
        this.props.loginUser(this.props.auth)
    }
    onActivityPress(){
        this.props.createEvent(id, this.props.activity)
    }
    onBulletinPress(){
        this.props.createBulletin(id, this.props.bulletin)
    }
    onTeamPress(){
        this.props.createTeam(id, this.props.team);
    }
    onUserPress(){
        this.props.createUser(this.props.user);
    }
    onPlayerPress(){
        this.props.createPlayer(user_id, this.props.player, team_id);
    }

    formChoice(){
        if(this.state.formState === "user"){
            return(
                <UserForm
                    first_name={this.props.user.first_name}
                    last_name={this.props.user.last_name}
                    email={this.props.user.email}
                    password={this.props.user.password}
                    confirmPassword={this.props.user.confirmPassword}
                    onUFNChange={value => this.props.playerUpdate({type:'first_name', text: value})}
                    onULNChange={value => this.props.playerUpdate({type: 'last_name', text: value})}
                    onUEMChange={value => this.props.playerUpdate({type: 'email', text: value})}
                    onUPWChange={value => this.props.playerUpdate({type: 'password', text: value})}
                    onUCPWChange={value => this.props.playerUpdate({type: 'confirm_password', text: value})}
                    onPress={this.onUserPress.bind(this)}
                />
                )
        } else if(this.state.formState === "player"){
            return(
                <PlayerForm 
                    position={this.props.player.position}
                    phoneNumber={this.props.player.phoneNumber}
                    onPOChange={value => this.props.playerUpdate({type: 'position', text: value})}
                    onPHChange={value => this.props.playerUpdate({type: 'phoneNumber', text: value})}
                    onTMPChange={value => this.props.playerUpdate({type: 'teamPassword', text: value})}
                    onPress={this.onPlayerPress.bind(this)}
                />
            )
        } else if(this.state.formState === "Team"){
            return(
                <TeamForm
                    teamName={this.props.team.teamName}
                    leagueName={this.props.team.leagueName}
                    teamPassword={this.props.team.teamPassword}
                    onTMNChange={value => this.props.teamUpdate({props: 'team_name', text: value})}
                    onTLNChange={value => this.props.teamUpdate({props: 'league_name', text: value})}
                    onTNWChange={value => this.props.teamUpdate({props: 'team_password', text: value})}
                    onPress={this.onTeamPress.bind(this)}
                />)            
        } else if(this.state.formState === "bulletin"){
            return(
                <BulletinForm
                    bulletin={this.props.bulletin.bulletin}
                    onBUChange={value => this.props.bulletinChanged({text: value})}
                    onPress={this.onBulletinPress.bind(this)}
                />)
        } else if(this.state.formState === "event"){
            return(<ActivityForm 
                   activityName={this.props.activity.activityName}
                   activityDate={this.props.activity.activityDate}
                   activityDescription={this.props.activity.activityDescription}
                   activityTime={this.props.activity.activityTime}
                   activityType={this.props.activity.activityType}
                   onANChange={value => this.props.activityUpdate({props: 'activity_name', text: value})}
                   onADSChange={value => this.props.activityUpdate({props: 'activity_description', text: value})} 
                   onATChange={ value => this.props.activityUpdate({props: 'activity_time', text: value})}
                   onATYChange={value => this.props.activityUpdate({props: 'activity_type', text: value})}
                   onADChange={value => this.props.activityUpdate({props: 'activity_date', text: value})}
                   onPress={this.onActivityPress.bind(this)}
                />)
        } else if(this.state.formState === "login"){
            return(
                <LoginForm 
                    email={this.props.auth.loginEmail}
                    password={this.props.auth.loginPassword}
                    onLEChange={value => this.props.loginUpdate({props: 'loginEmail', text: value})}
                    onLPChange={value => this.props.loginUpdate({props: 'loginPassword', text: value})}
                    onPress={this.onLoginPress.bind(this)}
                />
            
            )
        } 
    }
    render(){
        return(
        <Card>
            {this.formChoice()}
        </Card>
        )
    }
}
const mapStateToProps = (state) => {
    const { loginEmail, loginPassword } = state.auth;
    return { loginEmail, loginPassword }
}


export default connect( mapStateToProps,{loginUser, loginUpdate, activityUpdate, bulletinChanged, playerUpdate, teamUpdate, userUpdate})(BigForm)
