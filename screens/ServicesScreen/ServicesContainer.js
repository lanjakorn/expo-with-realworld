import { compose, lifecycle, pure, withHandlers } from 'recompose'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { ga } from 'services'

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
  withHandlers( {
    onPressServiceSelect: ( { actions, navigation } ) => ( id, value ) => {
      ga.trackEvent( {
        eventCategory: 'services',
        eventAction: 'select service',
        eventLabel: value,
      } )
      actions.setCurrentService( id )
      navigation.navigate( 'serviceDetail', {
        service: value,
      } )
    },
  } ),
  lifecycle( {
    componentWillMount() {
      this.props.actions.initServicesScreen()
    },
  } ),
  pure
)( Services )
