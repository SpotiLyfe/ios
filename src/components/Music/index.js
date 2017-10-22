import React, { Component } from 'react';
import { View, Text } from 'react-native';

import styles from '../../styles';

export default class Music extends Component {
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