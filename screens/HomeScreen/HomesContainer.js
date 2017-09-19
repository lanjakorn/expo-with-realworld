import { compose, pure, withHandlers } from 'recompose'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { ga } from 'services'

import { actions as homeActions } from 'modules/Home'
import Homes from './Homes'

const { initHomeScreen } = homeActions
const mapDispatchToProps = dispatch => ( {
  actions: bindActionCreators(
    {
      initHomeScreen,
    },
    dispatch
  ),
} )

export default compose(
  connect( null, mapDispatchToProps ),
  withHandlers( {
    onPressMenuSelect: ( { navigation } ) => ( { navigate, title } ) => {
      ga.trackEvent( {
        eventCategory: 'homes',
        eventAction: 'select menu of homes',
        eventLabel: title,
      } )
      navigation.navigate( navigate, { category: title } )
    },
  } ),
  pure
)( Homes )
