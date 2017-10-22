import { StackNavigator } from 'react-navigation';

import styles from '../../styles';

import Home from './Home';
import Camera from './Camera';

<<<<<<< HEAD
        this.state = {
            hasCameraPermissions: null,
            type: Camera.Constants.Type.back
        };
    }

    async componentWillMount() {
        const { status } = await Permissions.askAsync(Permissions.CAMERA);
        this.setState({ hasCameraPermissions: status === 'granted' });
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>This is the start of the home page</Text>
                <Button
                  //onPress={onPressLearnMore}
                  style = {styles.homeButton}
                  title="Start \n the \n  app \n"
                  color="#841584"
                  accessibilityLabel="soundtrack my life"
                />
              {/* /**<View style={{ background: '#9e9e9e', width: '100vw', height: '100vh' }}>
               *<Rectangle aspectRatio={[5, 3]}>
              *<View style={{ background: '#607d8b', width: '100%', height: '100%' }} /> */ */}
                {/* </Rectangle> */}
              </View>,
            </View>
        );
    }
}
=======
export default StackNavigator({
    Home: { screen: Home },
    Camera: { screen: Camera }
},
{
    initialRouteName: 'Home'
});
>>>>>>> e0ca7f01a718d53f8194896b748b515b855afabc
