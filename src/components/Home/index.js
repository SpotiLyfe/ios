import { StackNavigator } from 'react-navigation';

import styles from '../../styles';

import Home from './Home';
import Camera from './Camera';

export default StackNavigator({
    Home: { screen: Home },
    Camera: { screen: Camera }
}, {
    initialRouteName: 'Home'
});
