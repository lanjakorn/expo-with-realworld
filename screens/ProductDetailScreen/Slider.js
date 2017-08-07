import React from 'react'

import { Colors } from 'constants'
import {
  Image,
  View,
  Text,
  ScrollView,
  Dimensions,
  PixelRatio,
} from 'react-native'
import { Button } from 'react-native-elements'
import PropTypes from 'prop-types'
import { object } from 'utilities'

import Swiper from 'react-native-swiper'
import YouTube from 'react-native-youtube'

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
    backgroundColor: '#92BBD9',
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

const Slider = ( { urls } ) => {
  console.log( 'urls: ', urls )
  const tranformImage = url => {
    const videoId = url.split( 'v=' )[ 1 ]
    return `http://img.youtube.com/vi/${ videoId }/hqdefault.jpg`
  }

  return (
    <Swiper height={calHeight.height} horizontal loop={false}>
      <View style={styles.slide1}>
        <Image
          source={{
            uri: object.getFirstByKey( { item: urls, key: 'imgs' } ),
          }}
          style={{ width: width, height: calHeight.height }}
          resizeMode="cover"
        />
      </View>
      <View style={styles.slide3}>
        <Image
          source={{
            uri: tranformImage( 'https://www.youtube.com/watch?v=Qy8j0XJShQM' ),
          }}
          style={{ width: width, height: calHeight.height }}
          resizeMode="cover"
        />
      </View>
      <View style={styles.slide3}>
        <YouTube
          videoId="KVZ-P-ZI6W4" // The YouTube video ID
          play={true} // control playback of video with true/false
          fullscreen={true} // control whether the video should play in fullscreen or inline
          loop={true} // control whether the video should loop when ended
          //   onReady={e => this.setState( { isReady: true } )}
          //   onChangeState={e => this.setState( { status: e.state } )}
          //   onChangeQuality={e => this.setState( { quality: e.quality } )}
          //   onError={e => this.setState( { error: e.error } )}
          style={{ alignSelf: 'stretch', height: 300 }}
        />
      </View>
    </Swiper>
  )
}

export default Slider
