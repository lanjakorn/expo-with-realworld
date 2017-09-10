import { compose, pure } from 'recompose'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { actions as CategoriesAction, selectors } from 'modules/Categories'
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

export default compose( connect( mapStateToProps, mapDispatchToProps ), pure )(
  Categories
)
