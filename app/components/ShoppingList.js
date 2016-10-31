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
    this.props.dispatch(listProduct());
  }

  render() {

    return (
        <View style={styles.pageWrap}>
          {
            this.props.product.results.map((prod, index) => {
              return (
                <View>
                  <Text>{prod.name}</Text>
                  <Text>{prod.quantity}</Text>
                  <Text>{prod.image}</Text>
                </View>
              )
            })
          }
        </View>
    )
  }
};

var styles = StyleSheet.create({
  pageWrap: {
    width: WIDTH,
    height: HEIGHT - MENU_HEIGHT,
    marginTop: MENU_HEIGHT,
    backgroundColor: GREY
  }
});

ShoppingList.propTypes = propTypes;

export default connect(
  (state) => ({
    product: state.product
  })
)(ShoppingList);
