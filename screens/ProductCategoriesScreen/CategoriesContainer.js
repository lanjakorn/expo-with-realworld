import { compose, pure, withHandlers } from 'recompose'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { ga } from 'services'

import {
  actions as CategoriesAction,
  selectors,
} from 'modules/ProductCategories'

import Categories from './Categories'

const { setCurrentCategories } = CategoriesAction
const mapDispatchToProps = dispatch => ( {
  actions: bindActionCreators(
    {
      setCurrentCategories,
    },
    dispatch
  ),
} )

const mapStateToProps = state => ( {
  categories: selectors.categoriesNameSelector( state ),
  isFetching: selectors.isFetchingSelector( state ),
} )

export default compose(
  connect( mapStateToProps, mapDispatchToProps ),
  withHandlers( {
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
  } ),
  pure
)( Categories )
