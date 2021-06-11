import React, { useState, useEffect, useContext } from 'react';
import { Feather } from '@expo/vector-icons';
import * as Location from 'expo-location';
import { WebView } from 'react-native-webview';
import { View, Text, TouchableOpacity, Modal, FlatList, Alert, Image} from 'react-native';
import img from '../../assets/ubslogo.png';
import styles from './styles.js';
import gstyles, {mainAppColor, mainTextColor, lightTextColor} from '../../gstyles';
import { useNavigation, useRoute } from '@react-navigation/core';
import { pegarUnidade } from '../../middleware/UnidController';
import ContextUser from '../../context/UserContext';
import { CommonActions } from '@react-navigation/native';

export default function Map(){
    const resetAction = CommonActions.reset({
        index: 1,
        routes:[{ name: 'Home'}],
      });
 
    const navigation = useNavigation();
    const route = useRoute();
    const { uni,setUni } = useContext(ContextUser)

    const [hosp,setHosp] = useState()

    const irParaHosp = ({item}) => {navigation.navigate('InfoSobreNovaConsulta',{name:item.name,endereco:item.endereco,uidUnid:item.uidUnid})};
    const fecharModal = ({item})=>{
        setUni(item.uidUnid)
       return irParaHosp({item})
   };

   
      useEffect(()=>{
         pegarUnidade().then(setHosp)
      },[])

      const ListaHosp = ({ item }) => {
        return (
            <TouchableOpacity style={gstyles.listTextButton} onPress={()=>fecharModal({item})}>
                <View style={gstyles.listButtonImg}>
                    <Image style={gstyles.listButtonImgImage} source={img}/>
                </View>
                <View style={gstyles.listButtonTxt}>
                    <Text style={gstyles.listButtonTitle}>{item.name ? item.name : "n carrego"}</Text>
                    <Text style={gstyles.listButtonDesc}>{item.endereco ? item.endereco : "n carrego" }</Text>
                </View>
                <View style={styles.buttonEnter}>
                    <Feather size={40} color={lightTextColor} name={'chevron-right'}/>
                </View>
            </TouchableOpacity>
        )
    }

    return(
    <View style={styles.container}>
        
     
            <TouchableOpacity style={styles.backButton} onPress={() => navigation.dispatch(resetAction)}>
                <Feather size={42} color={mainAppColor} name="chevron-down"/>
            </TouchableOpacity>
           
                <View HeaderModal style={styles.headerModal}>
                <Text style={styles.headerTexto}>Nova Consulta</Text> 
                </View>
                <View style={styles.headerModalSubitleView} >
                <Text style={{...styles.headerModalSubitle}}>Primeiro,{'\n'}
                escolha abaixo uma unidade de saúde:
                </Text>
                </View>
                    <FlatList
                        style={styles.hospList}
                        data={hosp}
                        keyExtractor={item => item.name.toString()}
                        renderItem={({ item }) => <ListaHosp item={item} />}/>
        </View>
    
    );
}

/**
 * WebView com localizaçao atual do usuario
 * 
 * <WebView
 *        style={styles.webView}
 *         originWhitelist={'*'} 
 *          source={{ html:  html }}
 *       />
 *
 *   modal de antes 
 *  <Modal
                animationType="slide"
                transparent={false}
                visible={visivel}
                onRequestClose={() => {
                    setVisivel(!visivel)
                  }}
                  
            >
 *      
 * 
 */

            /**
             *  feather de antes
             * 
             * <TouchableOpacity style={{position:'absolute',right:0,top:"8%"}} onPress={()=>{
                        setVisivel(!visivel) 
                        navigation.replace("Home")  }}>
                        <Feather color={lightTextColor} size={45} name={"chevron-down"} />
                    </TouchableOpacity>
             */



                    /**
                     *  const [html, setHTML] = useState();

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
                     */