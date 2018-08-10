import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import {getUser} from '../actions'
import {Actions} from 'react-native-router-flux';
import {connect} from 'react-redux';
import { CardSection, RedButton, Button, Header, GreyButton } from './common';

class Main extends Component {
  state = {statToggle: false}
  newTeam(){
    Actions.form({ formType: "Team"})
  }
  newPlayer(){
    Actions.form({formType: "player"})
  }
  getAUser(){
    this.props.getUser();
  }
  toggleButtons(){
    if(this.state.statToggle == false){
      return(
        <View>
        <CardSection style={styles.row2Style}>
        <GreyButton style={styles.redButtonStyle}>
           Player Stats
        </GreyButton>
        <Button onPress={() => this.setState({statToggle: !this.state.statToggle })}>
           Coach Stats
        </Button>
      </CardSection>
      <CardSection style={styles.viewStatsStyle}>
        <View>
          <Text style={styles.statsTextStyle}> PlaceHolder for Player Stats </Text>      
        </View>
      </CardSection>
      </View>
      )
    } else {
      return(
        <View>
        <CardSection style={styles.row2Style}>
        <Button onPress={() => this.setState({statToggle: !this.state.statToggle })}>
           Player Stats
        </Button>
        <GreyButton>
           Coach Stats
        </GreyButton>
      </CardSection>
      <CardSection style={styles.viewStatsStyle}>
        <View>
          <Text style={styles.statsTextStyle}> PlaceHolder for Coach Stats </Text>      
        </View>
      </CardSection>
      </View>
      )
    }
  }
  render() {
    return (
      <View style={styles.containerStyle}>
            <Header headerText="Playball"/>
            <CardSection>
              <Text> {this.props.session_user.first_name}</Text>
              <Text> {this.props.session_user.last_name}</Text>
              <Text> {this.props.session_user.email}</Text>
            </CardSection>
            <CardSection style={styles.alertStyle}>
               <Button>
                 Alerts
                </Button>
              </CardSection>
              {this.toggleButtons()}
            <CardSection style={styles.buttonSectionStyle}>
              <Button>
                Teams I'm On
              </Button>
            </CardSection>
            <CardSection style={styles.buttonSectionStyle}>
              <Button>
                Teams I Coach
              </Button>
            </CardSection>
            <CardSection style={styles.buttonSectionStyle}>
              <RedButton onPress={this.newPlayer.bind(this)}>
                + Join a Team
              </RedButton>
            </CardSection>
            <CardSection style={styles.buttonSectionStyle}>
              <RedButton onPress={this.newTeam.bind(this)}>
                + Start new Team
              </RedButton>
              <RedButton onPress={this.getAUser.bind(this)}>
                Get A User
              </RedButton>
            </CardSection>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  containerStyle: {
    backgroundColor: "#CCDFCB",
    flex: 1
  },
  alertStyle: {
    justifyContent: "center",
    paddingTop: 10,
    backgroundColor: "#CCDFCB"
  },
  row2Style: {
    backgroundColor: "#FF3B3f",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    marginLeft: 10,
    marginRight: 10
  },
  viewStatsStyle: {
    height: 150,
    backgroundColor: "#FF3B3F",
    justifyContent: "center",
    marginLeft: 10,
    marginRight: 10,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  statsTextStyle: {
    marginTop: 15,
    fontSize: 24,
    color: "#fff"
  },
  buttonSectionStyle: {
    marginTop: 10,
    backgroundColor: "#CCDFCB"
  }
  



});
const mapStateToProps = (state) => {
     const{ session_user } = state.auth
     return { session_user } 
}


export default connect(mapStateToProps, {getUser})(Main);