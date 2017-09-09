import React from 'react'
import { View } from 'react-native'
import PropTypes from 'prop-types'

import { HeaderTitle, Slider, TextDescriptionCard } from '@components'
import styles from './ServiceDetailStyle'

const ServiceDetail = ( {
  navigation,
  service: { description, title, urls },
} ) => {
  const onPressContactUs = () => {
    navigation.navigate( 'contactUs' )
  }

  return (
    <View style={styles.container}>
      <HeaderTitle
        buttonOnPress={onPressContactUs}
        buttontitle={'Contact Us'}
        containerstyle={styles.title}
        textTitle={title}
      />
      <View style={styles.thumbnailView}>
        {<Slider urls={urls} />}
      </View>
      <TextDescriptionCard
        containerstyle={styles.detailsView}
        textStyle={{ fontWeight: '500' }}
        title={description}
      />
    </View>
  )
}

ServiceDetail.propTypes = {
  service: PropTypes.shape( {
    description: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    urls: PropTypes.object.isRequired,
  } ),
  navigation: PropTypes.object.isRequired,
}

export default ServiceDetail
