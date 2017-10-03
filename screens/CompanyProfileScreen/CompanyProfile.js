import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import PropTypes from 'prop-types'
import { Colors } from 'constants'
import { object } from 'utilities'

import { Video } from '@components'

const styles = StyleSheet.create( {
  container: {
    backgroundColor: '#fff',
    flexDirection: 'column',
    padding: 0,
  },
  sectionCompanyProfile: {
    backgroundColor: 'transparent',
    flexDirection: 'column',
    minWidth: 12,
    paddingBottom: 30,
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 30,
  },
  rowDescription: {
    flexDirection: 'row',
  },
  descriptionText: {
    color: Colors.textDescription,
    fontSize: 13,
    lineHeight: 20,
    textAlign: 'justify',
  },
  rowTitle: {
    flexDirection: 'row',
    marginBottom: 14,
  },
  titleText: {
    fontSize: 14,
    fontWeight: 'bold',
  },
} )

const CompanyProfile = ( { companyProfile: { description, urls, title } } ) => (
  <View style={styles.container}>
    <Video
      uri={object.getFirstByKey( {
        item: urls,
        key: 'videos',
      } )}
    />
    <View style={styles.sectionCompanyProfile}>
      <View style={styles.rowTitle}>
        <Text style={styles.titleText}>{title}</Text>
      </View>
      <View style={styles.rowDescription}>
        <Text style={styles.descriptionText}>{description}</Text>
      </View>
    </View>
  </View>
)

CompanyProfile.propTypes = {
  companyProfile: PropTypes.shape( {
    description: PropTypes.string.isRequired,
    imgUrl: PropTypes.string,
    title: PropTypes.string.isRequired,
  } ),
}

export default CompanyProfile
