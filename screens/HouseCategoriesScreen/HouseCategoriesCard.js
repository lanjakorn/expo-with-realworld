import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  actions as houseCategoriesActions,
  selectors as houseCategoriesSelectors,
} from 'modules/HouseCategories'

import {
  actions as caseStudiesActions,
  selectors as caseStudiesSelectors,
} from 'modules/CaseStudies'

import {
  actions as solutionsActions,
  selectors as solutionsSelectors,
} from 'modules/Solutions'

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

import styles from './HouseCategoriesCardStyle'

class HouseCategoriesCard extends Component {
  constructor( props ) {
    super( props )
  }

  // async componentWillMount() {
  //   await this.props.initCaseStudiesScreen()
  //   await this.props.initSolutionsScreen()
  // }

  shouldComponentUpdate( nextProps ) {
    return nextProps.isFetching !== this.props.isFetching ? true : false
  }

  onPressContactUs = () => {
    this.props.navigation.navigate( 'contactUs' )
  }

  onPressSolutionSelect = ( key, value ) => {
    this.props.setCurrentSolutions( key )
    this.props.navigation.navigate( 'solution', { solution: value } )
  }

  // onPressCaseStudySelect = caseStudy => {
  //   console.log( caseStudy )
  // }

  renderSolutions = () => {
    const { solutions } = this.props
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
          onPress={() => this.onPressSolutionSelect( e, solutions[ e ].title )}
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

  renderCaseStudies = () => {
    const { caseStudies } = this.props
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

  render() {
    const {
      isFetching,
      houseCategory: { description, title, urls },
    } = this.props

    return !isFetching
      ? <View style={styles.container}>
        <HeaderTitle
          buttonOnPress={this.onPressContactUs}
          buttontitle={'Contact Us'}
          containerstyle={styles.title}
          textTitle={title}
        />
        <View style={styles.thumbnailView}>
          {<Slider urls={urls} />}
        </View>
        <TextDescriptionCard
          containerstyle={styles.detailsView}
          title={description}
        />
        <HeaderSection
          containerstyle={styles.solution}
          textTitle={'Solution'}
        />
        {this.renderSolutions()}
        <HeaderSection
          containerstyle={styles.caseStudy}
          textTitle={'Case Study'}
        />
        {this.renderCaseStudies()}
      </View>
      : <Spinner visible={true} />
  }
}

HouseCategoriesCard.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string,
  offer: PropTypes.object,
  reviewCount: PropTypes.number,
  reviewScore: PropTypes.number,
}

HouseCategoriesCard.defaultProps = {
  reviewCount: 0,
}

const combineActions = () => ( {
  ...caseStudiesActions,
  ...houseCategoriesActions,
  ...solutionsActions,
} )

const mapStateToProps = state => ( {
  caseStudies: houseCategoriesSelectors.caseStudyOfHouseCategorySelector( state ),
  currentHouseCategory: houseCategoriesSelectors.currentHouseCategorySelector(
    state
  ),
  houseCategory: houseCategoriesSelectors.houseCategorySelector( state ),
  isFetching: houseCategoriesSelectors.isFetchingCaseStudiesAndSolutionsSelector(
    state
  ),
  solutions: houseCategoriesSelectors.solutionOfHouseCategorySelector( state ),
} )

export default connect( mapStateToProps, combineActions() )( HouseCategoriesCard )
