import React, {Component} from 'react';
import { Container, Body,Thumbnail,Header, Tab, Tabs, TabHeading, Icon, Text, Button,Content,Card,CardItem,CardBody,Left,Right } from 'native-base';
import { Image,View } from 'react-native';
import { Col, Row, Grid } from 'react-native-easy-grid';
import CardDashboard from './CardDashboard.js';

export default class Dashboard extends Component<Props> {
  render() {
    return (
      <Container>
           
       
            <View style={{backgroundColor:"#DAE0E2", flexDirection:"row", flex:2}}>  
                <CardDashboard imgwidth={80} width={200} title="Sales By Product" imgsrc='https://www.ft.com/__origami/service/image/v2/images/raw/ftcms%3A347ece48-0f69-11e9-a3aa-118c761d2745?source=ig' 
               />
                <CardDashboard imgwidth={80} width={200} title="Sales By Product" imgsrc='https://www.ft.com/__origami/service/image/v2/images/raw/ftcms%3A347ece48-0f69-11e9-a3aa-118c761d2745?source=ig' 
               />

            </View>
               
            <View style={{backgroundColor:"#DAE0E2", flexDirection:"row", flex:2}}> 
                 <CardDashboard imgwidth={200} width={400} title="Sales By Product" imgsrc='https://www.ft.com/__origami/service/image/v2/images/raw/ftcms%3A347ece48-0f69-11e9-a3aa-118c761d2745?source=ig' 
               />
            </View>
            <View style={{backgroundColor:"#DAE0E2", flexDirection:"row", flex:2}}> 
                 <CardDashboard imgwidth={80} width={200} title="Sales By Product" imgsrc='https://www.ft.com/__origami/service/image/v2/images/raw/ftcms%3A347ece48-0f69-11e9-a3aa-118c761d2745?source=ig' 
               />
                 <CardDashboard imgwidth={80} width={200} title="Sales By Product" imgsrc='https://www.ft.com/__origami/service/image/v2/images/raw/ftcms%3A347ece48-0f69-11e9-a3aa-118c761d2745?source=ig' 
               />
            </View>
                    
      </Container>
    );
  }
}