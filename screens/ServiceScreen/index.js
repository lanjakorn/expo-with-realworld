import React, { Component } from 'react'
import { Colors } from 'constants'

import { View, StyleSheet } from 'react-native'
import { Search } from '@components'
import ServiceList from './ServiceListContainer'

const styles = StyleSheet.create( {
  container: {
    marginTop: 15,
  },
} )

class ServicesScreen extends Component {
  static navigationOptions = ( { navigation } ) => {
    return {
      header: (
        <View style={{ backgroundColor: Colors.tintColor }}>
          <View style={{ marginTop: 24, height: 40 }}>
            <Search navigation={navigation} navOnCancel={'serviceห'} />
          </View>
        </View>
      ),
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <ServiceList navigation={this.props.navigation} />
      </View>
    )
  }
}

export default ServicesScreen
