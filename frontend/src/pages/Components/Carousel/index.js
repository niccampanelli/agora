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
            justifyContent:'space-between',
              backgroundColor:'#ddd',
              borderRadius: 5,
              height: 130,
              padding: 40,
              marginLeft: 25,
              marginRight: 25, }}>
            <Text style={{fontSize: 24}}>{item.label}</Text>
            <Text>{item.qtd}</Text>
          </View>

        )
    }

    render() {
        return (
          <SafeAreaView style={{flex: 1, backgroundColor:'#fff', paddingTop: 40, }}>
            <View style={{ flex: 1, flexDirection:'row', justifyContent: 'center', }}>
                <Carousel
                  layout={"default"}
                  ref={ref => this.carousel = ref}
                  data={this.state.carouselItems}
                  sliderWidth={300}
                  itemWidth={300}
                  renderItem={this._renderItem}
                  onSnapToItem = { index => this.setState({activeIndex:index}) } />
            </View>
          </SafeAreaView>
        );
    }
}

