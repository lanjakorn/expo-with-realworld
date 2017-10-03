import React from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'
import { Video as ExpoVideo } from 'expo'
import VideoPlayer from '@expo/videoplayer'
import { Ionicons } from '@expo/vector-icons'
import PropTypes from 'prop-types'

import { Colors } from 'constants'

const styles = StyleSheet.create( {
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
} )

const Video = ( { uri } ) => {
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
            isLooping: true,
            isMuted: true,
            repeat: true,
            shouldPlay: true,
            resizeMode: ExpoVideo.RESIZE_MODE_CONTAIN,
            source: {
              uri,
            },
          }}
          playIcon={icon( 'ios-play-outline' )}
          pauseIcon={icon( 'ios-pause-outline' )}
          fullscreenEnterIcon={icon( 'ios-expand-outline', 0 )}
          fullscreenExitIcon={icon( 'ios-contract-outline', 0 )}
          textStyle={{
            color: Colors.tintColor,
            fontSize: 12,
          }}
          switchToLandscape={e => console.log( e )}
          switchToPortrait={e => console.log( e )}
          playFromPositionMillis={0}
        />
      </ScrollView>
    </View>
  )
}

Video.propTypes = {
  uri: PropTypes.string.isRequired,
}

export default Video
