import React from 'react'
import { Dimensions, Image, StyleSheet, Text, View } from 'react-native'
import PropTypes from 'prop-types'

const { width, height } = Dimensions.get( 'window' )

const styles = StyleSheet.create( {
  containerStyle: {
    backgroundColor: 'transparent',
    flexDirection: 'column',
    minWidth: 12,
    // paddingBottom: 30,
  },
  rowImage: {
    width: Dimensions.get( 'window' ).width,
    // marginBottom: 24,
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.075)',
    flex: 1,
    justifyContent: 'center',
  },
  image: {
    height: height * 0.3,
    width: width,
  },
} )

const ImageFullScreen = ( { url } ) => {
  return (
    <View style={styles.rowImage}>
      <Image resizeMode="cover" source={{ uri: url }} style={styles.image} />
    </View>
  )
}

ImageFullScreen.propTypes = {
  url: PropTypes.string.isRequired,
}

export default ImageFullScreen
