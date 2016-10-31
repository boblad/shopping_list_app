import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { listProduct } from '../actions/ProductActions';
import { login } from '../actions/LoginActions';

import { GREY, DARK_GREY, WHITE } from '../constants/ColorConstants';
import { WIDTH, HEIGHT, MENU_HEIGHT } from '../constants/DimensionConstants';

import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Image
} from 'react-native';


const propTypes = {
  dispatch: PropTypes.func.isRequired
};

class Login extends Component {
  constructor() {
    super();
    this.handleLogin = this.handleLogin.bind(this);
  }

  componentWillMount() {
    this.setState({
      username: '',
      password: ''
    })
  }

  render() {

    return (
        <View style={styles.pageWrap}>
          <View style={styles.loginWrap}>
            <View>
              <Text style={styles.label}>Username</Text>
              <TextInput
                style={styles.input}
                onChangeText={(text) => this.setState({ username: text})}
                value={this.state.username}/>
            </View>
            <View>
              <Text style={styles.label}>Password</Text>
              <TextInput
                style={styles.input}
                onChangeText={(text) => this.setState({ password: text})}
                value={this.state.password}/>
            </View>
            <TouchableOpacity style={styles.loginButton} onPress={this.handleLogin}>
              <Text style={styles.loginButtonText}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.signUpButton} onPress={this.handleLogin}>
              <Text style={styles.loginButtonText}>Sign Up</Text>
            </TouchableOpacity>
          </View>
        </View>
    )
  }

  handleLogin() {
    console.log('pressed')
    const { username, password } = this.state
    this.props.dispatch(login(this.props.router, username, password));
  }
};

const formWidth = WIDTH - 100;

var styles = StyleSheet.create({
  pageWrap: {
    width: WIDTH,
    height: HEIGHT - MENU_HEIGHT,
    marginTop: MENU_HEIGHT,
    backgroundColor: GREY,
    justifyContent: 'flex-start'
  },
  label: {
    width: formWidth,
    height: 20,
    alignItems: 'flex-start',
    color: 'white'
  },
  loginButton: {
    width: WIDTH / 2,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'green',
    borderRadius: 10
  },
  loginButtonText: {
    color: WHITE
  },
  loginWrap: {
    width: WIDTH,
    height: HEIGHT / 2,
    justifyContent: 'space-between',
    flexDirection: 'column',
    alignItems: 'center'
  },
  input: {
    width: formWidth,
    height: 40,
    backgroundColor: WHITE
  },
  signUpButton: {
    width: WIDTH / 2,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: DARK_GREY,
    borderRadius: 10
  },
});

Login.propTypes = propTypes;

export default connect(
  (state) => ({
    product: state.product
  })
)(Login);
