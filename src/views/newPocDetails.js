  //importing React and Reat Native Modiles
import React,{Component} from 'react';
import {View, Text, ImageBackground, StyleSheet, ScrollView, TouchableOpacity} from 'react-native';

import ScrollableTabView  from 'react-native-scrollable-tab-view';
import MaskTabBar  from 'react-native-scrollable-tab-view-mask-bar';

import DonePage from './../components/donePage.js';
//import tabNavigation from './../config/tabRoute.js';

export default class PocDetails extends Component
{

  constructor(props)
  {
    super(props);
  }

  render()
  {

    const { params } = this.props.navigation.state;
    const data = params ? params.details : null;

    return(
      <ScrollView style={styles.scrollContainer}>
        <View style={styles.container1}>
          <ImageBackground source={require('./../../images/background.jpg')} style={styles.bgImageContainer}>
            <View style={styles.container1}>

              <View style={styles.infoContainer}>
                <View style={{flexDirection:'column',marginTop:10,flex:1,marginLeft:25}}>
                    <Text style={styles.keyText}>Opportunity Owner</Text>
                    <Text style={styles.valueText}>{data.opportunity_owner}</Text>
                  </View>

                  <View style={{flexDirection:'column',marginTop:10,flex:1,marginLeft:25}}>
                      <Text style={styles.keyText}>SDET</Text>
                      <Text style={styles.valueText}>{data.sdnet[0]},{data.sdnet[1]}</Text>
                  </View>


              </View>

              <View style={styles.infoContainer}>

                <View style={{flexDirection:'column',marginTop:10,flex:1,marginLeft:25}}>
                  <Text style={styles.keyText}>Product Owner</Text>
                  <Text style={styles.valueText}>{data.product_owner}</Text>
                </View>

                <View style={{flexDirection:'column',marginTop:10,flex:1,marginLeft:25}}>
                  <Text style={styles.keyText}>Scrum Master</Text>
                  <Text style={styles.valueText}>{data.scrum_master}</Text>
                </View>

              </View>

              <View style={styles.infoContainer}>
                  <View style={{flexDirection:'column',marginTop:10,flex:1,marginLeft:25}}>
                    <Text style={styles.keyText}>User Stories</Text>
                    <Text style={styles.valueText}>{data.user_stories.length}</Text>
                  </View>

                  <View style={{flexDirection:'column',marginTop:10,flex:1,marginLeft:25}}>
                    <Text style={styles.keyText}>Business Value</Text>
                    <Text style={styles.valueText}>{data.business_dollar_value}</Text>
                  </View>
              </View>

            </View>
          </ImageBackground>
        </View>

        <View style={styles.container2}>
          <View style={styles.container}>
            <Text style={styles.aboutText}>About</Text>
            <Text style={styles.descText}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an
              unknown printer took a galley of type and scrambled it to make a type specimen book.
              It has survived not only five centuries, but also the leap into electronic typesetting,
              remaining essentially unchanged. It was popularised in the 1960s with the release of
              Letraset sheets containing Lorem Ipsum passages, and more recently with
              desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Text>
          </View>

          <View style={styles.container3}>
            <TouchableOpacity onPress={()=>this.props.navigation.navigate("UserStory")}><Text style={styles.buttonText}>Status</Text></TouchableOpacity>
          </View>

        </View>
      </ScrollView>
    );
  }
}


const styles = StyleSheet.create({
  buttonText:{
    paddingHorizontal:20,
    paddingVertical:15,
    color:'white',
    backgroundColor:"#a5154a",
    textAlign:'center'
  },
  descText:{
    fontSize:18,
    color:'black',
    marginLeft:20,
  },
  aboutText:{
    fontSize:20,
    color:'#a5154a',
    fontWeight:'bold',
    margin:20
  },
  container3: {
    flex: 1,
    alignItems:'center',
    margin:20
  },
  page: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  scrollViewContainer:{
    flex:1
  },
  container1:{
    flex:1
  },
  keyText:{
    fontSize:15,
    color:'white',
  },
  valueText:{
    fontSize:20,
    color:'white',
    fontWeight:'bold'
  },
  keyValueContainer:{
    flex:1,
    marginLeft:30
  },
  container2:{
    flex:1,
  },
  bgImageContainer:{
    width:'100%',
    height:'100%'
  },
  infoContainer:{
    flexDirection:'row',
    alignItems:'center',
    flex:1,
    padding:10
  }
})
