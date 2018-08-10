import React from 'react';
import { View } from 'react-native';
import {Header, Input, CardSection, GreyButton, RedButton} from '../common'




const LoginForm = ({email, password, onLEChange, onLPChange, onPress}) => {
       return(
        <View>
        <Header headerText="Please Login"/>

        <CardSection>
            <Input
                label="email"
                placeholder="email@email.gov"
                value={email}
                onChangeText={onLEChange}
            />
        </CardSection>
        <CardSection>
            <Input
                label="Password"
                placeholder="passwerd"
                value={password}
                onChangeText={onLPChange} />
        </CardSection>
        <CardSection>
            <GreyButton onPress={onPress}> Submit </GreyButton>
            <RedButton onPress={onPress}> Cancel </RedButton>
        </CardSection>
        </View>

       )
}
export { LoginForm };