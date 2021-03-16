import React, { useState, useEffect } from 'react';
import { Feather } from '@expo/vector-icons';
import * as Location from 'expo-location';
import { WebView } from 'react-native-webview';
import { View, Text, TouchableOpacity, ScrollView , StatusBar, Alert} from 'react-native';
import styles from './styles';
import gstyles, {mainAppColor, mainTextColor, lightTextColor} from '../../gstyles';

export default function Map(){

    const [html, setHTML] = useState();

    useEffect(() => {
        (async () => {
          let { status } = await Location.requestPermissionsAsync();
          if (status !== 'granted') {
            Alert.alert('Permission to access location was denied');
            return;
          }
    
          let location = await Location.getCurrentPositionAsync({});

          const MapHTML = 
                `
                <!DOCTYPE html>
                <html lang="pt-br">
                <head>
                    <meta charset="UTF-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <script src='https://api.mapbox.com/mapbox-gl-js/v2.1.1/mapbox-gl.js'></script>
                    <link href='https://api.mapbox.com/mapbox-gl-js/v2.1.1/mapbox-gl.css' rel='stylesheet' />
                    <link href='./styles.css' rel='stylesheet' />
                    <title>Mapa de Unidades</title>
                </head>
                <body style='padding: 0; margin: 0;'>
                    <div id='map' style='width: 100%; height: 98vh; padding: 0; margin: 0;'></div>
                    <script>
                        mapboxgl.accessToken = 'pk.eyJ1IjoiY2FtcGFuZWxsaW5pY2MiLCJhIjoiY2ttOGR0MnZ5MTZ2MzJvcXM4cG1zczZvNCJ9.T7DbMzvz1uFk5TGQeYxh0A';
                        var map = new mapboxgl.Map({
                            container: 'map',
                            style: 'mapbox://styles/mapbox/light-v10',
                            center: [${location['coords'].longitude}, ${location['coords'].latitude}],
                            zoom: 13,
                        });

                        var marker = new mapboxgl.Marker()
                            .setLngLat([${location['coords'].longitude}, ${location['coords'].latitude}])
                            .addTo(map);
                    </script>
                </body>
                </html>
                `
          setHTML(MapHTML);
        })();
      }, []);

    return(
    <View style={styles.container}>
        <WebView
            style={styles.webView}
            originWhitelist={'*'} 
            source={{ html:  html }}
        />
        <View style={styles.mapOverlay}>
            <View style={styles.backButton}>
                <Feather style={styles.backButtonIcon} name="chevron-left"/>
            </View>
        </View>
    </View>
    );
}