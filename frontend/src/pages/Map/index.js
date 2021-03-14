import React from 'react';
import { WebView } from 'react-native-webview';
import { View, Text, TouchableOpacity, ScrollView , StatusBar} from 'react-native';
import gstyles, {mainAppColor, mainTextColor, lightTextColor} from '../../gstyles';

export default function Map(){

    return(
    <View style={gstyles.container}>
        <WebView
            originWhitelist={['*']}
            source={{ uri: 'https://expo.io' }}
        />
    </View>
    );
}