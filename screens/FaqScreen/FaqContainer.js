import { compose, mapProps, pure, withHandlers, withState } from 'recompose'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { validateForm } from 'utilities'

import {
  actions as faqsActions,
  selectors as faqsSelectors,
  validate,
} from 'modules/Faqs'
import { selectors as productsSelectors } from 'modules/Products'
import { selectors as settingsSelectors } from 'modules/Settings'
import { selectors as solutionCategoriesSelector } from 'modules/SolutionCategories'

import strategyNav from './strategyNav'
import Faq from './Faq'

const { addFaq } = faqsActions
const mapDispatchToProps = dispatch => ( {
  actions: bindActionCreators(
    {
      addFaq,
    },
    dispatch
  ),
} )

const mapStateToProps = state => ( {
  isAddFetching: faqsSelectors.isAddFetchingSelector( state ),
  productIdOfProductCategory: productsSelectors.currentProductOfProductCategorySelector(
    state
  ),
  productIdOfSolutionCategory: productsSelectors.currentProductOfSolutionCategorySelector(
    state
  ),
  solutionCategoryId: solutionCategoriesSelector.currentSolutionCategorySelector(
    state
  ),
  words: settingsSelectors.getWordsByLangSelector( state ),
} )

export default compose(
  connect( mapStateToProps, mapDispatchToProps ),
  mapProps( props => strategyNav( props ) ),
  withState( 'titleQuestion', 'setTitleQuestion', '' ),
  withState( 'question', 'setQuestion', '' ),
  withState( 'submissionError', 'setSubmissionError', {} ),
  withState( 'enableButton', 'setEnableButton', true ),
  withHandlers( {
    typingTitleQuestion: ( { setTitleQuestion } ) => data =>
      setTitleQuestion( data ),
    typingQuestion: ( { setQuestion } ) => data => setQuestion( data ),
    selectStyleTextInput: ( { submissionError } ) => ( style, prop ) => [
      style,
      {
        borderColor:
          ( Object.keys( submissionError ).length !== 0 &&
            submissionError.errors[ prop ].length === 0 ) ||
          !submissionError.visit
            ? '#FFF'
            : 'firebrick',
      },
    ],
    onPressAddFaq: ( {
      actions,
      productId,
      question,
      setEnableButton,
      setSubmissionError,
      solutionCategoryId,
      titleQuestion,
    } ) => () => {
      const faqModle = {
        productId,
        solutionCategoryId,
        question,
        titleQuestion,
        answer: '',
        syncApp: false,
      }

      const validated = validateForm.validate( faqModle, validate )
      setSubmissionError( { ...validated, visit: true } )

      if ( validated.pass ) {
        actions.addFaq( faqModle )
        setEnableButton( false )
      }
    },
  } ),
  pure
)( Faq )
