import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import { Camera, Permissions } from 'expo';

import styles from '../../styles/';

export default class Home extends Component {
    constructor(props) {
        super(props);

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
            </View>
        );
    }
}