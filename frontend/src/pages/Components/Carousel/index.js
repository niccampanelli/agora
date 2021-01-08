import React, { useState } from 'react';
import { Text, ScrollView } from 'react-native';

export default function Carousel(props){
  const { items } = props;

  return(
    <ScrollView
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      scrollEventThrottle={300}
      pagingEnabled
    >
      {items.map((item, index) => {
        <Text>item.label</Text>
      })}
    </ScrollView>
  );
}