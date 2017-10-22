import React, { Component } from 'react';
import { View, Button } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import styles from '../../styles/';

export default class Home extends Component {
    static navigationOptions = {
        title: 'Home',
        tabBarIcon: () => (
            <Ionicons name="ios-home" size={32} />
        )
    };

    constructor(props) {
        super(props);
    }

    render() {
        return(
            <View style={styles.container}>
                <Button
                    onPress={() => this.props.navigation.navigate('Camera')}
                    title="Capture Moment"
                />
            </View>
        );
    }
}