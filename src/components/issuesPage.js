import React from 'react';

import { View, Text, ImageBackground, Image, ScrollView, Dimensions, StyleSheet } from 'react-native';


export default class IssuesPage extends React.Component {
  render() {
    return (
      <View style={{ margin: 10, backgroundColor: 'white', elevation: 8 }}>
        <Text style={{
margin: 15, color: '#a5154a', fontWeight: 'bold', fontSize: 20,
}}
        >AJAX not working
        </Text>
        <Text style={{
 marginLeft: 25, marginBottom: 10, color: 'black', fontSize: 16,
}}
        >Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          Lorem Ipsum has been the industrys standard dummy text ever since the 1500s
        </Text>
      </View>
    );
  }
}
