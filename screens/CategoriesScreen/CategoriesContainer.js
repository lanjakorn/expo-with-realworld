import { compose, pure } from 'recompose'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { actions as CategoriesAction, selectors } from 'modules/Categories'
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

export default compose( connect( mapStateToProps, mapDispatchToProps ), pure )(
  Categories
)
