import React from 'react'
import { WebView } from 'react-native'

const EShop = () => (
  <WebView
    source={{
      uri: 'http://shop.ricoh.co.th/',
    }}
    startInLoadingState
    scalesPageToFit
    javaScriptEnabled
    style={{ flex: 1 }}
  />
)

export default EShop
