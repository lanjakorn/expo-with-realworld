import React, { Component } from 'react'
import { Colors } from 'constants'

import { ScrollView, StyleSheet, Text, View } from 'react-native'
import { FontAwesome } from '@expo/vector-icons'
import { Button, Icon } from 'react-native-elements'
import { NoItemComponent, Search } from '@components'

class SourcesSetting extends Component {
  static navigationOptions = ( { navigation } ) => ( {
    title: 'sources',
    // headerTintColor: Colors.tintColor,
    headerRight: (
      <Button
        raised={true}
        backgroundColor="transparent"
        color="#174BFC"
        title="info"
        onPress={() => {
          navigation.goBack( null )
        }}
      />
    ),
  } )

  render() {
    return (
      <NoItemComponent
        iconName="error"
        infoHeading="Not Implemented"
        infoParagraph="Since this screen is similar to DefaultTab screen. "
      />
    )
  }
}

const styles = StyleSheet.create( {
  container: {
    flex: 1,
    paddingTop: 15,
  },
} )

export default SourcesSetting
