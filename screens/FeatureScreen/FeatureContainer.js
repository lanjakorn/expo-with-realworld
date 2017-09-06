import { compose, mapProps, onlyUpdateForKeys, pure } from 'recompose'
import { connect } from 'react-redux'
import { nav } from 'utilities'

import { selectors as productsSelectors } from 'modules/Products'
import { selectors as settingsSelectors } from 'modules/Settings'
import Feature from './Feature'

const mapStateToProps = state => ( {
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
      productOfProductCategory,
      productOfSolutionCategory,
      navigation,
    } = props

    const strategy = () => {
      switch ( nav.getNavigationParam( navigation, 'module' ) ) {
      case 'productCategories':
        return {
          product: productOfProductCategory,
        }
      case 'solutionCategoris':
        return {
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
)( Feature )
