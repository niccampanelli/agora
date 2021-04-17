import React,{useState,useEffect} from 'react'
import { Text, View, TouchableOpacity, StatusBar } from 'react-native'
import { Feather } from '@expo/vector-icons';
import styles from './styles';
import { lightTextColor, mainTextColor } from '../../../gstyles';
import { WebView } from 'react-native-webview';


export default function Marcadas({ route, navigation }) {

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


    const InfoKeys = (props) => <Text style={{ fontWeight: 'bold', color: mainTextColor, fontSize: 16 }}>{props.name}</Text>
    const Info = (props) => <Text style={{ color: '#555', fontStyle: 'italic' }} >{props.info}</Text>

    return (
        <View style={{ flex: 1 }}>
            <View style={styles.headerConsInfo}>

                <StatusBar
                    barStyle='dark-content' />

                <TouchableOpacity onPress={() => navigation.goBack()} style={styles.voltar}
                ><Feather color={lightTextColor} size={40} name={"chevron-left"} />
                </TouchableOpacity>

                <View style={styles.headerTexto}>
                    <Text style={{ fontSize: 28, fontWeight: 'bold', color: mainTextColor }}>Informações</Text>
                </View>

            </View>
            <View style={styles.info}>

                <View style={styles.blocoInfo}>
                    <InfoKeys name={"Especialidade:  "} />
                    <Info info={'aa'} />
                </View>

                <View style={styles.blocoInfo}>
                    <InfoKeys name={'Dia Marcado:  '} />
                    <Info info={'12/12/1111'} />
                </View>

                <View style={styles.blocoInfo}>
                    <InfoKeys name={'Hora Prevista:  '} />
                    <Info info={'12:34'} />
                </View>

                <View style={styles.blocoInfo}>
                    <InfoKeys name={'Local:  '} />
                    <Info info={'Rua MiauMiau, 123 São Paulo-SP'} />
                </View>

                <View style={styles.blocoInfo}>
                    <InfoKeys name={'Hospital/Clinica:  '} />
                    <Info info={'Xesquedele no desque saude'} />
                </View>

                <View style={styles.blocoInfo}>
                    <InfoKeys name={'Tipo:  '} />
                    <Info info={'Consulta '} />
                </View>

                <View style={styles.blocoInfo}>
                    <InfoKeys name={'Nome:  '} />
                    <Info info={'Doutor Rafael'} />
                </View>
                <View style={styles.webView}  >
                <WebView
            style={{padding:0}}
            originWhitelist={'*'} 
            source={{ html:  html }}
        />
                </View>
            </View>

        </View>
    )
}
/*
<View style={styles.blocoInfo}>
</View>

<InfoKeys name={''}/>
<Info info={''}/>
  */