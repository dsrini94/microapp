// Importing React and React Native modules
import React, { Component } from 'react';
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  ScrollView,
  Image,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';

// importing Tab View
import GridView from 'react-native-super-grid';


export default class MCHome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      isLoading: true,
      loader: true,
      loadingMsg: 'Fetching Data from the server...',
    };
  }

  componentDidMount() {
    fetch('http://ec2-13-126-105-122.ap-south-1.compute.amazonaws.com:8080/microcomponents')
      .then(response => response.json())
      .then((responseJson) => {
        this.setState({ data: responseJson, isLoading: false, loader: false });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  render() {
    if (this.state.isLoading) {
      return (
        <View style={styles.loadingContainer}>
          <ActivityIndicator
            size="large"
            color="#a5154a"
            animating={this.state.loader}
          />
          <Text style={styles.loadingText}>{this.state.loadingMsg}</Text>
        </View>
      );
    }
    return (
      <ScrollView style={styles.scrollContainer}>
        <View >
          <GridView
            itemDimension={130}
            items={this.state.data}
            style={styles.gridView}
            renderItem={item => (
              <TouchableOpacity
                style={styles.loadingContainer}
                onPress={() => this.props.navigation.navigate('MCPage', {
                  details: item,
                })}
              >
                <View style={[styles.itemContainer]}>
                  <Image
                    source={require('./../../images/red.jpg')}
                    style={{ width: 100, height: 100, borderRadius: 50 }}
                  />
                  <Text style={styles.itemName}>{item.name}</Text>
                  <Text style={styles.itemCreator}>{item.creator}</Text>
                </View>
              </TouchableOpacity>
              )}
          />
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  gridView: {
    paddingTop: 25,
    flex: 1,
  },
  itemContainer: {
    justifyContent: 'space-between',
    borderRadius: 5,
    padding: 10,
    // height: 150,
    alignItems: 'center',
  },
  itemName: {
    fontSize: 18,
    color: '#a5154a',
    fontWeight: '600',
    textAlign: 'center',
    padding: 5,

  },
  itemCreator: {
    fontWeight: '400',
    fontSize: 16,
    color: 'black',
  },
  scrollContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  loadingContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  loadingText: {
    fontSize: 20,
    textAlign: 'center',
    color: 'black',
  },
});
