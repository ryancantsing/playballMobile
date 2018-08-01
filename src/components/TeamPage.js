import React, {Component} from 'react';
import { Text, View} from 'react-native';
import {CardSection, Card, Header, GreyButton} from './common';


class TeamPage extends Component {
    render(){
        const {rosterHeaderText,nextGameStyle, bulletinStyle, bulletinTextStyle, rosterHeaderStyle, activeRosterStyle} = styles
        return(
            <Card>
            <Header headerText="Team Page" />
            <CardSection style={nextGameStyle}>
                <Text>NEXT EVENT</Text>
                <GreyButton>Event Info</GreyButton>
            </CardSection>
            <CardSection style={bulletinStyle}>
                <Text style={bulletinTextStyle}> Bulletins </Text>
                <Text style={bulletinTextStyle}> BULLETINS GO HERE </Text>
                <Text style={bulletinTextStyle}> BULLETINS GO HERE </Text>
                <Text style={bulletinTextStyle}> BULLETINS GO HERE </Text>
            </CardSection>
            <CardSection style={rosterHeaderStyle}>
                <Text stype={rosterHeaderText}>Active Roster </Text>
            </CardSection>
            <CardSection style={activeRosterStyle}>
                <Text> Players GO HERE </Text>
                <Text> PLAYErs GO HERE </Text>
                <Text> PLAYERSSSSS GO HERE </Text>
                <Text> Players GO HERE </Text>
                <Text> PLAYErs GO HERE </Text>
                <Text> PLAYERSSSSS GO HERE </Text>
            </CardSection>
            </Card>   
        )
    }
}

const styles = {
    nextGameStyle: {
        height: 75,
        marginTop: 10,
    },
    bulletinStyle: {
        flexDirection: "column",
        height: 125,
        marginTop: 5,
    },
    bulletinTextStyle: {
        paddingLeft: 20,
        backgroundColor: "#A9A9A9",
        fontSize: 14
    },
    rosterHeaderStyle: {
        height: 30,
        backgroundColor: "#a9a9a9",
    },
    rosterHeaderText:{
        fontSize: 20,
        color: "black"
    },  
    activeRosterStyle: {
        height: 125,
        backgroundColor: "red",
        flexDirection: "column"
    }



}

export default TeamPage