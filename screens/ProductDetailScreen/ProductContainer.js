import { compose, mapProps, pure, withHandlers } from 'recompose'
import { connect } from 'react-redux'
import { ga } from 'services'
import { nav } from 'utilities'

import { selectors as faqsSelectors } from 'modules/Faqs'
import { selectors as productsSelectors } from 'modules/Products'
import { selectors as settingsSelectors } from 'modules/Settings'

import Product from './Product'

const mapStateToProps = state => ( {
  faqsOfProductFromProductCategory: productsSelectors.faqOfProductFromProductCategorySelector(
    state
  ),
  faqsOfProductFromSolutionCategory: productsSelectors.faqOfProductFromSolutionCategorySelector(
    state
  ),
  isFetchingFaqs: faqsSelectors.isFetchingSelector( state ),
  productOfProductCategory: productsSelectors.productOfProductCategorySelector(
    state
  ),
  productOfSolutionCategory: productsSelectors.productOfSolutionCategorySelector(
    state
  ),
  words: settingsSelectors.getWordsByLangSelector( state ),
} )

export default compose(
  connect( mapStateToProps ),
  mapProps( props => {
    const {
      faqsOfProductFromProductCategory,
      faqsOfProductFromSolutionCategory,
      navigation,
      productOfProductCategory,
      productOfSolutionCategory,
    } = props

    const strategy = () => {
      switch ( nav.getNavigationParam( navigation, 'module' ) ) {
      case 'productCategories':
        return {
          faqs: faqsOfProductFromProductCategory,
          product: productOfProductCategory,
        }
      case 'solutionCategoris':
        return {
          faqs: faqsOfProductFromSolutionCategory,
          product: productOfSolutionCategory,
        }
      default:
        break
      }
    }

    return {
      ...props,
      ...strategy(),
    }
  } ),
  withHandlers( {
    onPressContact: ( { navigation } ) => () => {
      navigation.navigate( 'contact', {
        module: nav.getNavigationParam( navigation, 'module' ),
      } )
    },
    onPressContactUs: ( { navigation } ) => () => {
      navigation.navigate( 'contactUs' )
    },
    onPressFaq: ( { navigation } ) => () => {
      navigation.navigate( 'faq' )
    },
    onPressFeature: ( { navigation } ) => index => {
      navigation.navigate( 'feature', {
        index,
        module: nav.getNavigationParam( navigation, 'module' ),
      } )
    },
    onPressSelectChildCategory: ( { actions, navigation } ) => category => {
      ga.trackEvent( {
        eventCategory: 'products',
        eventAction: 'select category of products',
        eventLabel: category,
      } )
      actions.setCurrentCategories( category, 0 )
      navigation.navigate( 'productChildCategories', {
        category: category,
      } )
    },
    faqOnChange: () => question => {
      ga.trackEvent( {
        eventCategory: 'faqs',
        eventAction: 'select faq of product',
        eventLabel: question,
      } )
    },
  } ),
  pure
)( Product )
