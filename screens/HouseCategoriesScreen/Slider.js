import React, { Component } from 'react'
import { Colors } from 'constants'
import { object, string } from 'utilities'

import PropTypes from 'prop-types'
import Swiper from 'react-native-swiper'
import {
  Dimensions,
  Image,
  PixelRatio,
  Platform,
  View,
  WebView,
} from 'react-native'
import { Button } from 'react-native-elements'

const { width } = Dimensions.get( 'window' )
const calHeight = {
  height: PixelRatio.roundToNearestPixel(
    Dimensions.get( 'window' ).width / ( 16 / 9 )
  ),
}

const styles = {
  wrapper: {},
  pagination: {
    bottom: Platform.OS === 'android' ? 0 : -30,
  },
  slideImage: {
    alignItems: 'center',
    backgroundColor: '#9DD6EB',
    flex: 1,
    justifyContent: 'center',
  },
  slideVideo: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
  player: {
    alignSelf: 'stretch',
    marginVertical: 10,
    height: PixelRatio.roundToNearestPixel(
      Dimensions.get( 'window' ).width / ( 16 / 9 )
    ),
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

  embedVideoLink() {
    const video = object.getFirstByKey( {
      item: this.props.urls,
      key: 'videos',
    } )

    return `https://www.youtube.com/embed/${ string.getYoutubeId(
      video
    ) }?version=3&enablejsapi=1&rel=0&autoplay=1&showinfo=0&controls=1&modestbranding=0`
  }

  render() {
    {
      return this.state.SwipLoaded
        ? <Swiper
          activeDotColor={Colors.tintColor}
          height={calHeight.height}
          paginationStyle={styles.pagination}
          loop={false}
        >
          <View style={styles.slideImage}>
            <Image
              resizeMode="cover"
              source={{
                uri: object.getFirstByKey( {
                  item: this.props.urls,
                  key: 'imgs',
                } ),
              }}
              style={{
                height: calHeight.height,
                width: width,
              }}
            />
          </View>
          <View style={styles.slideVideo}>
            <WebView
              source={{
                uri: this.embedVideoLink(),
              }}
              style={{
                alignItems: 'center',
                backgroundColor: 'black',
                height: 240,
                justifyContent: 'center',
                width: width,
              }}
            />
          </View>
        </Swiper>
        : <View />
    }
  }
}

export default Slider
