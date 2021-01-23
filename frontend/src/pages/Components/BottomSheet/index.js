import React, { useRef, useEffect } from 'react';
import { Animated, View, Dimensions } from 'react-native';
import styles from './styles';

const FadeInView = (props) => {

  const screenHeight = Dimensions.get('window').height;
  const fadeAnim = useRef(new Animated.Value(screenHeight)).current;

  useEffect(() => {
    Animated.timing(
      fadeAnim,
      {
        toValue: screenHeight - 400,
        duration: 200,
        useNativeDriver: true,
      }
    ).start();
  }, [fadeAnim])

  return (
    <Animated.View                 // Special animatable View
      style={{
        ...props.style,
        translateY: fadeAnim,         // Bind opacity to animated value
      }}
    >
      {props.children}
    </Animated.View>
  );
}

export default (props) => {
  return (
    <View style={styles.sheetBackground}>
      <FadeInView style={styles.sheet}>
        {props.children}
      </FadeInView>
    </View>
  )
}