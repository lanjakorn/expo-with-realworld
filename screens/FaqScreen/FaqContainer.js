import { compose, mapProps, pure, withHandlers, withState } from 'recompose'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { validateForm } from 'utilities'

import {
  actions as faqsActions,
  selectors as faqsSelectors,
  validate,
} from 'modules/Faqs'

import { selectors as authSelector } from 'modules/Auth'
import { selectors as productCategoriesSelectors } from 'modules/ProductCategories'
import { selectors as productsSelectors } from 'modules/Products'
import { selectors as settingsSelectors } from 'modules/Settings'
import { selectors as solutionCategoriesSelector } from 'modules/SolutionCategories'

import strategyNav from './strategyNav'
import Faq from './Faq'

const { profileSelector } = authSelector
const { addFaq } = faqsActions
const { isAddFetchingSelector } = faqsSelectors
const { currentChildCategorieQuerySelector } = productCategoriesSelectors
const {
  currentProductOfProductCategorySelector,
  currentProductOfSolutionCategorySelector,
} = productsSelectors
const { getWordsByLangSelector } = settingsSelectors
const { currentSolutionCategorySelector } = solutionCategoriesSelector

const mapDispatchToProps = dispatch => ( {
  actions: bindActionCreators(
    {
      addFaq,
    },
    dispatch
  ),
} )

const mapStateToProps = state => ( {
  isAddFetching: isAddFetchingSelector( state ),
  productCategories: currentChildCategorieQuerySelector( state ),
  productIdOfProductCategory: currentProductOfProductCategorySelector( state ),
  productIdOfSolutionCategory: currentProductOfSolutionCategorySelector( state ),
  profile: profileSelector( state ),
  solutionCategoryId: currentSolutionCategorySelector( state ),
  words: getWordsByLangSelector( state ),
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
      productCategories,
      productId,
      question,
      setEnableButton,
      setSubmissionError,
      solutionCategoryId,
      titleQuestion,
      profile,
    } ) => () => {
      const faqModle = {
        productCategories,
        productId,
        question,
        solutionCategoryId,
        titleQuestion,
        userId: profile.id,
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
