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
                <CardDashboard width={200} title="Sales By Product" imgsrc='https://www.ft.com/__origami/service/image/v2/images/raw/ftcms%3A347ece48-0f69-11e9-a3aa-118c761d2745?source=ig' 
               />
                <CardDashboard width={200} title="Sales By Product" imgsrc='https://www.ft.com/__origami/service/image/v2/images/raw/ftcms%3A347ece48-0f69-11e9-a3aa-118c761d2745?source=ig' 
               />

            </View>
               
            <View style={{backgroundColor:"#DAE0E2", flexDirection:"row", flex:2}}> 
                 <CardDashboard width={400} title="Sales By Product" imgsrc='https://www.ft.com/__origami/service/image/v2/images/raw/ftcms%3A347ece48-0f69-11e9-a3aa-118c761d2745?source=ig' 
               />
            </View>
            <View style={{backgroundColor:"#DAE0E2", flexDirection:"row", flex:2}}> 
                 <CardDashboard width={200} title="Sales By Product" imgsrc='https://www.ft.com/__origami/service/image/v2/images/raw/ftcms%3A347ece48-0f69-11e9-a3aa-118c761d2745?source=ig' 
               />
                 <CardDashboard width={200} title="Sales By Product" imgsrc='https://www.ft.com/__origami/service/image/v2/images/raw/ftcms%3A347ece48-0f69-11e9-a3aa-118c761d2745?source=ig' 
               />
            </View>
                        {/* <Card padder>
                            <CardItem  cardBody button onPress={() => alert("This is Card Header")}>
                            <Image source={{uri: 'Image URL'}} style={{height: 200, width: null, flex: 1}}/>
                            </CardItem>
                        </Card>
                 
                        <Card padder>
                            <CardItem  cardBody button onPress={() => alert("This is Card Header")}>
                            <Image source={{uri: 'Image URL'}} style={{height: 200, width: null, flex: 1}}/>
                            </CardItem>
                        </Card>
             */}
           
          
       
      </Container>
    );
  }
}