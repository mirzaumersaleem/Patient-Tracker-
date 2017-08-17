import React,{Component} from 'react';
import {Form,Item,Label,Input, Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';
import DatePicker from 'react-native-datepicker';
export default class AddPatientVisit extends Component{
   constructor(props){
    super(props)
    this.state = {
      date:new Date(),
      test:'',
   
    }
  }

  render() {
     alert("Index value"+this.props.ind)
    return (
      <Container>
        <Header>
       

          <Left/>
          <Body>
            <Title>Add New Visit</Title>
          
          </Body>
          <Right />
        </Header>
        <Content>
         <Form>
                   <Item>      
            <Label>Visit Date </Label>
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
          <Item  last>            
              <Input placeholder='Tests'
               value={this.state.test}
                onChange={(event) =>this.setState({test:event.nativeEvent.text}) }
                />
            </Item>
          </Form>
        </Content>
        <Footer>
          <FooterTab>
            <Button full>
                     <Icon name="paper" />
              <Text>Save</Text>
          
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}