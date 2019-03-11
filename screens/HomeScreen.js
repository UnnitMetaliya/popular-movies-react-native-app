import React, { Component } from "react";
import {
  StyleSheet,
  View,
  ScrollView,
  FlatList,
  Image,
  TouchableOpacity
} from "react-native";

// this is home screen component where all the posters will initially be displayed
// home component is pretty big. thats' because we are doing everything in here. i.e structuring props for details screen

// home component starts
export class HomeScreen extends Component {
  constructor() {
    super();
    this.state = {
      dataSource: []
    };
  }

  //rendering all the posters for our main home screen from moviedb json
  renderItem = ({ item }) => {
    const basePosterPath = "http://image.tmdb.org/t/p/w185/";
    return (
      <View styles={styles.container}>
        <TouchableOpacity
          onPress={() =>
            this.props.navigation.navigate("Details", {
              movieTitle: item.title,
              moviePosterUrl: item.poster_path,
              movieReleaseDate: item.release_date,
              movieRatings: item.vote_average,
              movieOverview: item.overview
            })
          }
        >
          <Image
            style={styles.poster}
            source={{ uri: basePosterPath + item.poster_path }}
          />
        </TouchableOpacity>
      </View>
    );
  };

  //fetching initial data in this lifecycle method
  componentDidMount() {
    // const API_KEY = process.env.APIKEY;
    // const url = "http://api.themoviedb.org/3/movie/popular?api_key=" + API_KEY;
    // .env hiding key is not working for some reason
    // adding temporary work around for securing key. needs to rectified asap. won't be visible to web scrappers though.
    // damaging my key with intention
    const selfDamagedKey = "9089tt1e18373fcf3148cdc5cc78252f98a15e77909";
    const recoveredKey = selfDamagedKey.substr(6).slice(0, -5);
    const url =
      "http://api.themoviedb.org/3/movie/popular?api_key=" + recoveredKey;
    fetch(url)
      .then(response => response.json())
      .then(responseJson => {
        this.setState({ dataSource: responseJson.results });
      })
      .catch(error => {
        console.log(error);
      });
  }

  //rendering a flatlist of popular movie posters
  render() {
    // we need to define how many columns we want in flatlist
    const numColumns = 2;
    return (
      <View style={styles.container}>
        <ScrollView style={styles.contentContainer}>
          <FlatList
            data={this.state.dataSource}
            renderItem={this.renderItem}
            numColumns={numColumns}
            keyExtractor={(item, index) => index.toString()}
          />
        </ScrollView>
      </View>
    );
  }
}
// home component ends

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },

  poster: {
    width: 187.5,
    height: 279
  }
});
