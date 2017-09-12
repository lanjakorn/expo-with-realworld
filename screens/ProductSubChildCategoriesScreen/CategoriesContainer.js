import { compose, onlyUpdateForKeys, pure, withHandlers } from 'recompose'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { ga } from 'services'

import {
  actions as categoriesAction,
  selectors as categoriesSelectors,
} from 'modules/ProductCategories'

import Categories from './Categories'

const { setCurrentCategories } = categoriesAction
const mapDispatchToProps = dispatch => ( {
  actions: bindActionCreators(
    {
      setCurrentCategories,
    },
    dispatch
  ),
} )

const mapStateToProps = state => ( {
  categories: categoriesSelectors.subChildCategoriesNameSelector( state ),
} )

export default compose(
  connect( mapStateToProps, mapDispatchToProps ),
  withHandlers( {
    onPressSelectProduct: ( { actions, navigation } ) => subChildCategory => {
      ga.trackEvent( {
        eventCategory: 'products',
        eventAction: 'select sub child category of products',
        eventLabel: subChildCategory,
      } )
      actions.setCurrentCategories( subChildCategory, 2 )
      navigation.navigate( 'products', {
        childCategory: subChildCategory,
      } )
    },
  } ),
  onlyUpdateForKeys( [ 'isFetching' ] ),
  pure
)( Categories )
