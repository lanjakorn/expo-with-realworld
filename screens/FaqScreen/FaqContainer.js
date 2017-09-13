import { compose, mapProps, pure, withHandlers, withState } from 'recompose'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { nav, validateForm } from 'utilities'

import {
  actions as faqsActions,
  selectors as faqsSelectors,
} from 'modules/Faqs'
import { selectors as productsSelectors } from 'modules/Products'
import { selectors as settingsSelectors } from 'modules/Settings'
import { selectors as solutionCategoriesSelector } from 'modules/SolutionCategories'

import validationRules from './validate'
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
  mapProps( props => {
    const {
      navigation,
      productIdOfProductCategory,
      productIdOfSolutionCategory,
      solutionCategoryId,
    } = props

    const strategy = () => {
      const faq = {}
      switch ( nav.getNavigationParam( navigation, 'prevScreen' ) ) {
      case 'productDetailScreen':
        switch ( nav.getNavigationParam( navigation, 'module' ) ) {
        case 'productCategories':
          return {
            ...faq,
            productId: productIdOfProductCategory,
            solutionCategoryId: '',
          }
        case 'solutionCategoris':
          return {
            ...faq,
            productId: productIdOfSolutionCategory,
            solutionCategoryId: '',
          }

        default:
          return null
        }
      case 'solutionCategorisScreen':
        switch ( nav.getNavigationParam( navigation, 'module' ) ) {
        case 'solutionCategoris':
          return {
            ...faq,
            productId: '',
            solutionCategoryId,
          }

        default:
          return null
        }
      default:
        return null
      }
    }

    return {
      ...props,
      ...strategy(),
    }
  } ),
  withState( 'titleQuestion', 'setTitleQuestion', '' ),
  withState( 'question', 'setQuestion', '' ),
  withState( 'submissionError', 'setSubmissionError', {} ),
  withState( 'enableButton', 'setEnableButton', true ),
  withHandlers( {
    typingTitleQuestion: ( { setTitleQuestion } ) => data => {
      setTitleQuestion( data )
    },
    typingQuestion: ( { setQuestion } ) => data => {
      setQuestion( data )
    },
    onPressAddFaq: ( {
      actions,
      productId,
      question,
      setEnableButton,
      setSubmissionError,
      solutionCategoryId,
      submissionError,
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
      const filedCheck = validateForm.validate( faqModle, validationRules )
      setSubmissionError( { ...filedCheck, visit: true } )

      if ( filedCheck.pass ) {
        actions.addFaq( faqModle )
        setEnableButton( false )
      }
    },
  } ),
  pure
)( Faq )
