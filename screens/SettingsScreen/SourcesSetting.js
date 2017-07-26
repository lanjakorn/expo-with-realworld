import React, { Component } from 'react'
import { Colors } from 'constants'

import { ScrollView, StyleSheet, Text, View } from 'react-native'
import { FontAwesome } from '@expo/vector-icons'
import { Button, Icon } from 'react-native-elements'
import { NoItemComponent, Search } from '@components'

class SourcesSetting extends Component {
  static navigationOptions = ( { navigation } ) => {
    return {
      header: (
        <View style={{ backgroundColor: Colors.tintColor }}>
          <View style={{ marginTop: 24, height: 40, flexDirection: 'row' }}>
            <FontAwesome
              name={'cog'}
              size={24}
              style={{ paddingTop: 5, paddingLeft: 3 }}
              color={'white'}
              onPress={() => {
                navigation.goBack( null )
              }}
            />
            <Search navigation={navigation} />
          </View>
        </View>
      ),
    }
  }

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
