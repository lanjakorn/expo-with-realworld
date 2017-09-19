import { compose, pure } from 'recompose'
import { connect } from 'react-redux'
import { withPreloader } from 'hocs'

import { selectors as companyProfileSelector } from 'modules/CompanyProfile'
import CompanyProfile from './CompanyProfile'

const mapStateToProps = state => ( {
  companyProfile: companyProfileSelector.companyProfileSelector( state ),
  isFetching: companyProfileSelector.isFetchingSelector( state ),
} )

export default compose( connect( mapStateToProps ), withPreloader, pure )(
  CompanyProfile
)
