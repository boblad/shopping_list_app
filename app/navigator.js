import React, { Component } from 'react';
// import dismissKeyboard from 'react-native-dismiss-keyboard';
import ShoppingList from './components/ShoppingList';
import Login from './components/Login';
import MainRouter from './router';
import { connect } from 'react-redux';
import { clearMessages } from './actions/MessageActions';

import {
  AppRegistry,
  StyleSheet,
  Text,
  Navigator,
  View,
  BackAndroid
} from 'react-native';

import { WIDTH, HEIGHT, MENU_HEIGHT } from './constants/DimensionConstants';


var styles = StyleSheet.create({
  container:{
    width: WIDTH,
    height: HEIGHT
  }
});

class MainNavigator extends Component {
  componentWillMount() {

  }

  componentDidMount() {
    BackAndroid.addEventListener('hardwareBackPress',
      this.handleBackAndroid.bind(this));
  }

  componentWillUnmount() {
    BackAndroid.removeEventListener('hardwareBackPress',
      this.handleBackAndroid.bind(this));
  }

  handleBackAndroid() {
    return true;
  }

  renderScene(route, navigator) {
    this.router = this.router || new MainRouter(navigator);
    if (route.component) {
      return React.createElement(route.component, Object.assign({}, route.props,
        {
          ref: view => this[route.name] = view,
          router: this.router,
        }
      ));
    }
  }

  configureScene(route, routeStack) {
    this.props.dispatch(clearMessages());
    // dismissKeyboard();

    if (route.sceneConfig) {
      return route.sceneConfig;
    }
    if (route.transition) return Navigator.SceneConfigs[route.transition];
    else return Navigator.SceneConfigs.FloatFromRight;
  }

  render() {
    return (
        <Navigator
          ref={view => this.navigator = view}
          initialRoute={{
            title: 'ColorCode',
            component: Login,
            index: 0
          }}
          configureScene={this.configureScene.bind(this)}
          renderScene={this.renderScene.bind(this)}
          />
    );
  }
};

export default connect(
  (state) => ({
  })
)(MainNavigator);
