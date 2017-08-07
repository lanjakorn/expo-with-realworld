import React, { Component } from 'react'

import { Colors } from 'constants'
import {
  Image,
  View,
  Text,
  ScrollView,
  Dimensions,
  PixelRatio,
  WebView,
} from 'react-native'
import { Button } from 'react-native-elements'
import { object } from 'utilities'

import PropTypes from 'prop-types'
import Swiper from 'react-native-swiper'

const { width } = Dimensions.get( 'window' )
const calHeight = {
  height: PixelRatio.roundToNearestPixel(
    Dimensions.get( 'window' ).width / ( 16 / 9 )
  ),
}

const styles = {
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB',
  },

  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5',
  },

  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: '#92BBD9',
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
  player: {
    height: PixelRatio.roundToNearestPixel(
      Dimensions.get( 'window' ).width / ( 16 / 9 )
    ),
    alignSelf: 'stretch',
    marginVertical: 10,
  },
}

class Slider extends Component {
  constructor( props ) {
    super( props )
    this.state = {
      SwipLoaded: false,
    }
  }

  componentDidMount() {
    setTimeout( () => {
      this.setState( {
        SwipLoaded: true,
      } )
    }, 100 )
  }
  // const Slider = ( { urls } ) => {
  tranformImage = url => {
    const videoId = url.split( 'v=' )[ 1 ]
    return `http://img.youtube.com/vi/${ videoId }/hqdefault.jpg`
  }

  render() {
    {
      return this.state.SwipLoaded
        ? <Swiper
          height={calHeight.height}
          horizontal
          showsButtons
          loop={false}
        >
          <View style={styles.slide1}>
            <Image
              source={{
                uri: object.getFirstByKey( {
                  item: this.props.urls,
                  key: 'imgs',
                } ),
              }}
              style={{ width: width, height: calHeight.height }}
              resizeMode="cover"
            />
          </View>
          <View style={styles.slide3}>
            <WebView
              source={{
                uri:
                    'https://www.youtube.com/embed/Qy8j0XJShQM?version=3&enablejsapi=1&rel=0&autoplay=1&showinfo=0&controls=1&modestbranding=0',
              }}
              style={{
                height: 240,
                width: width,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'black',
              }}
            />
          </View>
        </Swiper>
        : <View />
    }
  }
}

export default Slider
