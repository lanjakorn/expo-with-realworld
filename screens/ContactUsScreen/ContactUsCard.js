import React, { Component } from 'react'
import { connect } from 'react-redux'

import { Dimensions, ScrollView, StyleSheet, Text, View } from 'react-native'

import {
  actions as contactUsActions,
  selectors as contactUsSelectors,
} from 'modules/ContactUs'

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
    flex: 1.5,
    flexDirection: 'row',
    backgroundColor: 'white',
    paddingTop: 30,
    paddingLeft: 10,
    paddingRight: 20,
  },
  infoItemsBox: { flex: 1 },
  infoItemBox: {
    flexDirection: 'row',
    alignItems: 'flex-start',
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

class ContactUsScreen extends Component {
  renderInfo() {
    const { officeAddress, callCenter, hotLine } = this.props.contactUs

    const info = [
      {
        icon: { type: 'material', name: 'location-on' },
        title: 'Head Office สำนักงานใหญ่ (อ่อนนุช)',
        description: officeAddress,
      },
      {
        icon: { type: 'material', name: 'phone-in-talk' },
        title: 'ศูนย์บริการแจ้งซ่อม (Call Center)',
        description: callCenter,
      },
      {
        icon: { type: 'material', name: 'phone-in-talk' },
        title: 'ศูนย์รับร้องเรียน',
        description: hotLine,
      },
    ]

    const {
      iconContainer,
      infoContainer,
      infoContentBox,
      infoContentTitle,
      infoItemBox,
      infoItemsBox,
    } = styles
    return (
      <View style={infoContainer}>
        <View style={infoItemsBox}>
          {info.map( ( { icon, title, description }, i ) => {
            return (
              <View key={i} style={infoItemBox}>
                <Icon
                  name={icon.name}
                  type={icon.type}
                  color={Colors.tintColor}
                  containerStyle={iconContainer}
                />
                <View style={infoContentBox}>
                  <Text style={infoContentTitle}>
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
    )
  }
  render() {
    const {
      titleMarker,
      latitude,
      longitude,
      latitudeDelta,
      longitudeDelta,
    } = this.props.contactUs
    const { screenContainer, mapContaininer, mapView } = styles
    return (
      <ScrollView>
        <View style={screenContainer}>
          <View style={mapContaininer}>
            <MapView
              style={mapView}
              region={{ latitude, longitude, latitudeDelta, longitudeDelta }}
            >
              <MapView.Marker
                title={titleMarker}
                coordinate={{ latitude, longitude }}
              />
            </MapView>
            {this.renderInfo()}
          </View>
        </View>
      </ScrollView>
    )
  }
}

const combineActions = () => ( {
  ...contactUsActions,
} )

const mapStateToProps = state => ( {
  contactUs: contactUsSelectors.contactUsSelector( state ),
} )

export default connect( mapStateToProps, combineActions() )( ContactUsScreen )
