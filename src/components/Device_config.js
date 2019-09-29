import React, {Component} from 'react';
import { List, ListItem,Container, Body,Thumbnail,Header, Tab, Tabs, TabHeading, Icon, Text, Button,Content,Card,CardItem,CardBody,Left,Right } from 'native-base';
import { Image } from 'react-native';

export default class Device_config extends Component<Props> {
  render() {
    return (
      <Container>
           
        <Content>
             <Card>
            <CardItem>
              <Left>
                <Icon  name="tablet1" type="AntDesign"/>
                <Body>
                  <Text style={{fontSize:20}}>Device Name</Text>
                  
                </Body>
              </Left>
             
            </CardItem>
            <CardItem style={{marginBottom: 20}}>
            
             <Right>
                <Left/>
                
                <Text note>Device-Id 1203908488</Text>
                
              </Right>
                
            </CardItem>
            </Card>

             <List>
            <ListItem itemHeader first>
              <Text>CONFIGURATIONS
              </Text>
            </ListItem>
            <ListItem >
              <Text>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </Text>
            </ListItem>
            <ListItem last>
              <Text> Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, </Text>
            </ListItem>
            <ListItem itemHeader>
              <Text>ANALYSIS</Text>
            </ListItem>
            <ListItem>
              <Text>when an unknown printer took a galley of type and scrambled it</Text>
            </ListItem>
          </List>
        </Content>
      </Container>
    );
  }
}