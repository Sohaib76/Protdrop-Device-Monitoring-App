import React, { Component } from 'react';
import { Thumbnail,Container, Header, Content, Card, CardItem, Text, Icon, Right,Left,Body,Title,Button } from 'native-base';
import {Image,StyleSheet,View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {Avatar} from 'react-native-elements';

export default class Swttings extends Component {



  render() {

    const JUNGLE = '#29AB87'
    const SAGE = "#9DC183"
    const LAUREL = "#A9BA9F"




    return (


        <Container>
          
        {/* <Header transparent style={{ backgroundColor:  JUNGLE}}>
                            
                           
        </Header>   */}
        
        <LinearGradient colors={[JUNGLE, SAGE, LAUREL]} style={styles.linearGradient}>
         
          
        
            <View style={{alignItems:'center',justifyContent:'center'}}>
                <Avatar
                    size="large"
                    rounded
                    source={{
                        uri:
                        'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
                    }}
                    showEditButton
                />
            </View>
            
            
            <Card style={{borderRadius:25}}>
           
                
               
                <CardItem/>
                <CardItem/>
                <CardItem>
                    <Text>Hera Coplin</Text>
                </CardItem>
                <CardItem/>
                <CardItem>
                    <Text>0124 Cape town</Text>
                </CardItem>
                <CardItem/>
                <CardItem>
                    <Text>4618 Sky Vista</Text>
                </CardItem>
                <CardItem/>
                <CardItem>
                    <Text>(+364)210-3924 4930</Text>
                </CardItem>
                <CardItem/>
                <CardItem>
                    <Text>hera@telcome.com</Text>
                </CardItem>
                <CardItem/>
                <CardItem>
                    {/* '#A32CA3' */}
                    <Icon name="email" type={'Zocial'} style={{color:'#118d1f'}}/>
                    <Right/>
                    <Icon name="mobile1" type={'AntDesign'} style={{color:'#118d1f'}}/>
                    <Right/>
                    <Icon name="phone" type={'Entypo'} style={{color:'#118d1f'}}/>
                    <Right/>
                    <Icon name="textsms" type={'MaterialIcons'} style={{color:'#118d1f'}}/>
                </CardItem>

            </Card>
            
        </LinearGradient>
        </Container>
     
        

    );
  }
}

var styles = StyleSheet.create({
    linearGradient: {
        flex: 1,
        paddingLeft: 15,
        paddingRight: 15,
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 5,
        alignContent: 'center',
        
        justifyContent:'center'

    },
})