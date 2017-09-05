import React, { Component } from 'react'
import { connect } from 'react-redux'
import { actions as faqsAction } from 'modules/Faqs'

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

import { actions as solutionCategoriesActions } from 'modules/SolutionCategories'

import { actions as productsActions } from 'modules/Products'

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

import styles from './SolutionContainerStyle'

class Solution extends Component {
  constructor( props ) {
    super( props )
  }

  async componentWillMount() {
    // await this.props.initCaseStudiesScreen()
    //await this.props.initSolutionCategoriesScreen()
  }

  shouldComponentUpdate( nextProps ) {
    return nextProps.isFetching !== this.props.isFetching ? true : false
  }

  onPressContactUs = () => {
    this.props.navigation.navigate( 'contactUs' )
  }

  onPressSolutionCategorySelect = ( key, value ) => {
    this.props.setCurrentSolutionCategory( key )
    this.props.getProductsBySolutionCategory( key )
    this.props.getFaqsBySolutionCategory( key )

    this.props.navigation.navigate( 'solutionCategories', { category: value } )
  }

  renderSolutionCategories = () => {
    const { solutionCategories } = this.props
    return Object.keys( solutionCategories ).map( e =>
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
            this.onPressSolutionCategorySelect( e, solutionCategories[ e ].title )}
        >
          <CardContent
            description={solutionCategories[ e ].description}
            key={e}
            title={solutionCategories[ e ].title}
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
    const { isFetching, solution: { description, title, urls } } = this.props
    return !isFetching
      ? <View style={styles.container}>
        <HeaderTitle
          buttonOnPress={this.onPressContactUs}
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
        {this.renderSolutionCategories()}
        <HeaderSection
          containerstyle={styles.caseStudy}
          textTitle={'Case Study'}
        />
        {this.renderCaseStudies()}
      </View>
      : <Spinner visible={true} />
  }
}

Solution.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string,
  offer: PropTypes.object,
  reviewCount: PropTypes.number,
  reviewScore: PropTypes.number,
}

Solution.defaultProps = {
  reviewCount: 0,
}
const combineActions = () => ( {
  ...faqsAction,
  ...caseStudiesActions,
  ...houseCategoriesActions,
  ...solutionsActions,
  ...solutionCategoriesActions,
  ...productsActions,
} )

const mapStateToProps = state => ( {
  caseStudies: caseStudiesSelectors.caseStudiesByIdSelector( state ),
  currentHouseCategory: houseCategoriesSelectors.currentHouseCategorySelector(
    state
  ),
  isFetching: solutionsSelectors.isFetchingCaseStudiesAndSolutionCategoriesSelector(
    state
  ),
  solution: solutionsSelectors.solutionSelector( state ),
  solutionCategories: solutionsSelectors.solutionCategorOfHouseCategorySelector(
    state
  ),
} )

export default connect( mapStateToProps, combineActions() )( Solution )
