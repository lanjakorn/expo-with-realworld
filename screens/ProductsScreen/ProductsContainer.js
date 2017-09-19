import { compose, lifecycle, pure, withHandlers } from 'recompose'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { ga } from 'services'
import { withPreloader } from 'hocs'

import { actions as faqsAction } from 'modules/Faqs'
import {
  actions as productsAction,
  selectors as productSelectors,
} from 'modules/Products'

import Products from './Products'

const {
  initProductsScreen,
  setCurrentProductOfProductCategory,
} = productsAction
const { getFaqsByProduct } = faqsAction

const mapDispatchToProps = dispatch => ( {
  actions: bindActionCreators(
    {
      getFaqsByProduct,
      initProductsScreen,
      setCurrentProductOfProductCategory,
    },
    dispatch
  ),
} )

const mapStateToProps = state => ( {
  isFetching: state.products.isFetching,
  products: productSelectors.productFilterByProductCategoriesSelector( state ),
} )

export default compose(
  connect( mapStateToProps, mapDispatchToProps ),
  withHandlers( {
    onPressSelectProduct: ( { actions, navigation } ) => ( id, value ) => {
      ga.trackEvent( {
        eventCategory: 'products',
        eventAction: 'select product',
        eventLabel: value,
      } )
      actions.setCurrentProductOfProductCategory( id )
      actions.getFaqsByProduct( id )
      navigation.navigate( 'productDetail', {
        id: id,
        module: 'productCategories',
      } )
    },
  } ),
  lifecycle( {
    componentWillMount() {
      this.props.actions.initProductsScreen()
    },
  } ),
  withPreloader,
  pure
)( Products )
