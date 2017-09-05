import React from 'react'
import PropTypes from 'prop-types'
import { Dimensions, ScrollView, StyleSheet, Text, View } from 'react-native'

import { MapView } from 'expo'
import { Icon } from 'react-native-elements'
import Colors from 'constants/Colors'

const { height } = Dimensions.get( 'window' )
const styles = StyleSheet.create( {
  screenContainer: {
    flex: 1,
  },
  mapContaininer: {
    flex: 1,
  },
  mapView: {
    alignSelf: 'stretch',
    height: height * 0.4 - 50,
  },
  infoContainer: {
    backgroundColor: 'white',
    flex: 1.5,
    flexDirection: 'row',
    paddingLeft: 10,
    paddingRight: 20,
    paddingTop: 30,
  },
  infoItemsBox: { flex: 1 },
  infoItemBox: {
    alignItems: 'flex-start',
    flexDirection: 'row',
    paddingBottom: 25,
  },
  iconContainer: {
    borderColor: '#888',
    borderRadius: 50,
    borderWidth: 2,
    marginLeft: 5,
    marginRight: 15,
    padding: 8,
  },
  infoContentBox: {
    flex: 1,
  },
  infoContentTitle: {
    fontWeight: 'bold',
  },
} )

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
