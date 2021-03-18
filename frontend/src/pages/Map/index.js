import React, { useState, useEffect } from 'react';
import { Feather } from '@expo/vector-icons';
import * as Location from 'expo-location';
import { WebView } from 'react-native-webview';
import { View, Text, TouchableOpacity, Modal, FlatList, Alert, Image} from 'react-native';
import img from '../../assets/ubslogo.png';
import styles from './styles';
import gstyles, {mainAppColor, mainTextColor, lightTextColor} from '../../gstyles';
import { useNavigation, useRoute } from '@react-navigation/core';

export default function Map(){

    const navigation = useNavigation();
    const route = useRoute();

    const hosp = [
        { id: 1, nome: "Hospital 1", local: 'Rua do 1, sao paulo' },
        { id: 2, nome: 'hospital 2', local: 'Rua do 2, sao paulo' },
        { id: 3, nome: 'hospital 3', local: 'Rua do 3, sao paulo' },
        { id: 4, nome: 'hospital 4', local: 'Rua do 4, sao paulo' },
        { id: 5, nome: 'hospital 5', local: 'Rua do 5, sao paulo' },

    ]

    const modalOpenParam = route.params.modalOpen == undefined ? false : route.params.modalOpen;
    const [visivel, setVisivel] = useState(modalOpenParam);

    const irParaHosp = ({item}) => {navigation.navigate('InfoSobreNovaConsulta',{nome:item.nome,local:item.local})};
    const fecharModal = ({item})=>{
        navigation.goBack() 
       return irParaHosp({item})
   };

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

      const ListaHosp = ({ item }) => {
        return (
            <TouchableOpacity style={gstyles.listTextButton} onPress={()=>fecharModal({item})}>
                <View style={gstyles.listButtonImg}>
                    <Image style={gstyles.listButtonImgImage} source={img}/>
                </View>
                <View style={gstyles.listButtonTxt}>
                    <Text style={gstyles.listButtonTitle}>{item.nome}</Text>
                    <Text style={gstyles.listButtonDesc}>{item.local}</Text>
                </View>
                <View style={styles.buttonEnter}>
                    <Feather size={40} color={lightTextColor} name={'chevron-right'}/>
                </View>
            </TouchableOpacity>
        )
    }

    return(
    <View style={styles.container}>
        <WebView
            style={styles.webView}
            originWhitelist={'*'} 
            source={{ html:  html }}
        />
        <View style={styles.mapOverlay}>
            <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
                <Feather size={42} color={lightTextColor} name="chevron-left"/>
            </TouchableOpacity>
            <Modal
                animationType="slide"
                transparent={false}
                visible={visivel}
                onRequestClose={() => {
                    setVisivel(!visivel)
                  }}
            >
                <View HeaderModal style={styles.headerModal}>
                    <TouchableOpacity style={styles.closeButton} onPress={()=>setVisivel(!visivel)}>
                        <Feather color={lightTextColor} size={40} name={"chevron-down"} />
                    </TouchableOpacity>
                    <Text style={styles.headerModalTitle}>Nova Consulta</Text>
                </View>
                <Text style={styles.headerModalSubitle}>Primeiro, escolha abaixo uma unidade de saúde:</Text>
                    <FlatList
                        style={styles.hospList}
                        data={hosp}
                        keyExtractor={item => item.id.toString()}
                        renderItem={({ item }) => <ListaHosp item={item} />}/>
            </Modal>
        </View>
    </View>
    );
}