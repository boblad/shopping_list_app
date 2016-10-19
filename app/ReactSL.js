import React, { Component } from 'react';
import MainNavigator from './navigator';
import { connect } from 'react-redux';
import ActivityIndicator from './components/ActivityIndicator';
import { clearMessages } from './actions/MessageActions';
import {
  StyleSheet,
  View,
  Dimensions,
  LayoutAnimation,
  TouchableOpacity,
  Text,
  UIManager
} from 'react-native';

import { WIDTH, HEIGHT, MENU_HEIGHT } from './constants/DimensionConstants';
import { GREY, WHITE, RED, LIGHT_GREY, BLUE } from './constants/ColorConstants';
console.ignoredYellowBox = [
  'Warning: You are manually calling a React.PropTypes validation',
];

class ReactSL extends Component {
  constructor() {
    super();
    this.handleMessagePress = this.handleMessagePress.bind(this);
    UIManager.setLayoutAnimationEnabledExperimental &&
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }

  componentWillMount() {
    this.setState({
      isSwiping: false,
      startMoveY: 0
    });
  }

  render() {
    const { load, message } = this.props;
    let errorTop = 0 - MENU_HEIGHT;
    let successTop = 0 - MENU_HEIGHT;
    if (message.successMessage) successTop = 0;
    if (message.errorMessage) errorTop = 0;
    // LayoutAnimation.easeInEaseOut();
    return (
      <View style={styles.base}>
        <View style={styles.container}>
          <MainNavigator />
          {
            load.isLoading &&
            <View style={styles.loaderWrap}>
              <ActivityIndicator />
            </View>
          }
          <TouchableOpacity
            onPress={this.handleMessagePress}
            style={[styles.messageWrap, styles.errorWrap, { top: errorTop }]}>
            {
              message.errorMessage &&
              <Text style={styles.errorMessage}>{message.errorMessage}</Text>
            }
          </TouchableOpacity>
          <TouchableOpacity
            onPress={this.handleMessagePress}
            style={[styles.messageWrap, styles.successWrap, { top: successTop }]}>
            {
              message.successMessage &&
              <Text style={styles.errorMessage}>{message.successMessage}</Text>
            }
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  handleMessagePress() {
    this.props.dispatch(clearMessages());
  }
};

const loaderBackgroundWidth = 80;

var styles = StyleSheet.create({
  base: {
    backgroundColor: GREY,
    flex: 1
  },
  container: {
    position: 'absolute',
    top: 0,
    width: WIDTH,
    height: HEIGHT,
    backgroundColor: GREY
  },
  errorMessage: {
    color: WHITE
  },
  loaderWrap: {
    width: loaderBackgroundWidth,
    height: loaderBackgroundWidth,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    backgroundColor: LIGHT_GREY,
    borderRadius: 5,
    top: (HEIGHT / 2) - (loaderBackgroundWidth / 2),
    left: (WIDTH / 2) - (loaderBackgroundWidth / 2)
  },
  messageWrap: {
    width: WIDTH,
    height: MENU_HEIGHT,
    position: 'absolute',
    top: 0,
    justifyContent: 'center',
    alignItems: 'center'
  },
  errorWrap: {
    backgroundColor: RED
  },
  successWrap: {
    backgroundColor: BLUE
  }
});

export default connect(
  (state) => ({
    load: state.load,
    message: state.message
  })
)(ReactSL);
