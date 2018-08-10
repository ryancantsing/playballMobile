import React from 'react';
import {View, Text} from 'react-native';
import { GreyButton, RedButton, CardSection, Header } from '../common';

const ActivityViewer = ({
    activeRoster,
    activityName,
    activityDate,
    activityTime,
    activityDescription,
    activityType
}) => {
    return(
        <View>
            <Text> {activityDate}</Text> 
            <Text> {activityTime}</Text>    
            <Text> {activityName}</Text>    
            <Text> {activityDescription}</Text>    
            <Text> {activityType}</Text>    
   
        </View>
    )
}

export { ActivityViewer };