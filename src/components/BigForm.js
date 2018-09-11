import React, { Component } from 'react';
import {connect} from 'react-redux'
import { loginUser, playerUpdate, teamUpdate, loginUpdate, activityUpdate, userUpdate, BulletinChanged } from '../actions';
import { Card } from './common';
import { PlayerForm, BulletinForm, ActivityForm, LoginForm, UserForm, TeamForm } from './forms';
import {AsyncStorage } from 'react-native'

class BigForm extends Component {

    state = {
        formState: this.props.formType,
        dateState: Date.now(),
    }
    onLoginPress(){
        const {loginEmail, loginPassword} = this.props.auth
        this.props.loginUser(loginEmail, loginPassword)
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
    onUserCreatePress(){
        let value = await AsyncStorage.getItem('JWT_KEY')
        const user = this.props.user
        if (value != null){
            this.props.editUser(user)
        } else {
            this.props.createUser(user);
        }
    }


    onPlayerPress(){
        this.props.createPlayer(user_id, this.props.player, team_id);
    }


    formChoice(){
        const { first_name, last_name, email, password, confirmPassword } = this.props.user;
        const { position, phoneNumber } = this.props.player;
        const {teamName, leagueName, team_password} = this.props.team;
        const {activity_date, activity_description, activity_name, activity_time, activity_type } = this.props.activity;
        const { loginEmail, loginPassword} = this.props.auth;
        if(this.state.formState === "user"){
            return(
                <UserForm
                    first_name={first_name}
                    last_name={last_name}
                    email={email}
                    password={password}
                    confirmPassword={confirmPassword}
                    onUFNChange={value => this.props.userUpdate({props:'first_name', text: value})}
                    onULNChange={value => this.props.userUpdate({props: 'last_name', text: value})}
                    onUEMChange={value => this.props.userUpdate({props: 'email', text: value})}
                    onUPWChange={value => this.props.userUpdate({props: 'password', text: value})}
                    onUCPWChange={value => this.props.userUpdate({props: 'confirm_password', text: value})}
                    onPress={this.onUserCreatePress.bind(this)}
                />
                )
        } else if(this.state.formState === "player"){
            return(
                <PlayerForm 
                    position={position}
                    phoneNumber={phoneNumber}
                    onPOChange={value => this.props.playerUpdate({props: 'position', text: value})}
                    onPHChange={value => this.props.playerUpdate({props: 'phoneNumber', text: value})}
                    onTMPChange={value => this.props.playerUpdate({props: 'teamPassword', text: value})}
                    onPress={this.onPlayerPress.bind(this)}
                />
            )
        } else if(this.state.formState === "Team"){
            return(
                <TeamForm
                    teamName={teamName}
                    leagueName={leagueName}
                    teamPassword={team_password}
                    onTMNChange={value => this.props.teamUpdate({props: 'team_name', text: value})}
                    onTLNChange={value => this.props.teamUpdate({props: 'league_name', text: value})}
                    onTNWChange={value => this.props.teamUpdate({props: 'team_password', text: value})}
                    onPress={this.onTeamPress.bind(this)}
                />)            
        } else if(this.state.formState === "bulletin"){
            return(
                <BulletinForm
                    bulletin={this.props.bulletin.bulletin}
                    onBUChange={value => this.props.BulletinChanged({text: value})}
                    onPress={this.onBulletinPress.bind(this)}
                />)
        } else if(this.state.formState === "event"){
            return(<ActivityForm 
                   activityName={activity_name}
                   activityDate={activity_date}
                   activityDescription={activity_description}
                   activityTime={activity_time}
                   activityType={activity_type}
                   onANChange={value => this.props.activityUpdate({props: 'activity_name', text: value})}
                   onADSChange={value => this.props.activityUpdate({props: 'activity_description', text: value})} 
                   onATChange={ value => this.props.activityUpdate({props: 'activity_time', text: value})}
                   onATYChange={value => this.props.activityUpdate({props: 'activity_props', text: value})}
                   onADChange={value => this.props.activityUpdate({props: 'activity_date', text: value})}
                   onPress={this.onActivityPress.bind(this)}
                />)
        } else if(this.state.formState === "login"){
            return(
                <LoginForm 
                    email={loginEmail}
                    password={loginPassword}
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
    const auth = state.auth;
    const activity = state.activity;
    const player = state.player;
    const team = state.team;
    const user  = state.user;
    const bulletin = state.bulletin;
    return { auth, activity, player, team, user, bulletin }
}


export default connect( mapStateToProps,{loginUser, loginUpdate, activityUpdate, BulletinChanged, playerUpdate, teamUpdate, userUpdate})(BigForm)
