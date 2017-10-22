import { TabNavigator } from 'react-navigation';

import Home from './Home';
import Music from './Music';

export default TabNavigator({
    Home: { screen: Home },
    Music: { screen: Music }
});