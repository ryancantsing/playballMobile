import React from 'react';
import {View, Picker, Text} from 'react-native';
import DatePicker  from 'react-native-datepicker';
import {Input, GreyButton, RedButton, CardSection, Header }  from '../common';

const ActivityForm = ({
                        onPress, 
                        onANChange,
                        onADChange,
                        onATChange,
                        onADSChange,
                        onATYChange, 
                        activityName, 
                        activityDate, 
                        activityTime, 
                        activityDescription,
                        activityType
                    }) => {
                        return(
                            <View>
                            <Header headerText="Create an Event"/>
                            <CardSection>
                                <Picker style = {{flex: 1}} placeholder="Event Type" onChangeText={onATYChange} value={activityType} >
                                    <Picker.Item label="Practice" value="Practice"/>
                                    <Picker.Item label="Game" value="Game"/>
                                    <Picker.Item label="Misc" value="Misc" />
                                </Picker>
                            </CardSection>
                            <CardSection>
                                <Input
                                    label="Event Name"
                                    placeholder="Event Name"
                                    value={activityName}
                                    onChangeText={value => {onANChange}}
                                />
                            </CardSection>
                            <CardSection>
                                <Input
                                    label="Description"
                                    placeholder="Description"
                                    onChangeText={value => {onADSChange}}
                                    value={activityDescription}
                                    />
                            </CardSection>
                            <CardSection>
                                <Text style={{marginLeft: 15, fontSize: 18, paddingTop: 5}}> Date </Text>
                                <DatePicker
                                    label="Choose Date" 
                                    style={{width: 200, marginLeft: 65}}
                                    mode="date"
                                    placeholder="Select Date"
                                    format="YYYY-MM-DD"
                                    minDate={Date.now()}
                                    confirmBtnText="Confirm"
                                    cancelBtnText="Cancel"
                                    showIcon={false}
                                    onDateChange={onADChange}
                                    value={activityDate}
                                    />
                            </CardSection>
                            <CardSection>
                                <Input
                                    label="Time"
                                    placeholder="Time"
                                    onChangeText={onATChange}
                                    value={activityTime}
                                />
                            </CardSection>
                            <CardSection>
                                <GreyButton onPress={onPress}> Submit </GreyButton>
                                <RedButton onPress={onPress}> Cancel </RedButton>
                            </CardSection>     
                    </View>
                        )
                    }
export { ActivityForm }