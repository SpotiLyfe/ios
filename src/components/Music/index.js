import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import styles from '../../styles';

export default class Music extends Component {
    static navigationOptions = {
        tabBarIcon: () => (
            <Ionicons name="md-musical-notes" size={32} />
        )
    };

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>This is the start of the music page</Text>
            </View>
        );
    }
}