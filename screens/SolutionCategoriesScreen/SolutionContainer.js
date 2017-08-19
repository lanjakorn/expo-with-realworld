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

import {
  actions as solutionCategoriesActions,
  selectors as solutionCategoriesSelectors,
} from 'modules/SolutionCategories'

import { actions as productsAction, selectors } from 'modules/Products'

import PropTypes from 'prop-types'

import { object } from 'utilities'
import { Dimensions, Image, Text, TouchableOpacity, View } from 'react-native'
import Colors from 'constants/Colors'
import { Icon } from 'react-native-elements'
import Spinner from 'react-native-loading-spinner-overlay'
import {
  ButtonRadiusOutlined,
  Card,
  CardSection,
  CardContent,
  CardContentImage,
  HeaderButtonSection,
  HeaderSection,
  HeaderTitle,
  Slider,
  TextDescriptionCard,
} from '@components'

import styles from './SolutionContainerStyle'
import Questions from './Questions'
import Products from './Products'
import Price from './Price'

const { width, height } = Dimensions.get( 'window' )

class Solution extends Component {
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

  onPressSolutionSelect = ( key, value ) => {
    this.props.setCurrentSolutions( key )
    this.props.navigation.navigate( 'solution', { solution: value } )
  }

  onPressContactUs = () => {
    this.props.navigation.navigate( 'contactUs' )
  }

  onPressContact = () => {
    this.props.navigation.navigate( 'contact' )
  }

  onPressSelectProduct = id => {
    this.props.setCurrentProduct( 'Prokey1' )
    // this.props.initFaqsScreen()
    this.props.navigation.navigate( 'productDetail', 'Prokey1' )
  }

  render() {
    const {
      isFetching,
      faqs,
      solutionCategory: { description, title, urls },
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
        <View style={styles.more}>
          <ButtonRadiusOutlined
            onPress={this.onPressContact}
            style={{ marginRight: 5 }}
            title={'Contact'}
          />
          <ButtonRadiusOutlined
            onPress={this.onPressContactUs}
            title={'Share'}
          />
        </View>
        <HeaderSection
          containerstyle={styles.products}
          textTitle={'Products'}
        />
        <View>
          <Products onPressSelectProduct={this.onPressSelectProduct} />
        </View>
        <HeaderSection containerstyle={styles.price} textTitle={'Price'} />
        <View
          style={{
            padding: 30,
          }}
        >
          <Price
            endPrice={'45,000 ฿'}
            endPriceLable={'ราคาสูงสุด'}
            startPrice={'36,000 ฿'}
            startPriceLable={'ราคาต่ำสุด'}
          />
        </View>
        <HeaderButtonSection
          buttonOnPress={this.onPressContactUs}
          buttontitle={'Faq'}
          containerstyle={styles.faq}
          textTitle={'FAQ'}
        />
        <View style={styles.questions}>
          <Questions questions={faqs} />
        </View>
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
  ...caseStudiesActions,
  ...houseCategoriesActions,
  ...solutionsActions,
  ...productsAction,
} )

const mapStateToProps = state => ( {
  faqs: solutionCategoriesSelectors.faqOfSolutionCategorySelector( state ),
  caseStudies: caseStudiesSelectors.caseStudiesByIdSelector( state ),
  currentSolutionCategory: houseCategoriesSelectors.currentHouseCategorySelector(
    state
  ),
  solutionCategory: solutionCategoriesSelectors.solutionCategySelector( state ),
  isFetching: houseCategoriesSelectors.isFetchingSelector( state ),
  solutions: solutionsSelectors.solutionsByIdSelector( state ),
} )

export default connect( mapStateToProps, combineActions() )( Solution )
