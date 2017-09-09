import { compose, onlyUpdateForKeys, pure } from 'recompose'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { selectors as houseCategoriesSelectors } from 'modules/HouseCategories'
import { actions as solutionsActions } from 'modules/Solutions'

import HouseCategories from './HouseCategories'

const { setCurrentSolutions } = solutionsActions
const mapDispatchToProps = dispatch => ( {
  actions: bindActionCreators(
    {
      setCurrentSolutions,
    },
    dispatch
  ),
} )

const mapStateToProps = state => ( {
  caseStudies: houseCategoriesSelectors.caseStudyOfHouseCategorySelector( state ),
  currentHouseCategory: houseCategoriesSelectors.currentHouseCategorySelector(
    state
  ),
  houseCategory: houseCategoriesSelectors.houseCategorySelector( state ),
  isFetching: houseCategoriesSelectors.isFetchingCaseStudiesAndSolutionsSelector(
    state
  ),
  solutions: houseCategoriesSelectors.solutionOfHouseCategorySelector( state ),
} )

export default compose(
  connect( mapStateToProps, mapDispatchToProps ),
  onlyUpdateForKeys( [ 'isFetching' ] ),
  pure
)( HouseCategories )
