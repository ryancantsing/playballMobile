import React from 'react';
import { View} from 'react-native';
import {CardSection, RedButton, GreyButton, Input } from '../common'

const BulletinForm = ({ bulletin, onPress, onBUChange }) => {
    return(
        <View>
            <CardSection>
                <Input
                    label="Bulletin"
                    placeholder="Write Bulletin"
                    onChangeText={onBUChange}
                    value={bulletin}
                />
            </CardSection>
            <CardSection>
                <GreyButton onPress={onPress}> Submit </GreyButton>
                <RedButton onPress={onPress}> Cancel </RedButton>
            </CardSection>     
        </View>
        )
}
export { BulletinForm };



