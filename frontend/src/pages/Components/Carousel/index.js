import React, { useState } from 'react';
import { Text, View, SafeAreaView, Dimensions } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Carousel from 'react-native-snap-carousel';
import styles from './styles';

export default function Caroussel(props){
    
    const [activeIndex, setIndex] = useState(0);
    const [carouselItems, setItems] = useState(props.items);

    const screenWidth = Dimensions.get('window').width;

    const _renderItem = ({ item , index }) => {
        return (
          <View style={styles.itemCard}>
            <View style={styles.pillIcon}>
              <MaterialCommunityIcons name="pill" size={24} color={'#888'}/>
            </View>
            <View style={styles.itemText}>
              <Text style={styles.itemTitle}>{item.label}</Text>
              <Text style={styles.itemQtd}>{item.qtd}</Text>
            </View>
          </View>
        )
    }
    
    return(
        <SafeAreaView>
          <Carousel
            style={styles.carousel}
            layout={"default"}
            data={carouselItems}
            sliderWidth={screenWidth - 40}
            itemWidth={screenWidth - 40}
            renderItem={_renderItem}
            onSnapToItem={index => setIndex(index)}/>
        </SafeAreaView>
    );
}