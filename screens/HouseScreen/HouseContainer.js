import { compose, pure } from 'recompose'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {
  actions as houseCategoriesActions,
  selectors as houseCategoriesSelectors,
} from 'modules/HouseCategories'
import House from './House'

const { setCurrentHouseCategory } = houseCategoriesActions
const mapDispatchToProps = dispatch => ( {
  actions: bindActionCreators(
    {
      setCurrentHouseCategory,
    },
    dispatch
  ),
} )

const mapStateToProps = state => ( {
  houseCategories: houseCategoriesSelectors.houseCategoriesByIdSelector( state ),
  isFetchingHouseCategories: houseCategoriesSelectors.isFetchingSelector( state ),
} )

export default compose( connect( mapStateToProps, mapDispatchToProps ), pure )(
  House
)
