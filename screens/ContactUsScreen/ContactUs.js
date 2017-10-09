import React from 'react'
import { Dimensions, ScrollView, Text, View } from 'react-native'
import { Icon } from 'react-native-elements'
import { MapView } from 'expo'
import PropTypes from 'prop-types'
import Colors from 'constants/Colors'

import styles from './ContactUsStyle'

const { width } = Dimensions.get( 'window' )

//TODO: move to shared component then declare name is "renderTextArray"
const ContactUs = ( {
  info,
  contactUs: { latitude, latitudeDelta, longitude, longitudeDelta, titleMarker },
} ) => {
  const renderDescriptions = array =>
    array.map( e => (
      <View
        key={e}
        style={{
          flexDirection: 'row',
          width: width * 0.8 - 15,
        }}
      >
        <Text>{e}</Text>
      </View>
    ) )

  const renderInfo = () => (
    <View style={styles.infoContainer}>
      <View style={styles.infoItemsBox}>
        {info.map( ( { icon, title, descriptions }, i ) => {
          return (
            <View key={i} style={styles.infoItemBox}>
              <Icon
                name={icon.name}
                type={icon.type}
                color={Colors.tintColor}
                containerStyle={styles.iconContainer}
              />
              <View style={styles.infoContentBox}>
                <Text style={styles.infoContentTitle}>{title}</Text>
                {renderDescriptions( descriptions )}
              </View>
            </View>
          )
        } )}
      </View>
    </View>
  )

  return (
    <ScrollView>
      <View style={styles.screenContainer}>
        <View style={styles.mapContaininer}>
          <MapView
            style={styles.mapView}
            region={{ latitude, longitude, latitudeDelta, longitudeDelta }}
          >
            <MapView.Marker
              title={titleMarker}
              coordinate={{ latitude, longitude }}
            />
          </MapView>
          {renderInfo()}
        </View>
      </View>
    </ScrollView>
  )
}

ContactUs.propTypes = {
  contactUs: PropTypes.shape( {
    latitude: PropTypes.number.isRequired,
    latitudeDelta: PropTypes.number.isRequired,
    longitude: PropTypes.number.isRequired,
    longitudeDelta: PropTypes.number.isRequired,
    titleMarker: PropTypes.string.isRequired,
  } ),
  info: PropTypes.array.isRequired,
}

export default ContactUs
