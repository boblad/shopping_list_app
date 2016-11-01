import React, { PropTypes, Component } from 'react';
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

class ShoppingList extends Component {
  constructor() {
    super();
  }

  componentWillMount() {
    this.props.dispatch(listProduct(this.props.login.apikey));
  }

  render() {

    return (
        <View style={styles.pageWrap}>
          <Text>List</Text>
          {
            this.props.product.results.map((prod, index) => {
              return (
                <View style={styles.productWrap} key={index}>
                  <View style={styles.leftWrap}>
                    <Image style={styles.image} source={{url: prod.image}} resizeMode="contain"/>
                    <Text style={styles.name}>{prod.name}</Text>
                  </View>
                  <Text style={styles.quatity}>Quantity: {prod.quantity}</Text>
                </View>
              )
            })
          }
          <TouchableOpacity onPress={() => this.props.router.toCamera()}>
            <Text>Camera</Text>
          </TouchableOpacity>
        </View>
    )
  }
};

var styles = StyleSheet.create({
  pageWrap: {
    width: WIDTH,
    height: HEIGHT - MENU_HEIGHT,
    marginTop: MENU_HEIGHT,
    backgroundColor: GREY,
    justifyContent: 'flex-start',
  },
  image: {
    width: 50,
    height: 50
  },
  name: {
    marginLeft: 5,
    color: WHITE,
  },
  leftWrap: {
    width: WIDTH / 2,
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row'
  },
  productWrap: {
    width: WIDTH,
    height: 50,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: WHITE
  },
  quatity: {
    color: WHITE,
  },
});

ShoppingList.propTypes = propTypes;

export default connect(
  (state) => ({
    product: state.product,
    login: state.login
  })
)(ShoppingList);
