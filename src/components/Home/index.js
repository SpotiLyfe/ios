import React, { Component } from 'react';
import { View, Text } from 'react-native';

import homeStyles from '../../styles/home';

export default class Home extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={homeStyles.container}>
                <Text>This is the start of the home page</Text>
            </View>
        );
    }
}