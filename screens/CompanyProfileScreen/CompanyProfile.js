import React from 'react'
import { StyleSheet, View } from 'react-native'
import PropTypes from 'prop-types'

import { CardContentImage } from '@components'

const styles = StyleSheet.create( {
  companyProfileSection: {
    borderBottomWidth: 1,
    borderColor: '#ddd',
  },
  container: {
    backgroundColor: '#fff',
    flexDirection: 'column',
    paddingTop: 0,
  },
} )

const CompanyProfileScreen = ( {
  companyProfile: { description, imgUrl, title },
} ) =>
  <View style={styles.container}>
    <View
      key={`container-company-${ title }`}
      style={styles.companyProfileSection}
    >
      <CardContentImage
        description={description}
        key={title}
        title={title}
        url={imgUrl}
        limitLine={false}
      />
    </View>
  </View>

CompanyProfileScreen.propTypes = {
  companyProfile: PropTypes.shape( {
    description: PropTypes.string.isRequired,
    imgUrl: PropTypes.string,
    title: PropTypes.string.isRequired,
  } ),
}

export default CompanyProfileScreen
