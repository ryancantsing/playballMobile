import React from 'react';
import {View, Text} from 'react-native';
import {RedButton, GreyButton, CardSection, Header} from '../common';

const TeamViewer = ({
    activeRoster,
    activities,
    teamName,
    leagueName,
    coachName,

}) => {
    return(
        <View>
            <Text>{teamName} </Text>
            <Text>{leagueName} </Text>
            <Text>{coachName} </Text>
        </View>
    )
}

export { TeamViewer }