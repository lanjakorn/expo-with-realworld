import React from 'react'
import { StyleSheet, View } from 'react-native'
import {
  CardContentImage,
  ButtonRadiusOutlined,
  CollapsibleFaqs,
  HeaderButtonSection,
  HeaderTitle,
  Slider,
  TextDescriptionCard,
} from '@components'

const styles = StyleSheet.create( {
  container: {
    backgroundColor: '#fff',
    flexDirection: 'column',
    paddingTop: 0,
  },
  thumbnailView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 15,
    // marginTop: 30,
    paddingLeft: 20,
    paddingRight: 20,
  },
  detailsView: {
    marginBottom: 22,
    marginTop: 35,
    paddingLeft: 20,
    paddingRight: 20,
  },
} )

const NewsLetter = ( { newsletter } ) => {
  return (
    <View key={`newsletter-${ newsletter.title }`} style={styles.container}>
      <View style={styles.thumbnailView}>
        <Slider urls={newsletter.urls} all />
      </View>
      <TextDescriptionCard
        containerstyle={styles.detailsView}
        title={newsletter.description}
      />
    </View>
  )
}

export default NewsLetter
