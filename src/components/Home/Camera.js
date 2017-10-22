import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Camera as ExpoCamera, Permissions } from 'expo';
import { Ionicons } from '@expo/vector-icons';

import styles from '../../styles/';

export default class Camera extends Component {
    state = {
        hasCameraPermissions: null,
        type: ExpoCamera.Constants.Type.back
    };

    async componentWillMount() {
        const { status } = await Permissions.askAsync(Permissions.CAMERA);
        this.setState({ hasCameraPermissions: status === 'granted' });
    }

    render() {
        const { hasCameraPermissions } = this.state;

        // Don't render anything before prompting permission
        if (hasCameraPermissions === null) {
            return <View></View>;
        } else if (hasCameraPermissions === false) {
            return (
                <View style={styles.container}>
                    <Text>No camera access</Text>
                </View>
            );
        } else {
            return (
                <View style={styles.container}>
                    <ExpoCamera style={styles.camera} type={this.state.type}>
                    <View
                        style={{
                            flex: 1,
                            backgroundColor: 'transparent',
                            marginTop: 10,
                            marginRight: 10
                        }}>
                        <TouchableOpacity
                            style={{
                                flex: 0.1,
                                alignSelf: 'flex-end',
                                alignItems: 'center',
                            }}
                            onPress={() => {
                                this.setState({
                                    type: this.state.type === ExpoCamera.Constants.Type.back
                                    ? ExpoCamera.Constants.Type.front
                                    : ExpoCamera.Constants.Type.back,
                                });
                            }}
                        >
                            <Ionicons name="ios-camera" size={32} style={{ color: 'white' }} />
                        </TouchableOpacity>
                    </View>
                    </ExpoCamera>
                </View>
            );
        }
    }
}