import React, { useRef, useState } from 'react';
import { Text, View, SafeAreaView, Dimensions, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';
import { lightTextColor, mainTextColor } from '../../../gstyles';

export default function Caroussel(props){
    
    const navigation = useNavigation();

    const carouselRef = useRef();

    const [activeIndex, setIndex] = useState(0);
    const [carouselItems, setItems] = useState(props.items);

    const screenWidth = Dimensions.get('window').width;

    const _renderItem = ({ item , index }) => {
        return (
            <TouchableOpacity style={styles.itemCard} onPress={() => navigation.navigate('DetalheReceitas', {title: item.label})}>
                <View style={styles.pillIcon}>
                    <MaterialCommunityIcons name="pill" size={24} color={'#888'}/>
                </View>
                <View style={styles.itemText}>
                    <Text style={styles.itemTitle}>{item.label}</Text>
                    <Text style={styles.itemQtd}>{item.qtd}</Text>
                </View>
            </TouchableOpacity>
        )
    }
    
    return(
        <SafeAreaView>
            <Carousel
                style={styles.carousel}
                ref={carouselRef}
                layout={"default"}
                data={carouselItems}
                sliderWidth={screenWidth - 40}
                itemWidth={screenWidth - 40}
                renderItem={_renderItem}
                onSnapToItem={index => setIndex(index)}/>
            <Pagination
                carouselRef={carouselRef}
                tappableDots
                dotsLength={carouselItems.length}
                activeDotIndex={activeIndex}
                containerStyle={styles.dotsContainer}
                dotStyle={styles.dotActive}
                animatedFriction={1.5}
                animatedDuration={0}
                inactiveDotOpacity={0.3}
                inactiveDotScale={0.7}
            />
            <View style={styles.navigators}>
                <TouchableOpacity style={styles.leftNav} onPress={() => carouselRef.current.snapToPrev()}>
                    <Feather size={42} color={mainTextColor} name={'chevron-left'}/>
                </TouchableOpacity>
                <TouchableOpacity style={styles.rightNav} onPress={() => carouselRef.current.snapToNext()}>
                    <Feather size={42} color={mainTextColor} name={'chevron-right'}/>
                </TouchableOpacity>
            </View>
    </SafeAreaView>
    );
}