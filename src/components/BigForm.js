import React, { Component } from 'react';
import {connect} from 'react-redux'
import { View, Text, Picker } from 'react-native';
import { loginUser, emailChanged, passwordChange} from '../actions';
import DatePicker from 'react-native-datepicker';
import { Input, Header, CardSection, RedButton, Card } from './common';

class BigForm extends Component {

    state = {
        formState: this.props.formType,
        dateState: Date.now(),
    }
    onButtonPress(){
        const {email, password} = this.props;
        this.props.loginUser({ email, password})
    }
    onEmailChanged(text){
        this.props.emailChanged(text);
    }
    onPasswordChange(text){
        this.props.passwordChange(text);
    }

    formChoice(){
        if(this.state.formState === "user"){
            return(
                <View>
                    <Header headerText="Create a User"/>
                    <CardSection>
                        <Input
                        label="First Name"
                        placeholder="First Name"
                         />
                    </CardSection>
                    <CardSection>
                        <Input
                        label="Last Name"
                        placeholder="Last Name"
                         />
                    </CardSection>
                    <CardSection>
                        <Input
                        label="Email"
                        placeholder="email@email.com" />
                    </CardSection>
                    <CardSection>
                        <Input
                        label="Password"
                        placeholder="Password" />
                    </CardSection>
                    <CardSection>
                        <Input
                        label="Confirm Password"
                        placeholder="Password" />
                    </CardSection>
                </View>
            )
        } else if(this.state.formState === "player"){
            return(
            <View>
                <Header headerText="Join a Team"/>
                <CardSection>
                    <Input
                        label="Name"
                        placeholder="Name"
                        />
                </CardSection>
                <CardSection>
                    <Input
                        label="Position"
                        placeholder="Position"
                    />
                </CardSection>
                <CardSection>
                    <Input
                    label="Phone Number"
                    placeholder=" 555-555-5555" />
                </CardSection>
                <CardSection>
                    <Input
                        label="Team Password"
                        placeholder="Password" />
                </CardSection>
            </View>
            )
        } else if(this.state.formState === "Team"){
            return(
            <View>
                <Header headerText="Create a Team"/>
                <CardSection>
                    <Input
                    label="Team Name"
                    placeholder="Team Name"
                    />
                </CardSection>
                <CardSection>
                    <Input
                    label="League Name"
                    placeholder="League Name"
                    />
                </CardSection>
                <CardSection>
                    <Input
                        label="Team Password"
                        placeholder="Password" />
                </CardSection>
            </View>
            )
        } else if(this.state.formState === "bulletin"){
            return(
            <View>
                <CardSection>
                    <Input
                        label="Bulletin"
                        placeholder="Write Bulletin"
                    />
                </CardSection>
            </View>
            )
        } else if(this.state.formState === "event"){
            return(
                <View>
                    <Header headerText="Create an Event"/>
                    <CardSection>
                        <Picker style = {{flex: 1}} placeholder="Event Type" >
                            <Picker.Item label="Practice" value="Practice"/>
                            <Picker.Item label="Game" value="Game"/>
                            <Picker.Item label="Misc" value="Misc" />
                        </Picker>
                    </CardSection>
                    <CardSection>
                        <Input
                            label="Event Name"
                            placeholder="Event Name"
                        />
                    </CardSection>
                    <CardSection>
                        <Input
                            label="Description"
                            placeholder="Description" />
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
                            />
                    </CardSection>
                    <CardSection>
                        <Text style={{marginLeft: 15, fontSize: 18, paddingTop: 5}}> Time </Text>

                        <DatePicker 
                            label="Select Time"
                            style={{width: 200, marginLeft: 65}}
                            mode="time"
                            placeholder="Select Time"
                            format="HH-MM"
                            confirmBtnText="Confirm"
                            cancelBtnText="Cancel"
                            showIcon={false}
                        />

                    </CardSection>
                    <CardSection>
                        <Input
                            label="Time"
                            placeholder="Time"
                        />
                    </CardSection>
            </View>
            )}
            else if(this.state.formState === "login"){
                return(
                    <View>
                        <Header headerText="Please Login"/>

                        <CardSection>
                            <Input
                                label="email"
                                placeholder="email@email.gov"
                                value={this.props.email}
                                onChangeText={this.onEmailChanged.bind(this)}
                            />
                        </CardSection>
                        <CardSection>
                            <Input
                                label="Password"
                                placeholder="passwerd"
                                value={this.props.password}
                                onChangeText={this.onPasswordChange.bind(this)} />
                        </CardSection>
                        <CardSection>
                            <RedButton onPress={this.onButtonPress.bind(this)}> Login </RedButton>
                        </CardSection>
                </View>
                )}
    } 
    render(){
        return(
        <Card>
            {this.formChoice()}
        </Card>
        )}
}
const mapStateToProps = (state) => {
    const { email, password } = state.auth;
    return {email, password}
}


export default connect( mapStateToProps,{loginUser, emailChanged, passwordChange})(BigForm)
