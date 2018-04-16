//importing React and React Native moduiles
import React,{Component} from 'react';
import {View, Text, StyleSheet, ImageBackground, ScrollView, Image, TouchableOpacity} from 'react-native';


import FlatListSwiper from './../components/flatListSwiper.js'


export default class NewHomePage extends Component
{
  render()
  {
    return(
        <ScrollView style={styles.scrollContainer}>

        <View>

          <View>
            <ImageBackground source={require('./../../images/background.jpg')} style={styles.backgroundImageContainer}>
              <View style={styles.trendingContainer}>
                <Text style={styles.heading}>Trending in Rapid Prototype</Text>
                <FlatListSwiper />
              </View>
            </ImageBackground>
          </View>

          <View style={styles.center}>
            <View style={styles.headingBaner}>
              <Text style={styles.headingBanerText}>What we do... How We do...</Text>
            </View>
          </View>

          <View style={styles.categoryContainer}>
              <View style={styles.category}>
                <TouchableOpacity style={styles.category} onPress={()=>{this.props.navigation.navigate('Opportunities')}}>
                  <Image source={require('./../../images/coding.png')} style={styles.imageStyle}/>
                  <Text style={styles.heading1}>Opportunities</Text>
                </TouchableOpacity>
              </View>

              <View style={styles.category}>
                <TouchableOpacity style={styles.category} onPress={()=>{this.props.navigation.navigate('MCHomepage')}}>
                  <Image source={require('./../../images/puzzle.png')} style={styles.imageStyle}/>
                  <Text style={styles.heading1}>Micro Components</Text>
                </TouchableOpacity>
              </View>
          </View>

          <View style={styles.categoryContainer}>
              <View style={styles.category}>
                <TouchableOpacity style={styles.category} onPress={()=>{this.props.navigation.navigate('techStack')}}>
                  <Image source={require('./../../images/responsive.png')} style={styles.imageStyle}/>
                  <Text style={styles.heading1}>Tech Stack</Text>
                </TouchableOpacity>
              </View>

              <View style={styles.category}>
                <TouchableOpacity style={styles.category} onPress={()=>{this.props.navigation.navigate('/Opportunities')}}>
                  <Image source={require('./../../images/video.png')} style={styles.imageStyle}/>
                  <Text style={styles.heading1}>Rapid Talks</Text>
                </TouchableOpacity>
              </View>
          </View>

        </View>

        </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  backgroundImageContainer:{
    height:'100%',
    width:'100%',
    flex:1
  },
  center:{
    alignItems:'center',
  },
  headingBanerText:{
    fontSize:20,
    color:'white',
    textAlign:'center',
    padding:20,
    backgroundColor:'#a5154a'
  },
  headingBaner:{
    backgroundColor:'white',
    width:300,
    marginTop:-30
  },
  heading1:{
    fontSize:18,
    textAlign:'center',
    color:'black',
    fontWeight:'bold',
  },
  imageStyle:{
    marginTop:20,
    height:80,
    width:80,
    marginBottom:20,
    marginTop:50,
    alignItems:'center',
  },
  scrollContainer:{
    flex:1
  },
  trendingContainer:{
    backgroundColor:'rgba(0, 0, 0,0.2)',
    padding:10,
  },
  heading:{
    fontSize:20,
    textAlign:'center',
    color:'white',
    fontWeight:'bold',
    marginBottom:20,
  },
  categoryContainer:{
    flexDirection:'row',
  },
  textContainer:{
    flex:1
  },
  category:{
    alignItems:'center',
    flex:1,
    flexDirection:'column',
    justifyContent:'space-around'
  },
  categoryText:{
    flexDirection:'row',
  }
})
