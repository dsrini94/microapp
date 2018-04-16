//importing React and React Native modules
import React,{Component} from 'react';
import {FlatList, View, Image, Text, StyleSheet, TouchableOpacity} from 'react-native';


export default class FlatListSwiper extends Component
{
  render()
  {

    const data = [
              {
                imageUrl: "https://cdn.movieweb.com/img.teasers.posters/FIvHJ0sRccQIzv_380_c/Black-Panther.jpg",
                title: "Introduction to DevOps",
                desc:'Login Page with Google Sign In',
                id:'1'
              },
              {
                imageUrl: "https://comicbooked.com/wp-content/uploads/2017/10/aquaman_2016_movie_poster_by_edaba7-d9fhens-213x300.jpg",
                title: "Introduction to Docker",
                desc:'Horizontal Image slider',
                id:'2'
              },
              {
                imageUrl: "https://www.movieinsider.com/images/p/600/486641_m1513300159.jpg",
                title: "Journey Map",
                desc: "Parallax Carousel",
                id:'3'
              },
              {
                imageUrl: "https://upload.wikimedia.org/wikipedia/en/6/6e/Little_Mix_-_Secret_Love_Song_%28Official_Single_Cover%29.png",
                title: "Migrating to PCF",
                desc: "Conversational Form",
                id:'4'
              },
              {
                imageUrl: "https://i.pinimg.com/originals/60/40/fb/6040fb24f2b8648de6dc8cd41133a21e.jpg",
                title: "Auto Fill Form",
                desc: "Auto Fill Form",
                id:'5'
              },
              {
                imageUrl: "https://i.pinimg.com/236x/db/71/88/db71882e82cdbf8394cee4ca1455099b--the-script-cd-cover.jpg",
                title: "Offline Maps",
                desc: "Offline Maps",
                id:6
              }
            ];

    return(
      <FlatList
      showsHorizontalScrollIndicator = {false}
     horizontal
     data={data}
     renderItem={({ item: rowData }) => {
       return (
         <TouchableOpacity>
           <View style={styles.container}>
              <Image source={{uri:'https://cdn130.picsart.com/254590989000212.png?r1024x1024'}} style={{height:100,width:100}}/>
              <Text style={styles.title}>
               {rowData.title}
             </Text>
           </View>
         </TouchableOpacity>
       );
     }}
     keyExtractor={(item, index) => index.toString()}
   />
    );
  }
}

const styles= StyleSheet.create({
  title:{
    paddingTop:10,
    marginTop:0,
    color:'white',
    fontSize:16,
    width:100,
    textAlign:'center',
    marginBottom:40
  },
  container:{
    margin:15,
    flexDirection:'column',
  }
})
