import React, { Component } from 'react';
import { StyleSheet, View ,Text} from 'react-native';
import { Table, Row, Rows } from 'react-native-table-component';
import { Icon } from 'react-native-elements';
import {Container, Footer} from 'native-base'

export default class Tables extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tableHead: ['Date', 'Max', 'Min', 'Range', 'Total'],
      tableData: [
        ['1', '2', '3', '4', '241'],
        ['a', 'b', 'c', 'd', '1424'],
        ['1', '2', '3', '456', '1341'],
        ['a', 'b', 'c', 'd', '3090']
        ['1', '2', '3', '4', '13'],
        ['a', 'b', 'c', 'd', '400'],
        ['1', '2', '3', '4', '800'],
        ['a', 'b', 'c', 'd', '4355']
      ]
    }
  }

  render() {
    const state = this.state;
    return (
    <Container>
      <View style={styles.container}>
        <Table borderStyle={{borderWidth: 2, borderColor: '#c8e1ff'}}>
          <Row data={state.tableHead} style={styles.head} textStyle={styles.text}/>
          <Rows data={state.tableData} textStyle={styles.text}/>
        </Table>
      </View>
      <Footer transparent style={{backgroundColor:'white',paddingBottom:25}}>
            <Icon
                // reverse
                name='arrowleft'
                type='antdesign'
                color='black'
                size = {35}
                style={{margin:10,}}
                />

            <Text style={{fontSize:25, fontWeight:'bold'}}>
                1
            </Text>
                <Icon
                // reverse
                name='arrowright'
                type='antdesign'
                color='black'
                size = {35}
                 style={{margin:10}}
                />
      </Footer>
    </Container>
    )
  }
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
  head: { height: 40, backgroundColor: '#f1f8ff' },
  text: { margin: 6 }
});