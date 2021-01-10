import * as React from 'react';
import {
  Text, 
  View,
  SafeAreaView } from 'react-native';

import Carousel from 'react-native-snap-carousel';

export default class App extends React.Component {

 
    constructor(props){
        super(props);
        this.state = {
          activeIndex:0,
          carouselItems: this.props.items
      }
    }

    _renderItem({item,index}){
        return (
          <View style={{
            justifyContent:'space-around',
              backgroundColor:'#ddd',
              borderRadius: 50,
              height: 190,
              padding: 50,
              marginLeft: 25,
              marginRight: 25, }}>
            <Text style={{fontSize: 24,marginBottom:20}}>{item.label}</Text>
            <Text>{item.qtd}</Text>
           
          </View>

        )
    }

    render() {
        return (
          <SafeAreaView style={{ backgroundColor:'#fff',  }}>
           
                <Carousel
                  layout={"default"}
                  ref={ref => this.carousel = ref}
                  data={this.state.carouselItems}
                  sliderWidth={300}
                  itemWidth={300}
                  renderItem={this._renderItem}
                  onSnapToItem = { index => this.setState({activeIndex:index}) } />
           
          </SafeAreaView>
        );
    }
}

