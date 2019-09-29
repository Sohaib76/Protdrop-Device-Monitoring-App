import React, {Component} from 'react';
import { Container, Header, Tab, Tabs, TabHeading, Icon, Text } from 'native-base';
import Dashboard from '../components/Dashboard.js';


export default class Home extends Component<Props> {
  render() {
    return (
      <Container>
        {/* <Header hasTabs/> */}
         <Tabs tabBarUnderlineStyle={{ backgroundColor: "black" }} style={{marginTop:5}}>
          <Tab
           heading={ <TabHeading style={{ backgroundColor: "white" }}><Icon name="piechart" type="AntDesign" style={{color: 'black'}}/></TabHeading>}>
            <Dashboard/>
          </Tab>
          <Tab
             heading={ <TabHeading style={{ backgroundColor: "white" }}><Icon name="device-desktop" type="Octicons" style={{color: 'black'}}/></TabHeading>}>
            <Text style={{margin:20,fontSize:20}}>Deviice</Text>
          </Tab>
          <Tab
           heading={ <TabHeading style={{ backgroundColor: "white" }}><Icon name="table" type="AntDesign" style={{color: 'black'}}/></TabHeading>}>
            <Text style={{margin:20,fontSize:20}}>Table</Text>
          </Tab>
          <Tab
             heading={ <TabHeading style={{ backgroundColor: "white" }}><Icon name="settings" style={{color: 'black'}}/></TabHeading>}>
            <Text style={{margin:20,fontSize:20}}>Settings</Text>
          </Tab>
          
        </Tabs>
      </Container>
    );
  }
}