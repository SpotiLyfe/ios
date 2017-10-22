import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export default StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    camera: {
        flex: 1,
        width,
    }
    homeButton: {
        width: 100vw,
        height: 100vw,
        borderRadius: 100/2,
        backgroundColor:'red'
    }
});
