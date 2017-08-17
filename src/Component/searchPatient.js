import React,{Component} from 'react'
import {Actions} from 'react-native-router-flux';
import {connect} from 'react-redux';
import Act from '../store/actions/patientActions';
import {SwipeRow,View,Segment,Item,Input, Container, Header, Content, Footer, FooterTab, Button, Icon, Text ,Left,Right,Body,Title } from 'native-base';

class SearchPatient extends Component{
  constructor(){
    super()
   this.state={
      search_by_name:'',
    
   }
   
  }
 findByName = (patient) => {
  
    name = patient.name;
    return name.search(this.state.search_by_name) >= 0 ? true : false 
  }
  removeData(index){
      this.props.removePatient(index) 
     
   }
    render() {
      return (
    <Container>
        <Header searchBar rounded>
          <Item last>
            <Icon name="arrow-back" onPress={() => Actions.App()} />
             <Input  placeholderTextColor="#44f"  placeholder='Search'
               value={this.state.search_by_name}
                onChange={(event) =>this.setState({search_by_name:event.nativeEvent.text })} 
                />
            <Icon name="ios-people" />
          </Item>
          <Button transparent>
            <Text>Search By Name </Text>
          </Button>
        </Header>
   <Content scrollEnabled={false}>
               { this.props.patients.filter(this.findByName).map((item, index) => (
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
              <View>
                <Text>{item.name}</Text>
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
            <Body>
            <Segment>
              <Button first onPress={()=> Actions.SearchPatientByDate()}><Text>BY date</Text></Button>
              <Button last active><Text>By Name</Text></Button>
            </Segment>
            </Body>
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
export default connect(mapStateToProps,mapDispatchToProps)(SearchPatient);