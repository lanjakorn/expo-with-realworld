import { compose, pure, withHandlers, withState } from 'recompose'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { actions as faqsActions } from 'modules/Faqs'
import { selectors as settingsSelectors } from 'modules/Settings'

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
  words: settingsSelectors.getWordsByLangSelector( state ),
} )

export default compose(
  connect( mapStateToProps, mapDispatchToProps ),
  withState( 'titleQuestion', 'setTitleQuestion', '' ),
  withState( 'question', 'setQuestion', '' ),
  withHandlers( {
    typingTitleQuestion: ( { setTitleQuestion } ) => data =>
      setTitleQuestion( data ),
    typingQuestion: ( { setQuestion } ) => data => setQuestion( data ),
    onPressAddFaq: ( { actions } ) => faq => {
      actions.addFaq( faq )
    },
  } ),
  pure
)( Faq )
