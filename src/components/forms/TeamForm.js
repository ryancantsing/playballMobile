import React from 'react';
import {View} from 'react-native';
import { Input, GreyButton, RedButton, CardSection, Header} from '../common';

const TeamForm = ({ onPress, onTMNChange, onTLNChange, onTNWChange, teamName, leagueName, teamPassword }) => {
    return (
        <View>
        <Header headerText="Create a Team"/>
        <CardSection>
            <Input
                label="Team Name"
                placeholder="Team Name"
                onChangeText={onTMNChange}
                value={teamName}
            />
        </CardSection>
        <CardSection>
            <Input
                label="League Name"
                placeholder="League Name"
                onChangeText={onTLNChange}
                value={leagueName}
            />
        </CardSection>
        <CardSection>
            <Input
                label="Team Password"
                placeholder="Password"
                onChangeText={onTNWChange}
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
export { TeamForm };