import React, { PropTypes, Component } from 'react';
import Camera from 'react-native-camera';
import { connect } from 'react-redux';
import { listProduct } from '../actions/ProductActions';

import { GREY, DARK_GREY, WHITE } from '../constants/ColorConstants';
import { WIDTH, HEIGHT, MENU_HEIGHT } from '../constants/DimensionConstants';

import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Image
} from 'react-native';


const propTypes = {
  dispatch: PropTypes.func.isRequired
};

class CameraView extends Component {
  constructor() {
    super();
  }

  componentWillMount() {
  }

  render() {

    return (
        <View style={styles.pageWrap}>
          <Camera
            ref={(cam) => {
              this.camera = cam;
            }}
            style={styles.preview}
            captureAudio={false}
            captureTarget={Camera.constants.CaptureTarget.temp}
            aspect={Camera.constants.Aspect.fill}>
            <Text style={styles.capture} onPress={this.takePicture.bind(this)}>[CAPTURE]</Text>
          </Camera>
        </View>
    )
  }

  takePicture() {
    this.camera.capture()
      .then((data) => console.log(data))
      .catch(err => console.error(err));
  }
};

var styles = StyleSheet.create({
  pageWrap: {
    width: WIDTH,
    height: HEIGHT,
    backgroundColor: GREY,
    justifyContent: 'flex-start',
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    height: HEIGHT,
    width: WIDTH
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    color: '#000',
    padding: 10,
    margin: 40
  }
});

CameraView.propTypes = propTypes;

export default connect(
  (state) => ({
    product: state.product,
    login: state.login
  })
)(CameraView);
