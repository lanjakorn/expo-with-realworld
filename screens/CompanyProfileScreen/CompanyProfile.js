import React from 'react'
import {
  Text,
  Dimensions,
  StyleSheet,
  View,
  WebView,
  Platform,
} from 'react-native'
import { Video } from 'expo'
import VideoPlayer from './Video'
import PropTypes from 'prop-types'
import { object, string, url } from 'utilities'
import { Colors } from 'constants'

const { width, height } = Dimensions.get( 'window' )

const styles = StyleSheet.create( {
  companyProfileSection: {
    borderBottomWidth: 1,
    borderColor: '#ddd',
  },
  container: {
    backgroundColor: '#fff',
    flexDirection: 'column',
    padding: 0,
    // width: width,
  },
  containerStyle: {
    backgroundColor: 'transparent',
    flexDirection: 'column',
    minWidth: 12,
    paddingBottom: 30,
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 30,
  },
  slideVideo: {
    // alignItems: 'center',
    backgroundColor: 'black',
    flex: 1,
    justifyContent: 'flex-start',
    width: width * 1,
  },
  rowDescription: {
    flexDirection: 'row',
  },
  descriptionText: {
    fontSize: 13,
    lineHeight: 20,
    textAlign: 'justify',
    color: Colors.textDescription,
  },
  rowTitle: {
    flexDirection: 'row',
    marginBottom: 14,
  },
  titleText: {
    fontSize: 14,
    fontWeight: 'bold',
  },
} )

const CompanyProfileScreen = ( {
  companyProfile: { description, urls, title },
} ) => {
  const videoId = () => {
    const video = object.getFirstByKey( {
      item: urls,
      key: 'videos',
    } )
    return url.getYoutubeId( video )
  }

  return (
    <View style={styles.container}>
      <VideoPlayer />
      <View style={styles.containerStyle}>
        <View style={styles.rowTitle}>
          <Text style={styles.titleText}>{title}</Text>
        </View>
        <View style={styles.rowDescription}>
          <Text style={styles.descriptionText}>{description}</Text>
        </View>
      </View>
    </View>
  )
}
CompanyProfileScreen.propTypes = {
  companyProfile: PropTypes.shape( {
    description: PropTypes.string.isRequired,
    imgUrl: PropTypes.string,
    title: PropTypes.string.isRequired,
  } ),
}

export default CompanyProfileScreen
