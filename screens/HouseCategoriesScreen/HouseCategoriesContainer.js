import { compose, onlyUpdateForKeys, pure, withHandlers } from 'recompose'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { ga } from 'services'
import { withPreloader } from 'hocs'

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
  withHandlers( {
    onPressContactUs: ( { navigation } ) => () =>
      navigation.navigate( 'contactUs' ),
    onPressSolutionSelect: ( { actions, navigation } ) => ( id, value ) => {
      ga.trackEvent( {
        eventCategory: 'houses',
        eventAction: 'select solution of house category',
        eventLabel: value,
      } )
      actions.setCurrentSolutions( id )
      navigation.navigate( 'solution', { solution: value } )
    },
  } ),
  onlyUpdateForKeys( [ 'isFetching' ] ),
  withPreloader,
  pure
)( HouseCategories )
