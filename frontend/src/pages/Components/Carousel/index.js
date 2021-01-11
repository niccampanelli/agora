import React, { useState } from 'react';
import { Text, View, SafeAreaView, Dimensions } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import styles from './styles';

export default function Caroussel(props){
    
    const [activeIndex, setIndex] = useState(0);
    const [carouselItems, setItems] = useState(props.items);

    const screenWidth = Dimensions.get('window').width;

    const _renderItem = ({ item , index }) => {
        return (
          <View style={styles.itemCard}>
            <Text style={styles.itemTitle}>{item.label}</Text>
            <Text style={styles.itemQtd}>{item.qtd}</Text>
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