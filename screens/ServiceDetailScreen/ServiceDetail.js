import React from 'react'
import { View } from 'react-native'
import PropTypes from 'prop-types'

import { HeaderTitle, Slider, TextDescriptionCard } from '@components'
import styles from './ServiceDetailStyle'

const ServiceDetail = ( {
  onPressContactUs,
  service: { description, title, urls },
} ) =>
  <View style={styles.container}>
    <HeaderTitle
      buttonOnPress={onPressContactUs}
      buttonTitle={'Contact Us'}
      containerStyle={styles.title}
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

ServiceDetail.propTypes = {
  service: PropTypes.shape( {
    description: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    urls: PropTypes.object.isRequired,
  } ),
  onPressContactUs: PropTypes.func.isRequired,
}

export default ServiceDetail
