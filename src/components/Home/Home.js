import React, { Component } from 'react';
import { View, Button } from 'react-native';

import styles from '../../styles/';

export default class Home extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <View style={styles.container}>
                <Button
                    onPress={this.props.navigation.navigate('Camera')}
                    title="Capture Moment"
                />
            </View>
        );
    }
}