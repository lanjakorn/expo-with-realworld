import React from 'react'
import PropTypes from 'prop-types'
import { object } from 'utilities'

import { TouchableOpacity, View } from 'react-native'
import Spinner from 'react-native-loading-spinner-overlay'
import {
  CardContent,
  CardContentImage,
  HeaderSection,
  HeaderTitle,
  Slider,
  TextDescriptionCard,
} from '@components'

import styles from './HouseCategoriesStyle'

const HouseCategories = ( {
  actions: { setCurrentSolutions },
  houseCategory: { description, title, urls },
  caseStudies,
  isFetching,
  navigation,
  solutions,
} ) => {
  const onPressContactUs = () => {
    navigation.navigate( 'contactUs' )
  }

  const onPressSolutionSelect = ( key, value ) => {
    setCurrentSolutions( key )
    navigation.navigate( 'solution', { solution: value } )
  }

  const renderSolutions = () => {
    return Object.keys( solutions ).map( e =>
      <View
        key={`container-solution-${ e }`}
        style={{
          borderBottomWidth: 1,
          borderColor: '#ddd',
        }}
      >
        <TouchableOpacity
          key={`touch-${ e }`}
          onPress={() => onPressSolutionSelect( e, solutions[ e ].title )}
        >
          <CardContent
            description={solutions[ e ].description}
            key={e}
            title={solutions[ e ].title}
          />
        </TouchableOpacity>
      </View>
    )
  }

  const renderCaseStudies = () => {
    return Object.keys( caseStudies ).map( e =>
      <View
        key={`container-case-${ e }`}
        style={{
          borderBottomWidth: 1,
          borderColor: '#ddd',
        }}
      >
        <CardContentImage
          description={caseStudies[ e ].description}
          key={e}
          title={caseStudies[ e ].title}
          url={object.getFirstByKey( {
            item: caseStudies[ e ].urls,
            key: 'imgs',
          } )}
        />
      </View>
    )
  }

  return !isFetching
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
      {renderSolutions()}
      <HeaderSection
        containerstyle={styles.caseStudy}
        textTitle={'Case Study'}
      />
      {renderCaseStudies()}
    </View>
    : <Spinner visible={true} />
}

HouseCategories.propTypes = {
  actions: PropTypes.shape( {
    setCurrentSolutions: PropTypes.func.isRequired,
  } ),
  houseCategory: PropTypes.shape( {
    description: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    urls: PropTypes.object.isRequired,
  } ),
  caseStudies: PropTypes.object.isRequired,
  isFetching: PropTypes.bool.isRequired,
  navigation: PropTypes.object.isRequired,
  solutions: PropTypes.object.isRequired,
}

export default HouseCategories
