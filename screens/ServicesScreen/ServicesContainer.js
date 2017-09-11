import { compose, lifecycle, pure } from 'recompose'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import {
  actions as serviceActions,
  selectors as servicesSelectors,
} from 'modules/Services'

import Services from './Services'

const { initServicesScreen, setCurrentService } = serviceActions
const mapDispatchToProps = dispatch => ( {
  actions: bindActionCreators(
    {
      initServicesScreen,
      setCurrentService,
    },
    dispatch
  ),
} )

const mapStateToProps = state => ( {
  isFetching: servicesSelectors.isFetchingSelector( state ),
  services: servicesSelectors.servicesByIdSelector( state ),
} )

export default compose(
  connect( mapStateToProps, mapDispatchToProps ),
  lifecycle( {
    componentWillMount() {
      this.props.actions.initServicesScreen()
    },
  } ),
  pure
)( Services )
