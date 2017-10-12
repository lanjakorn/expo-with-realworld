import React, { Component } from 'react'
import {
  Dimensions,
  Image,
  PixelRatio,
  Platform,
  Text,
  View,
  WebView,
} from 'react-native'
import Swiper from 'react-native-swiper'
import { object, url } from 'utilities'
import { Colors } from 'constants'

const { width } = Dimensions.get( 'window' )

const calHeight = {
  height: PixelRatio.roundToNearestPixel(
    Dimensions.get( 'window' ).width / ( 16 / 9 )
  ),
}

const styles = {
  wrapper: {},
  pagination: {
    bottom: Platform.OS === 'android' ? 30 : -30,
  },
  buttonWrappe: {
    backgroundColor: 'transparent',
    flexDirection: 'row',
    position: 'absolute',
    top: 0,
    left: 0,
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  nextButton: {
    color: Colors.tintColor,
    fontSize: 65,
  },
  prevButton: {
    color: Colors.tintColor,
    fontSize: 65,
  },
  slideImage: {
    alignItems: 'center',
    backgroundColor: '#FFF',
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
    height: calHeight,
  },
}

class Slider extends Component {
  videoLink = () =>
    url.youtubeVideoUrl(
      object.getFirstByKey( {
        item: this.props.urls,
        key: 'videos',
      } )
    )

  all = () => {
    const { imgs, videos } = this.props.urls
    const imgsComponent = imgs.map( ( e, k ) => (
      <Image
        key={`img-${ e }-${ k }`}
        resizeMode="cover"
        source={{
          uri: object.getFirstByKey( {
            item: this.props.urls,
            key: 'imgs',
          } ),
        }}
        style={{
          backgroundColor: 'transparent',
          height: calHeight.height,
          width: width,
        }}
      />
    ) )

    const videosComponent =
      videos &&
      videos.map( ( e, k ) => (
        <View key={`video-${ e }-${ k }`} style={styles.slideVideo}>
          <WebView
            source={{
              uri: this.videoLink(),
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
      ) )

    return { ...imgsComponent, ...videosComponent }
  }

  render() {
    {
      return this.props.all ? (
        <Swiper
          containerStyle={{
            backgroundColor: 'black',
            width: Dimensions.get( 'window' ).width,
          }}
          activeDotColor={Colors.tintColor}
          buttonWrapperStyle={styles.buttonWrappe}
          height={calHeight.height}
          loop={false}
          nextButton={<Text style={styles.nextButton}>›</Text>}
          paginationStyle={styles.pagination}
          prevButton={<Text style={styles.prevButton}>‹</Text>}
          showsButtons={Platform.OS === 'android' ? true : false}
          loadMinimal={true}
          loadMinimalSize={1}
          removeClippedSubviews={false}
        >
          {this.props.urls.imgs.map( ( e, k ) => (
            <Image
              key={`img-${ e }-${ k }`}
              resizeMode="cover"
              source={{
                uri: e,
              }}
              style={{
                backgroundColor: 'transparent',
                height: calHeight.height,
                width: width,
              }}
            />
          ) )}
        </Swiper>
      ) : (
        <Swiper
          containerStyle={{
            backgroundColor: 'black',
            width: Dimensions.get( 'window' ).width,
          }}
          activeDotColor={Colors.tintColor}
          buttonWrapperStyle={styles.buttonWrappe}
          height={calHeight.height}
          loop={false}
          nextButton={<Text style={styles.nextButton}>›</Text>}
          paginationStyle={styles.pagination}
          prevButton={<Text style={styles.prevButton}>‹</Text>}
          showsButtons={Platform.OS === 'android' ? true : false}
          loadMinimal={true}
          loadMinimalSize={1}
          removeClippedSubviews={false}
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
                backgroundColor: 'transparent',
                height: calHeight.height,
                width: width,
              }}
            />
          </View>
          {this.props.hasVideo ? (
            <View style={styles.slideVideo}>
              <WebView
                source={{
                  uri: this.videoLink(),
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
          ) : (
            <View style={styles.slideImage}>
              <Image
                resizeMode="cover"
                source={{
                  uri: object.getLastByKey( {
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
          )}
        </Swiper>
      )
    }
  }
}

export default Slider
