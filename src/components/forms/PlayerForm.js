import React from 'react';
import { View } from 'react-native';
import {Input, GreyButton, RedButton, CardSection, Header } from '../common';

const PlayerForm = ({ onPress, onPOChange, onPHChange, onTMPChange, position, phoneNumber, teamPassword }) => {
    return (
        <View>
        <Header headerText="Join a Team"/>
        <CardSection>
            <Input
                label="Position"
                placeholder="Position"
                onChangeText={onPOChange}
                value={position}
            />
        </CardSection>
        <CardSection>
            <Input
                label="Phone Number"
                placeholder=" 555-555-5555"
                onChangeText={onPHChange}
                value={phoneNumber} 
            />
        </CardSection>
        <CardSection>
            <Input
                label="Team Password"
                placeholder="Password" 
                onChangeText={onTMPChange}
                value={teamPassword}
            />
        </CardSection>
        <CardSection>
            <GreyButton onPress={onPress}> Submit </GreyButton>
            <RedButton onPress={onPress}> Cancel </RedButton>
        </CardSection>     
    </View>
    )
}

export { PlayerForm }