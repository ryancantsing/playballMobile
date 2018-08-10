import React from 'react';
import { View, Text} from 'react-native';
import { GreyButton, RedButton, CardSection, Header} from '../common'

const PlayerViewer = ({
    playerName,
    teamName,
    position,
    phoneNumber,
    active
}) => {
    return(
        <View>
            <Header headerText ={playerName}/>
            <Text> {teamName} </Text>
            <Text> {position} </Text>
            <Text> {phoneNumber} </Text>
            <Text> {active} </Text>
        </View>

    )
}

export {PlayerViewer};