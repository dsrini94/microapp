import React from "react";
import {
  ScrollView,
  ImageBackground,
  TouchableHighlight,
  View,
  Text,
  Image,
  StyleSheet,
  Alert,
  ActivityIndicator
} from "react-native";
import Card from "../components/Card.js";

const styles = StyleSheet.create({
  info: {
    color: "black"
  },
  wrapper:{
    marginHorizontal:10
  },
  container: {
    display: "flex",
    flexDirection: "row",
    // borderWidth: 1,
    borderRadius: 7,
    // borderColor: "#ddd",
    borderBottomWidth: 0,
    // shadowColor: "#000",
    // shadowOffset: {
    //   width: 0,
    //   height: 2
    // },
    // shadowOpacity: 0.2,
    // shadowRadius: 2,
    // elevation: 8,
    backgroundColor: "rgba(255,255,255,1)",
    marginLeft: 5,
    marginRight: 5,
    marginTop: 50,
    paddingHorizontal: 5,
    paddingVertical: 8
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    // marginRight: 15,
    // elevation: 30,
    // marginBottom: -80,
    marginHorizontal: 30,
    marginTop: 20
  },
  imageContainer: {
    // marginTop: -20,
    elevation: 100,
    position: "absolute"
  },
  rightSide: {
    display: "flex",
    justifyContent: "space-around"
  },
  leftSide: {
    width: 150
  },
  title: {
    fontSize: 18,
    fontWeight: "800",
    color: "#a5154a",
    width: 210
  },
  loadingContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor:'white',
    padding:20
  },
  loadingText: {
    fontSize: 20,
    textAlign: "center",
    color: "black"
  }
});

class Opportunities extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      isDataLoaded:false,
      loader:true,
      loadingMsg:'Fetching data from the server...'
    };
  }

  componentDidMount() {
    fetch(
      "http://ec2-13-126-105-122.ap-south-1.compute.amazonaws.com:8080/opportunities "
    )
      .then(response => response.json())
      .then(responseJson => {
        this.setState({ data: responseJson,isDataLoaded:true,loader:false});
      })
      .catch(error => {
        this.setState({loadingMsg:'Problem Connecting to Network',loader:false})
      });
  }

  render() {

    if(this.state.isDataLoaded == false)
    {
      return(
        <ImageBackground style={{ width: "100%", height: "100%" }}
        source={require("../../images/background.jpg")}>
        <View style={styles.loadingContainer}>
          <ActivityIndicator
            size="large"
            color="#a5154a"
            animating={this.state.loader}
          />
          <Text style={styles.loadingText}>{this.state.loadingMsg}</Text>
        </View>
        </ImageBackground>
      );
    }
    else {
      return (
        <ImageBackground
          style={{ width: "100%", height: "100%" }}
          source={require("../../images/background.jpg")}
        >
          <ScrollView>
            {this.state.data.map((item, key) => {
              return (
                <TouchableHighlight
                  onPress={() =>
                    this.props.navigation.navigate("poc", {
                      details: item
                    })
                  }
                  key={key}
                >
                  <View style={styles.wrapper}>
                    <View style={styles.imageContainer}>
                      <Image
                        resizeMode="cover"
                        source={require('./../../images/red.jpg')}
                        style={styles.image}
                        // resizeMode="contain"
                      />
                    </View>

                    <View style={styles.container}>
                      <View style={styles.leftSide} />

                      <View style={styles.rightSide}>
                        <View>
                          <Text style={styles.title}>{item.name}</Text>
                        </View>
                        <View>
                          <Text style={styles.info}>
                            Vertical: {item.vertical}
                          </Text>
                          <Text style={styles.info}>
                            Proposed Value: {item.business_dollar_value}
                          </Text>
                        </View>
                      </View>
                    </View>
                  </View>
                </TouchableHighlight>
              );
            })}
          </ScrollView>
        </ImageBackground>
      );
    }


  }
}


export default Opportunities;
