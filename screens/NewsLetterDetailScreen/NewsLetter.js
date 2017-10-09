import React from 'react'
import { WebView } from 'react-native'

const NewsLetter = () => (
  <WebView
    source={{
      uri:
        'https://firebasestorage.googleapis.com/v0/b/test-e5574.appspot.com/o/docs%2FRicoh%20Touch%20ISSUE%201.pdf?alt=media&token=e5d4a232-2454-49e2-ba7c-266776eab41f',
    }}
    javaScriptEnabled={true}
    style={{ flex: 1 }}
  />
)

export default NewsLetter
