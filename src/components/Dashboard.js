import React, {Component} from 'react';
import { Container, Body,Thumbnail,Header, Tab, Tabs, TabHeading, Icon, Text, Button,Content,Card,CardItem,CardBody,Left,Right } from 'native-base';
import { Image } from 'react-native';
import { Col, Row, Grid } from 'react-native-easy-grid';

export default class Dashboard extends Component<Props> {
  render() {
    return (
      <Container>
           
         
            <Grid>
                <Col style={{ height: 200 }}>
                     <Row style={{ width: 100 , backgroundColor:'red'}}>
                        <Card padder>
                            <CardItem  cardBody button onPress={() => alert("This is Card Header")}>
                            <Image source={{uri: 'Image URL'}} style={{height: 200, width: null, flex: 1}}/>
                            </CardItem>
                        </Card>
                    </Row>
                    <Row style={{ width: 100 }}>
                        <Card padder>
                            <CardItem  cardBody button onPress={() => alert("This is Card Header")}>
                            <Image source={{uri: 'Image URL'}} style={{height: 200, width: null, flex: 1}}/>
                            </CardItem>
                        </Card>
                    </Row>
                </Col>
               
            </Grid>
           
          
       
      </Container>
    );
  }
}