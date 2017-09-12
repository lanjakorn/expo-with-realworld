import React from 'react'
import { View } from 'react-native'
import Spinner from 'react-native-loading-spinner-overlay'
import PropTypes from 'prop-types'

import {
  HeaderSection,
  HeaderTitle,
  Slider,
  TextDescriptionCard,
} from '@components'

import CaseStudies from './CaseStudies'
import Solutions from './Solutions'
import styles from './HouseCategoriesStyle'

const HouseCategories = ( {
  caseStudies,
  isFetching,
  solutions,
  onPressContactUs,
  onPressSolutionSelect,
  houseCategory: { description, title, urls },
} ) =>
  !isFetching
    ? <View style={styles.container}>
      <HeaderTitle
        buttonOnPress={onPressContactUs}
        buttontitle={'Contact Us'}
        containerstyle={styles.title}
        textTitle={title}
      />
      <View style={styles.thumbnailView}>
        {<Slider urls={urls} hasVideo />}
      </View>
      <TextDescriptionCard
        containerstyle={styles.detailsView}
        title={description}
      />
      <HeaderSection
        containerstyle={styles.solution}
        textTitle={'Solution'}
      />
      <Solutions
        solutions={solutions}
        onPressSolutionSelect={onPressSolutionSelect}
      />
      <HeaderSection
        containerstyle={styles.caseStudy}
        textTitle={'Case Study'}
      />
      <CaseStudies caseStudies={caseStudies} />
    </View>
    : <Spinner visible={true} />

HouseCategories.propTypes = {
  houseCategory: PropTypes.shape( {
    description: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    urls: PropTypes.object.isRequired,
  } ),
  caseStudies: PropTypes.object.isRequired,
  isFetching: PropTypes.bool.isRequired,
  navigation: PropTypes.object.isRequired,
  onPressContactUs: PropTypes.func.isRequired,
  onPressSolutionSelect: PropTypes.func.isRequired,
  solutions: PropTypes.object.isRequired,
}

export default HouseCategories
