import { compose, lifecycle, pure } from 'recompose'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
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
  lifecycle( {
    componentWillMount() {
      this.props.actions.initProductsScreen()
    },
  } ),
  pure
)( Products )
