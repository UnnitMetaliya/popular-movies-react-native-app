import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

export class DetailsScreen extends Component {
  render() {
    // Get the param value
    const { navigation } = this.props;
    const movieTitle = navigation.getParam("movieTitle");
    const moviePosterUrl = navigation.getParam("moviePosterUrl");
    const movieRatings = navigation.getParam("movieRatings");
    const movieOverview = navigation.getParam("movieOverview");
    const basePosterPath = "http://image.tmdb.org/t/p/w185/";
    const movieReleaseDate = navigation.getParam("movieReleaseDate");

    //extracting only year (yyyy) from release date (yyyy-mm-dd) format
    const dateComponents = movieReleaseDate.split("-");
    const movieReleaseYear = dateComponents[0];

    return (
      <ScrollView>
        <View style={styles.detailsContainer}>
          <Text style={styles.movieTitle}>{movieTitle}</Text>
          <View style={styles.movieEssentials}>
            <Image
              style={styles.detailScreenPoster}
              source={{ uri: basePosterPath + moviePosterUrl }}
            />
            <View style={styles.movieMetaData}>
              <Text style={styles.movieYear}>{movieReleaseYear}</Text>
              <Text style={styles.movieRatings}>{movieRatings}/10</Text>
              <TouchableOpacity style={styles.favButton} onPress={() => {}}>
                <Text style={styles.favButtonText}>
                  <Ionicons
                    style={styles.heartIcon}
                    name="md-heart"
                    size={12}
                    color="red"
                  />
                  <Text> </Text>
                  <Text> </Text>
                  MARK AS FAVORITE
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.movieOverview}>
            <Text>{movieOverview}</Text>
          </View>
          <View style={styles.separator} />

          <View>
            <Text style={styles.trailerHeader}>Trailers:</Text>
          </View>

          <TouchableOpacity>
            <View style={styles.trailerSection}>
              <Ionicons name="md-play-circle" size={39} color="black" />
              <Text style={styles.trailerTitle}>Trailer 1</Text>
            </View>
          </TouchableOpacity>
          <View style={styles.separator} />
          <TouchableOpacity>
            <View style={styles.trailerSection}>
              <Ionicons name="md-play-circle" size={39} color="black" />
              <Text style={styles.trailerTitle}>Trailer 2</Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }
  static navigationOptions = {
    title: "Movie Details"
  };
}
const styles = StyleSheet.create({
  detailsContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start",
    margin: 24
  },
  detailScreenPoster: {
    width: 128,
    height: 190.5
  },
  favButton: {
    marginTop: 10,
    padding: 10,
    backgroundColor: "#86e4db",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#6fcac2"
  },
  favButtonText: {
    color: "#fff",
    textAlign: "center",
    fontSize: 11,
    fontWeight: "bold"
  },
  movieMetaData: {
    height: 190.5,
    marginLeft: 24,
    width: 150
  },
  movieRatings: {
    fontWeight: "bold",
    padding: 5,
    marginTop: 5
  },
  movieTitle: {
    // backgroundColor: "#009688",
    // padding: 10,
    color: "#009688",
    fontWeight: "bold",
    fontSize: 15,
    shadowColor: "#000",
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2
  },
  movieYear: {
    fontSize: 30,
    fontWeight: "bold",
    color: "grey"
  },
  movieEssentials: {
    flexDirection: "row",
    marginTop: 20
  },
  movieOverview: {
    paddingTop: 10
  },
  separator: {
    borderColor: "#eeeeee",
    borderBottomWidth: 2,
    borderRadius: 10,
    marginTop: 20
  },
  trailerTitle: {
    marginTop: 11,
    marginLeft: 24
  },
  trailerSection: {
    flex: 1,
    flexDirection: "row",
    marginTop: 10,
    padding: 15,
    paddingLeft: 50
  },
  trailerHeader: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 10
  }
});
