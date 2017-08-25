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

import { selectors as settingsSelectors } from 'modules/Settings'

import { selectors as solutionCategoriesSelectors } from 'modules/SolutionCategories'

import { selectors as productsSelectors } from 'modules/Products'

import { actions as productsAction } from 'modules/Products'

import PropTypes from 'prop-types'

import { View } from 'react-native'
import Spinner from 'react-native-loading-spinner-overlay'
import {
  ButtonRadiusOutlined,
  CollapsibleFaqs,
  HeaderButtonSection,
  HeaderSection,
  HeaderTitle,
  Slider,
  TextDescriptionCard,
} from '@components'

import styles from './SolutionContainerStyle'
import Products from './Products'
import Price from './Price'

class Solution extends Component {
  constructor( props ) {
    super( props )
  }

  async componentWillMount() {
    // await this.props.initCaseStudiesScreen()
    // await this.props.initSolutionsScreen()
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

  onPressContact = () => {
    this.props.navigation.navigate( 'contact', { module: 'solutionCategoris' } )
    
  }

  onPressFaq = () => {
    this.props.navigation.navigate( 'faq' )
  }

  onPressSelectProduct = id => {
    this.props.setCurrentProductOfSolutionCategory( id )
    this.props.navigation.navigate( 'productDetail', {
      id,
      module: 'solutionCategoris',
    } )
  }

  render() {
    const {
      isFetching,
      faqs,
      products,
      solutionCategory: { description, title, urls, price: { max, min } },
      words: { maxPrice, minPrice },
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
          {<Slider urls={urls} hasVideo />}
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
          <Products
            products={products}
            onPressSelectProduct={this.onPressSelectProduct}
          />
        </View>
        <HeaderSection containerstyle={styles.price} textTitle={'Price'} />
        <View
          style={{
            padding: 30,
          }}
        >
          <Price
            maxPrice={max}
            maxPriceLable={maxPrice}
            minPrice={min}
            minPriceLable={minPrice}
          />
        </View>
        <HeaderButtonSection
          buttonOnPress={this.onPressFaq}
          buttontitle={'Faq'}
          containerstyle={styles.faq}
          textTitle={'FAQ'}
        />
        <View style={styles.questions}>
          <CollapsibleFaqs faqs={faqs} />
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
  caseStudies: caseStudiesSelectors.caseStudiesByIdSelector( state ),
  currentSolutionCategory: houseCategoriesSelectors.currentHouseCategorySelector(
    state
  ),
  faqs: solutionCategoriesSelectors.faqOfSolutionCategorySelector( state ),
  isFetching: productsSelectors.isFetchingSelector( state ),
  products: productsSelectors.productFilterBySolutionCategorySelector( state ),
  solutionCategory: solutionCategoriesSelectors.solutionCategySelector( state ),
  solutions: solutionsSelectors.solutionsByIdSelector( state ),
  words: settingsSelectors.getWordsByLangSelector( state ),
} )

export default connect( mapStateToProps, combineActions() )( Solution )
