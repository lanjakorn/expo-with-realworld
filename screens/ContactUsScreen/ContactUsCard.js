import React, { Component } from 'react'
import { Platform, ScrollView, StyleSheet, Text, View } from 'react-native'
import { MapView } from 'expo'
import { Icon } from 'react-native-elements'
import Colors from 'constants/Colors'

class ContactUsScreen extends Component {
  state = {
    region: {
      latitude: 13.801961,
      latitudeDelta: 0.004,
      longitude: 100.5751,
      longitudeDelta: 0.004,
    },
    coordinate: {
      latitude: 13.801961,
      longitude: 100.5751,
    },
    titleMarker: 'SellSuki',
    infoItems: [
      {
        icon: { type: 'material', name: 'location-on' },
        title: 'Head Office สำนักงานใหญ่ (อ่อนนุช)',
        content:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
      },
      {
        icon: { type: 'material', name: 'phone-in-talk' },
        title: 'ศูนย์บริการแจ้งซ่อม (Call Center)',
        content:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      },
      {
        icon: { type: 'material', name: 'phone-in-talk' },
        title: 'ศูนย์รับร้องเรียน',
        content: 'Lorem ipsum dolor sit amet',
      },
    ],
  }

  renderInfo() {
    const {
      iconContainer,
      infoContainer,
      infoContentBox,
      infoContentTitle,
      infoItemBox,
      infoItemsBox,
    } = styles
    return (
      <ScrollView>
        <View style={infoContainer}>
          <View style={infoItemsBox}>
            {this.state.infoItems.map( ( info, i ) => {
              return (
                <View key={i} style={infoItemBox}>
                  <Icon
                    name={info.icon.name}
                    type={info.icon.type}
                    color={Colors.tintColor}
                    containerStyle={iconContainer}
                  />
                  <View style={infoContentBox}>
                    <Text style={infoContentTitle}>
                      {info.title}
                    </Text>
                    <Text>
                      {info.content}
                    </Text>
                  </View>
                </View>
              )
            } )}
          </View>
        </View>
      </ScrollView>
    )
  }
  render() {
    const { titleMarker, coordinate, region } = this.state
    const { screenContainer, mapContaininer, mapView } = styles
    return (
      <View style={screenContainer}>
        <View style={mapContaininer}>
          <MapView style={mapView} region={region}>
            <MapView.Marker title={titleMarker} coordinate={coordinate} />
          </MapView>
          {this.renderInfo()}
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create( {
  screenContainer: {
    flex: 1,
  },
  mapContaininer: {
    flex: 1,
  },
  mapView: {
    flex: 1,
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

export default ContactUsScreen
