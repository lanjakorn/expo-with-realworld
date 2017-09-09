import { compose, onlyUpdateForKeys, pure } from 'recompose'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {
  actions as categoriesAction,
  selectors as categoriesSelectors,
} from 'modules/Categories'

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
  onlyUpdateForKeys( [ 'isFetching' ] ),
  pure
)( Categories )
