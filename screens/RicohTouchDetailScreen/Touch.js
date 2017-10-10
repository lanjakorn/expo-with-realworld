import React from 'react'
import { WebView } from 'react-native'
import { nav } from 'utilities'

const Touch = ( { navigation } ) => (
  <WebView
    source={{
      uri: nav.getNavigationParam( navigation, 'url' ),
    }}
    javaScriptEnabled={true}
    style={{ flex: 1 }}
  />
)

export default Touch
