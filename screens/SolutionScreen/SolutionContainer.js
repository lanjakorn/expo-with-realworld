import { compose, onlyUpdateForKeys, pure, withHandlers } from 'recompose'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { ga } from 'services'

import { actions as faqsAction } from 'modules/Faqs'
import { actions as productsActions } from 'modules/Products'
import { actions as solutionCategoriesActions } from 'modules/SolutionCategories'
import { selectors as caseStudiesSelectors } from 'modules/CaseStudies'
import { selectors as houseCategoriesSelectors } from 'modules/HouseCategories'
import { selectors as solutionsSelectors } from 'modules/Solutions'

import Solution from './Solution'

const { setCurrentSolutionCategory } = solutionCategoriesActions
const { getProductsBySolutionCategory } = productsActions
const { getFaqsBySolutionCategory } = faqsAction

const mapDispatchToProps = dispatch => ( {
  actions: bindActionCreators(
    {
      getFaqsBySolutionCategory,
      getProductsBySolutionCategory,
      setCurrentSolutionCategory,
    },
    dispatch
  ),
} )

const mapStateToProps = state => ( {
  caseStudies: caseStudiesSelectors.caseStudiesByIdSelector( state ),
  currentHouseCategory: houseCategoriesSelectors.currentHouseCategorySelector(
    state
  ),
  isFetching: solutionsSelectors.isFetchingCaseStudiesAndSolutionCategoriesSelector(
    state
  ),
  solution: solutionsSelectors.solutionSelector( state ),
  solutionCategories: solutionsSelectors.solutionCategorOfHouseCategorySelector(
    state
  ),
} )

export default compose(
  connect( mapStateToProps, mapDispatchToProps ),
  withHandlers( {
    onPressSolutionCategorySelect: ( { actions, navigation } ) => ( id, value ) => {
      ga.trackEvent( {
        eventCategory: 'houses',
        eventAction: 'select solution category of solution',
        eventLabel: value,
      } )
      actions.setCurrentSolutionCategory( id )
      actions.getProductsBySolutionCategory( id )
      actions.getFaqsBySolutionCategory( id )

      navigation.navigate( 'solutionCategories', { category: value } )
    },
    onPressContactUs: ( { navigation } ) => () => {
      navigation.navigate( 'contactUs' )
    },
  } ),
  onlyUpdateForKeys( [ 'isFetching' ] ),
  pure
)( Solution )
