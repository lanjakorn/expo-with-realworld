import React from 'react'
import { View } from 'react-native'
import Spinner from 'react-native-loading-spinner-overlay'

const PreLoader = () =>
  <View style={{ flex: 1 }}>
    <Spinner visible={true} />
  </View>

export default PreLoader
