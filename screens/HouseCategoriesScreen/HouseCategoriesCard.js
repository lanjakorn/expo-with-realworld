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

  async componentWillMount() {
    await this.props.initCaseStudiesScreen()
    await this.props.initSolutionsScreen()
  }

  shouldComponentUpdate( nextProps ) {
    return nextProps.isFetching !== this.props.isFetching ? true : false
  }

  onPressContactUs = () => {
    this.props.navigation.navigate( 'contactUs' )
  }

  onPressCategoriesSolutionSelect = category => {
    console.log( category )
  }

  onPressCaseStudySelect = caseStudy => {
    console.log( caseStudy )
  }

  rendersolutions = () => {
    const { solutions } = this.props
    return Object.keys( solutions ).map( e =>
      <TouchableOpacity
        key={`touch-${ e }`}
        onPress={() => this.onPressCategoriesSolutionSelect( e )}
      >
        <CardContent
          description={solutions[ e ].description}
          key={e}
          title={solutions[ e ].title}
        />
      </TouchableOpacity>
    )
  }

  renderCaseStudies = () => {
    const { caseStudies } = this.props
    return Object.keys( caseStudies ).map( e =>
      <TouchableOpacity
        key={`touch-${ e }`}
        onPress={() => this.onPressCaseStudySelect( e )}
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
      </TouchableOpacity>
    )
  }

  render() {
    const {
      isFetching,
      houseCategories: { description, title, urls },
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
        {this.rendersolutions()}
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
  caseStudies: caseStudiesSelectors.caseStudiesByIdSelector( state ),
  currentHouseCategory: houseCategoriesSelectors.currentHouseCategoriesSelector(
    state
  ),
  houseCategories: houseCategoriesSelectors.houseCategoriesSelector( state ),
  isFetching: houseCategoriesSelectors.isFetchingSelector( state ),
  solutions: solutionsSelectors.solutionsByIdSelector( state ),
} )

export default connect( mapStateToProps, combineActions() )( HouseCategoriesCard )
