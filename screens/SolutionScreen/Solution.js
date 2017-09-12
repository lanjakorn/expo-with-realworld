import React from 'react'
import { TouchableOpacity, View } from 'react-native'
import Spinner from 'react-native-loading-spinner-overlay'
import PropTypes from 'prop-types'
import { object } from 'utilities'

import {
  CardContent,
  CardContentImage,
  HeaderSection,
  HeaderTitle,
  Slider,
  TextDescriptionCard,
} from '@components'

import styles from './SolutionStyle'

const Solution = ( {
  caseStudies,
  isFetching,
  onPressContactUs,
  onPressSolutionCategorySelect,
  solutionCategories,
  solution: { description, title, urls },
} ) => {
  const renderSolutionCategories = () =>
    Object.keys( solutionCategories ).map( e =>
      <View
        key={`container-solution-${ e }`}
        style={{
          borderBottomWidth: 1,
          borderColor: '#ddd',
        }}
      >
        <TouchableOpacity
          key={`touch-${ e }`}
          onPress={() =>
            onPressSolutionCategorySelect( e, solutionCategories[ e ].title )}
        >
          <CardContent
            description={solutionCategories[ e ].description}
            key={e}
            title={solutionCategories[ e ].title}
          />
        </TouchableOpacity>
      </View>
    )

  const renderCaseStudies = () =>
    Object.keys( caseStudies ).map( e =>
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
      <HeaderSection containerstyle={styles.solution} textTitle={'Types'} />
      {renderSolutionCategories()}
      <HeaderSection
        containerstyle={styles.caseStudy}
        textTitle={'Case Study'}
      />
      {renderCaseStudies()}
    </View>
    : <Spinner visible={true} />
}

Solution.propTypes = {
  solution: PropTypes.shape( {
    description: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    urls: PropTypes.object.isRequired,
  } ),
  caseStudies: PropTypes.object.isRequired,
  isFetching: PropTypes.bool.isRequired,
  onPressContactUs: PropTypes.func.isRequired,
  onPressSolutionCategorySelect: PropTypes.func.isRequired,
  solutionCategories: PropTypes.object.isRequired,
}

export default Solution
