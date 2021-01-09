import React, { useState } from 'react';
import { Text, ScrollView, View } from 'react-native';
import styles from './styles';

export default function Carousel(){

  return(
    <ScrollView
      horizontal={true}
      contentContainerStyle={{flexGrow: 1}}
      showsHorizontalScrollIndicator={false}
      pagingEnabled
    >
      <View style={styles.item}>
        <View style={styles.itemCard}>
          <Text>asdasdasd</Text>
        </View>
      </View>
      <View style={styles.item}>
        <View style={styles.itemCard}>
          <Text>asdasdasd</Text>
        </View>
      </View>
      <View style={styles.item}>
        <View style={styles.itemCard}>
          <Text>asdasdasd</Text>
        </View>
      </View>
      <View style={styles.item}>
        <View style={styles.itemCard}>
          <Text>asdasdasd</Text>
        </View>
      </View>
      <View style={styles.item}>
        <View style={styles.itemCard}>
          <Text>asdasdasd</Text>
        </View>
      </View>
    </ScrollView>
  );
}