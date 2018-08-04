import React from 'react';
import { View } from 'react-native';
import { Input, GreyButton, RedButton, CardSection, Header } from '../common';

const UserForm = ({ onPress, 
                    onUFNChange, 
                    onULNChange, 
                    onUEMChange, 
                    onUPWChange, 
                    onUCPWChange, 
                    first_name, last_name, email, password, confirmPassword 
                    }) => {
    return (
        <View>
            <Header headerText="Create a User"/>
                <CardSection>
                    <Input
                        label="First Name"
                        placeholder="First Name"
                        onChangeText={onUFNChange}
                        value ={first_name} 
                    />
                </CardSection>
                <CardSection>
                    <Input
                        label="Last Name"
                        placeholder="Last Name"
                        onChangeText={onULNChange}
                        value={last_name}
                     />
                </CardSection>
                <CardSection>
                    <Input
                        label="Email"
                        placeholder="email@email.com"
                        onChangeText={onUEMChange}
                        value={email} 
                    />
                </CardSection>
                <CardSection>
                     <Input
                        label="Password"
                        placeholder="Password"
                        onChangeText={onUPWChange} 
                        value={password}
                      />
                </CardSection>
                <CardSection>
                    <Input
                        label="Confirm Password"
                        placeholder="Password"
                        onChangeText={onUCPWChange} 
                        value={confirmPassword}
                        />
                </CardSection>
                <CardSection>
                    <GreyButton onPress={onPress}> Submit </GreyButton>
                    <RedButton onPress={onPress}> Cancel </RedButton>
                 </CardSection>           
                </View>
    )
}

export { UserForm };