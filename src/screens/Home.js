import React, {Component} from 'react';
import { Container, Header, Tab, Tabs, TabHeading, Icon, Text } from 'native-base';
import Dashboard from '../components/Dashboard.js';
import Device_config from '../components/Device_config.js';
import Settings from '../components/Settings.js';


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
            <Device_config/>
          </Tab>
          <Tab
           heading={ <TabHeading style={{ backgroundColor: "white" }}><Icon name="table" type="AntDesign" style={{color: 'black'}}/></TabHeading>}>
            <Text style={{margin:20,fontSize:20}}>Table</Text>
          </Tab>
          <Tab
             heading={ <TabHeading style={{ backgroundColor: "white" }}><Icon name="settings" style={{color: 'black'}}/></TabHeading>}>
            <Settings/>
          </Tab>
          
        </Tabs>
      </Container>
    );
  }
}