import { compose, pure, withHandlers } from 'recompose'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { ga } from 'services'

import {
  actions as CategoriesAction,
  selectors,
} from 'modules/ProductCategories'
import Categories from './Categories'
import { actions as faqsAction, selectors as faqsSelectors } from 'modules/Faqs'

const { selectChildCategory } = CategoriesAction
const { getFaqsByProductCategory } = faqsAction

const mapDispatchToProps = dispatch => ( {
  actions: bindActionCreators(
    {
      getFaqsByProductCategory,
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
      actions.getFaqsByProductCategory( childCategory )
    },
  } ),
  pure
)( Categories )
