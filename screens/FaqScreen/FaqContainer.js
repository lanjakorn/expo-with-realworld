import { connect } from 'react-redux'
import { compose, pure, withHandlers, withState } from 'recompose'

import { selectors as settingsSelectors } from 'modules/Settings'

import Faq from './Faq'

const mapStateToProps = state => ( {
  words: settingsSelectors.getWordsByLangSelector( state ),
} )

export default compose(
  connect( mapStateToProps ),
  withState( 'titleQuestion', 'setTitleQuestion', '' ),
  withState( 'question', 'setQuestion', '' ),
  withHandlers( {
    typingTitleQuestion: ( { setTitleQuestion } ) => data =>
      setTitleQuestion( data ),
    typingQuestion: ( { setQuestion } ) => data => setQuestion( data ),
  } ),
  pure
)( Faq )
