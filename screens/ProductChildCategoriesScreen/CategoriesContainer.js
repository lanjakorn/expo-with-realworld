import { compose, pure, withHandlers } from 'recompose'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { ga } from 'services'

import {
  actions as CategoriesAction,
  selectors,
} from 'modules/ProductCategories'
import Categories from './Categories'

const { selectChildCategory } = CategoriesAction
const mapDispatchToProps = dispatch => ( {
  actions: bindActionCreators(
    {
      selectChildCategory,
    },
    dispatch
  ),
} )

const mapStateToProps = state => ( {
  categories: selectors.childCategoriesNameSelector( state ),
} )

export default compose(
  connect( mapStateToProps, mapDispatchToProps ),
  withHandlers( {
    onPressSelectChildCategory: ( { actions, navigation } ) => childCategory => {
      ga.trackEvent( {
        eventCategory: 'products',
        eventAction: 'select child category of products',
        eventLabel: childCategory,
      } )
      actions.selectChildCategory( childCategory, navigation )
    },
  } ),
  pure
)( Categories )
