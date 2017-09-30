import React from 'react'
import { ScrollView, View, TouchableHighlight, Text } from 'react-native'
import VideoPlayer from '@expo/videoplayer'
import { Ionicons } from '@expo/vector-icons'
import BaseScreen from './BaseScreen'
import { Video } from 'expo'
import { Colors } from 'constants'

var styles = {
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
}

export default class CustomScreen extends BaseScreen {
  render() {
    const icon = ( name, size = 36 ) => () => (
      <Ionicons
        name={name}
        size={size}
        color={Colors.tintColor}
        style={{ textAlign: 'center' }}
      />
    )
    return (
      <View style={styles.container}>
        <ScrollView style={styles.container}>
          <VideoPlayer
            videoProps={{
              shouldPlay: true,
              resizeMode: Video.RESIZE_MODE_CONTAIN,
              source: {
                uri: 'http://public.ricoh.com.au/media/GlobalVid/Ricoh.mp4',
              },
              isMuted: false,
            }}
            playIcon={icon( 'ios-play-outline' )}
            pauseIcon={icon( 'ios-pause-outline' )}
            fullscreenEnterIcon={icon( 'ios-expand-outline', 0 )}
            fullscreenExitIcon={icon( 'ios-contract-outline', 0 )}
            // trackImage={require( '../assets/track.png' )}
            // thumbImage={require( '../assets/thumb.png' )}
            textStyle={{
              color: Colors.tintColor,
              fontSize: 12,
            }}
            isPortrait={this.state.isPortrait}
            switchToLandscape={e => console.log( e )}
            switchToPortrait={e => console.log( e )}
            playFromPositionMillis={0}
          />
        </ScrollView>
      </View>
    )
  }
}
