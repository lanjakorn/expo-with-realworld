import { compose, pure, mapProps, withHandlers } from 'recompose'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { ga } from 'services'

import { selectors as newsLettersSelectors } from 'modules/Newsletters'

import Newsletter from './Newsletter'

const mapStateToProps = state => ( {
  newsletter: newsLettersSelectors.newsletterSelector( state ),
} )

export default compose( connect( mapStateToProps ), pure )( Newsletter )
