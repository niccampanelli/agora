import React, { useState, useEffect } from 'react'
import { Text, View, TouchableOpacity, StatusBar, ActivityIndicator } from 'react-native'
import { Feather } from '@expo/vector-icons';
import styles from './styles';
import { lightTextColor, mainAppColor, mainTextColor } from '../../../gstyles';
import { WebView } from 'react-native-webview';
import { pegarLocal } from '../../../middleware/UnidController';


export default function Marcadas({ route, navigation }) {

    const [html, setHTML] = useState();
    const [info, setInfo] = useState({});
    const [v, setV] = useState(0);
    const { name, data, espec, hora, COD_UNI } = route.params

    let dia = new Date(data.toMillis()).getDate()
    let mes = new Date(data.toMillis()).getMonth()
    let ano = new Date(data.toMillis()).getFullYear()

    let local = {}



    useEffect(() => {

        async function a() {
            await pegarLocal(COD_UNI).then(res => {

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
                            center: [${info.lon}, ${info.lat}],
                            zoom: 13,
                        });
        
                        var marker = new mapboxgl.Marker()
                            .setLngLat([${info.lon}, ${info.lat}])
                            .addTo(map);
                    </script>
                </body>
                </html>
                `
                setHTML(MapHTML);
                setInfo(res)
                if(!html) setV(v+1)
            })
                .catch(console.log)
        }
        a()
console.log(v);

    }, [v])





    const InfoKeys = (props) => <Text style={{ fontWeight: 'bold', color: mainTextColor, fontSize: 18 }}>{props.name}</Text>
    const Info = (props) => <Text style={{ color: '#555', fontSize: 16 }} >{props.info}</Text>

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

                <View style={styles.webView}  >
                    {html ? <WebView
                        style={{ padding: 0 }}
                        originWhitelist={'*'}
                        source={{ html: html }}
                    /> :
                        <ActivityIndicator size={32} color={mainAppColor} />}
                </View>

                <View style={styles.blocoInfo}>
                    <InfoKeys name={"Especialidade: "} />
                    <Info info={espec} />
                </View>

                <View style={styles.blocoInfo}>
                    <InfoKeys name={'Dia Marcado: '} />
                    <Info info={`${dia}/${mes}/${ano}`} />
                </View>

                <View style={styles.blocoInfo}>
                    <InfoKeys name={'Hora Prevista: '} />
                    <Info info={hora} />
                </View>

                <View style={styles.blocoInfo}>
                    <InfoKeys name={'Local:  '} />
                    <Info info={info ? info.endereco : 'carregando...'} />
                </View>

                <View style={styles.blocoInfo}>
                    <InfoKeys name={'Hospital/Clinica:  '} />
                    <Info info={info ? info.name : 'carregando...'} />
                </View>

                <View style={styles.blocoInfo}>
                    <InfoKeys name={'Tipo:  '} />
                    <Info info={'Consulta '} />
                </View>

                <View style={styles.blocoInfo}>
                    <InfoKeys name={'Médico:  '} />
                    <Info info={name} />
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