import { compose, mapProps, pure } from 'recompose'
import { connect } from 'react-redux'

import { selectors as contactUsSelectors } from 'modules/ContactUs'
import { info } from 'mocks/contactUs'
import ContactUs from './ContactUs'

const mapStateToProps = state => ( {
  contactUs: contactUsSelectors.contactUsSelector( state ),
} )

export default compose(
  connect( mapStateToProps ),
  mapProps( props => {
    const { contactUs } = props
    return {
      ...props,
      info: info( contactUs ),
    }
  } ),
  pure
)( ContactUs )
