import React,{Component} from 'react'

import { Container, Header, Content, Footer, FooterTab,Toast,Input, Item,Button, Icon, Text ,Left,Right,Body,Title,Form ,Label} from 'native-base';
import {Actions} from 'react-native-router-flux';
import DatePicker from 'react-native-datepicker';
import Act from '../store/actions/patientActions';
import {connect} from 'react-redux';
 class AddPatient extends Component{
    constructor(props){
    super(props)
    this.state = {
      date:new Date(),
      patient_name:'',
      laboratory_test:'',
      medicine:'',
      desease:'',
      text:'',
      data :{}  
    }
  }

  savedata(){
       this.state.data ={
               name:this.state.patient_name,
               test:this.state.laboratory_test,
               medicine:this.state.medicine,
               date:this.state.date,
               desease:this.state.desease,
           }
              console.log("object values medicine"+this.state.data.medicine)
    this.setState({
       data:this.state.data
    })
      console.log("state data value "+this.state.data.desease)
      var obj=this.state.data;
      this.props.addPatient(obj)  
      // Toast.show({
      //         text: 'Wrong password!',
      //         position: 'bottom',
      //         buttonText: 'Okay'
      //       })
     Actions.App() 
}
    render() {
    return (
    <Container>
        <Header>    
         <Left>
            <Button transparent onPress={()=> Actions.App()}>
              <Icon name='arrow-back' />
            </Button>
          </Left>
          <Body>
            <Title>Patient Detail</Title>
          </Body>
          <Right />
        </Header>
        <Content>
     
          <Form>
           <Item>      
            <Label>AdmissionDate </Label>
             <DatePicker
                   style={{width: 200}}
                   date={this.state.date}
                   mode="date"
                   placeholder="select date"
                   format="YYYY-MM-DD"
                   minDate={new Date()}
                   maxDate="2017-12-28"
                   confirmBtnText="Confirm"
                   cancelBtnText="Cancel"
                   customStyles={{
                    dateIcon: {
                      position: 'absolute',
                      left: 0,
                      top: 4,
                      marginLeft: 0
                    },
                    dateInput: {
                          marginLeft: 36
                    }
                    // ... You can check the source to find the other keys. 
                  }}
               onDateChange={(date) => {this.setState({date: date})}
               }
             />  
           </Item>          
            <Item  >            
              <Input placeholder='PatientName'
               value={this.state.patient_name}
                onChange={(event) =>this.setState({patient_name:event.nativeEvent.text}) }
                />
            </Item>

             <Item >
              
              <Input placeholder="LaboratoryTest"
              value={this.state.laboratory_test} 
               onChange={(event) =>this.setState({laboratory_test:event.nativeEvent.text}) }
                />
            </Item>
             <Item >
            
              <Input placeholder="Desease" 
               value={this.state.desease}
              onChange={(event) =>this.setState({desease:event.nativeEvent.text}) }
               />
            </Item>
            <Item  last>
      
              <Input placeholder="Medicine"
               value={this.state.medicine}
                onChange={(event) =>this.setState({medicine:event.nativeEvent.text}) }
               />
            </Item>
            
          </Form>
            
        </Content>
       <Footer>
          <FooterTab>
  
          <Button onPress={this.savedata.bind(this)} >
            <Icon name="paper" />
              <Text>Save Patient</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}
function mapStateToProps(state){
  return{
          patients:  state.patients
        }
        console.log("State"+patients)
 }
mapDispatchToProps = (dispatch) => ({

    addPatient : function (data){
          return dispatch(Act.addPatient(data))
        }
  })
export default connect(mapStateToProps, mapDispatchToProps)(AddPatient)
