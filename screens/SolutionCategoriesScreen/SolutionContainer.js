import { compose, onlyUpdateForKeys, pure, withHandlers } from 'recompose'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { ga } from 'services'

import { actions as productsAction } from 'modules/Products'
import {
  actions as solutionsActions,
  selectors as solutionsSelectors,
} from 'modules/Solutions'
import { selectors as caseStudiesSelectors } from 'modules/CaseStudies'
import { selectors as houseCategoriesSelectors } from 'modules/HouseCategories'
import { selectors as productsSelectors } from 'modules/Products'
import { selectors as settingsSelectors } from 'modules/Settings'
import { selectors as solutionCategoriesSelectors } from 'modules/SolutionCategories'

import Solution from './Solution'

const { setCurrentSolutions } = solutionsActions
const { setCurrentProductOfSolutionCategory } = productsAction
const mapDispatchToProps = dispatch => ( {
  actions: bindActionCreators(
    {
      setCurrentSolutions,
      setCurrentProductOfSolutionCategory,
    },
    dispatch
  ),
} )

const mapStateToProps = state => ( {
  caseStudies: caseStudiesSelectors.caseStudiesByIdSelector( state ),
  currentSolutionCategory: houseCategoriesSelectors.currentHouseCategorySelector(
    state
  ),
  faqs: productsSelectors.faqOfSolutionCategorySelector( state ),
  isFetching: solutionCategoriesSelectors.isFetchingProductsAndFaqsSelector(
    state
  ),
  products: productsSelectors.productFilterBySolutionCategorySelector( state ),
  solutionCategory: solutionCategoriesSelectors.solutionCategorySelector( state ),
  solutions: solutionsSelectors.solutionsByIdSelector( state ),
  words: settingsSelectors.getWordsByLangSelector( state ),
} )

export default compose(
  connect( mapStateToProps, mapDispatchToProps ),
  withHandlers( {
    onPressSelectProduct: ( { actions, navigation } ) => ( id, value ) => {
      ga.trackEvent( {
        eventCategory: 'houses',
        eventAction: 'select product of solution category',
        eventLabel: value,
      } )
      actions.setCurrentProductOfSolutionCategory( id )
      navigation.navigate( 'productDetail', {
        id,
        module: 'solutionCategoris',
      } )
    },
    onPressFaq: ( { navigation } ) => () =>
      navigation.navigate( 'faq', {
        module: 'solutionCategoris',
        prevScreen: 'solutionCategorisScreen',
      } ),
    onPressContactUs: ( { navigation } ) => () =>
      navigation.navigate( 'contactUs' ),
    faqOnChange: () => question => {
      ga.trackEvent( {
        eventCategory: 'faqs',
        eventAction: 'select faq of solution category',
        eventLabel: question,
      } )
    },
  } ),
  onlyUpdateForKeys( [ 'isFetching' ] ),
  pure
)( Solution )
