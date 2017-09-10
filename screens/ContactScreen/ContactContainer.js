import { compose, mapProps, pure } from 'recompose'
import { connect } from 'react-redux'

import { selectors as productsSelectors } from 'modules/Products'
import { nav } from 'utilities'

import Contact from './Contact'

const mapStateToProps = state => ( {
  contactOfProductFromProductCategory: productsSelectors.getFirstContactOfProductFromProductCategorySelector(
    state
  ),
  contactOfProductFromSolutionCategory: productsSelectors.getFirstContactOfProductFromSolutionCategorySelector(
    state
  ),
} )

export default compose(
  connect( mapStateToProps ),
  mapProps( props => {
    const {
      contactOfProductFromProductCategory,
      contactOfProductFromSolutionCategory,
      navigation,
    } = props

    const strategy = () => {
      switch ( nav.getNavigationParam( navigation, 'module' ) ) {
      case 'productCategories':
        return {
          contact: contactOfProductFromProductCategory,
        }
      case 'solutionCategoris':
        return {
          contact: contactOfProductFromSolutionCategory,
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
)( Contact )
