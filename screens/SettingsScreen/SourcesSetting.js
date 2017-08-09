import React, { Component } from 'react'
import { Colors } from 'constants'

import { StyleSheet } from 'react-native'
import { Button } from 'react-native-elements'
import { NoItemComponent } from '@components'

class SourcesSetting extends Component {
  static navigationOptions = ( { navigation } ) => ( {
    title: 'sources',
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

const styles = StyleSheet.create( {} )

export default SourcesSetting
