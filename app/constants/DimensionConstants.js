import {
  Dimensions,
  Platform
} from 'react-native';

let { width , height } = Dimensions.get('window');
let menuHeight = 70;
if (Platform.OS !== 'ios') {
  height = height - 20;
  menuHeight = 50;
}

export const HEIGHT = height;
export const WIDTH = width;
export const MENU_HEIGHT = menuHeight
