import * as React from 'react';
import { Text, Image, View , TouchableOpacity} from 'react-native';
import { Card, ListItem, Button, Icon } from 'react-native-elements'
import Layout from '../constants/Layout.js';


export default class CardDashboard extends React.Component {
 
  

  render() {
   

    return (
 
                <TouchableOpacity activeOpacity={0.6}
                style={{width: this.props.width,  height:Layout.window.height/4,justifyContent:'space-around',alignSelf:'center',alignItems:'stretch'}}  onPress={()=> alert("SAD")}>
                    <Card containerStyle={{shadowOffset:{width:0,height:5},
        justifyContent:"space-between",alignItems:'center',shadowRadius:5,shadowOpacity:1,height:Layout.window.height/4,
        elevation: 8,borderRadius:10}}

                        
                        title={this.props.title}
                        // titleStyle={{marginTop:60}}
                    // featuredTitle = "CHAT"
                        
                        image={{uri: this.props.imgsrc}}
                        //marginTop:0,marginLeft:30 ,
                        imageStyle = {{ alignContent:'center',maxWidth:80,maxHeight:80,justifyContent:'center',alignItems: 'center',}}
                >
                 
                            
                                <View style={{height:5,justifyContent:'flex-start'
                                ,alignItems:'flex-start'
                                
                            }}><Text style={{color:'grey'}}>Just Now</Text></View>
                           
                        
                    </Card>
                    
                </TouchableOpacity>
    )
           
     }
}