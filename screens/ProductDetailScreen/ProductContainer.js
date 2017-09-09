import { compose, mapProps, pure } from 'recompose'
import { connect } from 'react-redux'
import { selectors as faqsSelectors } from 'modules/Faqs'
import { selectors as productsSelectors } from 'modules/Products'
import { selectors as settingsSelectors } from 'modules/Settings'
import { nav } from 'utilities'

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
  pure
)( Product )
