import React, { Component } from 'react';
import { View, Text } from 'react-native';

import homeStyles from '../../styles/home';
//import ReactDOM from 'react-dom';
import Rectangle from 'react-rectangle';

export default class Home extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={homeStyles.container}>
                <Text>This is the start of the home page</Text>
                <View style={{ background: '#9e9e9e', width: '100vw', height: '100vh' }}>
                <Rectangle aspectRatio={[5, 3]}>
                <View style={{ background: '#607d8b', width: '100%', height: '100%' }} />
                </Rectangle>
              </View>,
            </View>
        );
    }
}
