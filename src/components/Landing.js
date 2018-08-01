import React, {Component} from 'react';
import {Actions} from 'react-native-router-flux'
import { View, Text} from 'react-native';
import { GreyButton, Header, CardSection, Card, RedButton } from './common';

class Landing extends Component {
    newUser(){
        Actions.form({ formType: "user"})
    }
    login(){
        Actions.form({ formType: "login"})
    }
    render(){
        return(
            <View>
                <CardSection>
                    <Text>Welcome to Playball Mobile! Are you new here or logging in!? </Text>
                </CardSection>
                <CardSection>
                    <GreyButton onPress={this.login.bind(this)} > Login </GreyButton>
                </CardSection>
                <CardSection>
                    <RedButton onPress={this.newUser.bind(this)}> Register </RedButton> 
                </CardSection>
                
            </View>
        )
    }
}
export default Landing;