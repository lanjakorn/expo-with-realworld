import { compose, pure } from 'recompose'
import { connect } from 'react-redux'

import { selectors as servicesSelectors } from 'modules/Services'

import ServiceDetail from './ServiceDetail'

const mapStateToProps = state => ( {
  service: servicesSelectors.servicesSelector( state ),
} )

export default compose( connect( mapStateToProps ), pure )( ServiceDetail )
