import {
  FLOAT_FROM_RIGHT,
  FLOAT_FROM_LEFT,
  FLOAT_FROM_BOTTOM
} from './constants/TransitionConstants';

export default class MainRouter {
  constructor(navigator) {
    this.navigator = navigator;
  }

  push(props, route) {
    const routesList = this.navigator.getCurrentRoutes();
    const nextIndex = routesList[routesList.length - 1].index + 1;
    route.props = props;
    route.index = nextIndex;
    this.navigator.push(route);
  }

  pop() {
    this.navigator.pop();
  }

  // toLogin(transition = FLOAT_FROM_LEFT) {
  //   this.push({}, {
  //     title: 'Login',
  //     component: Login,
  //     transition: transition
  //   })
  // }

}
