import React, { Component } from 'react';
import { View, Text, Picker } from 'react-native';
import { Input, Header, CardSection, RedButton, Card } from './common';

class BigForm extends Component {
    componentWillMount(){
        this.setState({ formState: this.props.formType})
    }
    state = {
        formState: "player"
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
        }
    } 
    render(){
        return(
        <Card>
            {this.formChoice()}
        </Card>
        )}
}


export default BigForm
