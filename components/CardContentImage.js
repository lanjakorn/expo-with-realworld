import React from 'react'
import { Dimensions, Image, StyleSheet, Text, View } from 'react-native'
import { Colors } from 'constants'

const { width, height } = Dimensions.get( 'window' )

const styles = StyleSheet.create( {
  container: {
    backgroundColor: 'transparent',
    borderBottomWidth: 1,
    borderColor: '#ddd',
    flexDirection: 'column',
    minWidth: 12,
    paddingBottom: 30,
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 30,
  },
  headerText: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  contentText: {
    color: Colors.textDescription,
    fontSize: 13,
  },
  slideImage: {
    alignItems: 'center',
    backgroundColor: '#9DD6EB',
    flex: 1,
    justifyContent: 'center',
  },
} )

const CardContentImage = ( { description, title, url } ) => {
  console.log( url )
  return (
    <View style={styles.container}>
      <View style={styles.slideImage}>
        <Image
          resizeMode="cover"
          source={{ url: url }}
          style={{
            height: height * 0.3,
            width: width * 0.9 + 10,
          }}
        />
      </View>
      <View
        style={{
          flexDirection: 'row',
          marginTop: 16.5,
        }}
      >
        <Text style={styles.headerText}>
          {title}
        </Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          marginTop: 14,
        }}
      >
        <Text style={styles.contentText}>
          {description}
        </Text>
      </View>
    </View>
  )
}

export default CardContentImage
