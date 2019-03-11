import React, { Component } from "react";

import { createStackNavigator, createAppContainer } from "react-navigation";
import { HomeScreen } from "./screens/HomeScreen";
import { DetailsScreen } from "./screens/DetailsScreen";

export default class App extends Component {
  render() {
    return <AppContainer />;
  }
}

const AppStackNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    Details: { screen: DetailsScreen }
  },
  {
    defaultNavigationOptions: {
      headerStyle: {},
      title: "Popular Movies"
    }
  }
);

const AppContainer = createAppContainer(AppStackNavigator);
