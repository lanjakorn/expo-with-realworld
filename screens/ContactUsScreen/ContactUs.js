import React from 'react'
import { ScrollView, Text, View } from 'react-native'
import { Icon } from 'react-native-elements'
import { MapView } from 'expo'
import PropTypes from 'prop-types'
import Colors from 'constants/Colors'

import styles from './ContactUsStyle'

const ContactUs = ( {
  info,
  contactUs: { latitude, latitudeDelta, longitude, longitudeDelta, titleMarker },
} ) => {
  const renderInfo = () =>
    <View style={styles.infoContainer}>
      <View style={styles.infoItemsBox}>
        {info.map( ( { icon, title, description }, i ) => {
          return (
            <View key={i} style={styles.infoItemBox}>
              <Icon
                name={icon.name}
                type={icon.type}
                color={Colors.tintColor}
                containerStyle={styles.iconContainer}
              />
              <View style={styles.infoContentBox}>
                <Text style={styles.infoContentTitle}>
                  {title}
                </Text>
                <Text>
                  {description}
                </Text>
              </View>
            </View>
          )
        } )}
      </View>
    </View>

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
