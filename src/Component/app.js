import React,{Component} from 'react'

import {SwipeRow, Container, Header, Content, Footer, FooterTab, Button, Icon, Text ,Left,Right,Body,Title } from 'native-base';
import {Actions} from 'react-native-router-flux';
import {connect} from 'react-redux';
import Act from '../store/actions/patientActions';

import {
  View,
    StyleSheet
} from 'react-native';


class App extends Component{
   removeData(index){
      this.props.removePatient(index) 
     
   }
   render() {
    return (
    <Container  >
        <Header>     
          <Body>
               
            <Title>
                <Icon  style={{color: '#fff'}} name={'ios-home'}/>
                 Patient Tracker </Title>

          </Body>
          <Right>
            <Button transparent onPress={() => Actions.SearchPatient()}>
                <Icon name="ios-search" />
            </Button>
          </Right>
        </Header>
            <Content scrollEnabled={false}  >
           
                { this.props.patients.map((item, index) => (
       <SwipeRow 
            key={index}
            leftOpenValue={75}
            rightOpenValue={-75}
            left={

               <Button success onPress={() => alert(
                "Name :" +item.name +"\n"+ "Desease :" +item.desease 
                +"\n"+"Medicine :" + item.medicine +"\n" 
                +"Test :" +item.test +"\n"+ "Date :" +item.date )}>
                <Icon name="information-circle" />
              </Button>
           
            }
            body={
              <View >
                <Text >{item.name}</Text>
              </View>
            }
            right={
              <Button danger onPress={this.removeData.bind(this,index)}>
                <Icon active name="trash" />
              </Button>
            }
          />
               ))}
        </Content>        
       <Footer>
          <FooterTab>
            <Button vertical onPress ={()=> Actions.AddPatient()}>
              <Icon name="person" />
              <Text>Add patient</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
  
}


function mapStateToProps(state){   
  return{
          patients:  state.patient      
        }
 }

 function mapDispatchToProps(dispatch){
   return{
          removePatient : function (index) {
          return dispatch(Act.removePatient(index))
       }
   }
 }
  
const styles = StyleSheet.create({
  container: {
    minHeight: '100%',
    minWidth: '100%',
    backgroundColor: '#F5FCFF',
  }
}) 
 export default connect(mapStateToProps,mapDispatchToProps)(App)
