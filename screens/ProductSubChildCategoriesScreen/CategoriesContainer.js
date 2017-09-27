import { compose, onlyUpdateForKeys, pure, withHandlers } from 'recompose'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { ga } from 'services'
import { withPreloader } from 'hocs'

import {
  actions as productCategoriesAction,
  selectors as productCategoriesSelectors,
} from 'modules/ProductCategories'
import { actions as faqsAction, selectors as faqsSelectors } from 'modules/Faqs'

import CategoriesWithFaqs from './CategoriesWithFaqs'

const { setCurrentCategories } = productCategoriesAction
const { getFaqsByProductCategory } = faqsAction

const mapDispatchToProps = dispatch => ( {
  actions: bindActionCreators(
    {
      getFaqsByProductCategory,
      setCurrentCategories,
    },
    dispatch
  ),
} )

const mapStateToProps = state => ( {
  isFetching: faqsSelectors.isFetchingSelector( state ),
  categories: productCategoriesSelectors.subChildCategoriesNameSelector( state ),
  faqs: faqsSelectors.faqOfProductCategorySelector( state ),
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
    onPressFaq: ( { navigation } ) => () =>
      navigation.navigate( 'faq', {
        module: 'productCategories',
        prevScreen: 'productCategorisScreen',
      } ),
    faqOnChange: () => question => {
      ga.trackEvent( {
        eventCategory: 'faqs',
        eventAction: 'select faq of product category (MFP)',
        eventLabel: question,
      } )
    },
  } ),
  onlyUpdateForKeys( [ 'isFetching', 'faqs' ] ),
  withPreloader,
  pure
)( CategoriesWithFaqs )
