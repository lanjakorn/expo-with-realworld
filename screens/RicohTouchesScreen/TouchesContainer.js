import { Platform } from 'react-native'
import { compose, pure, withHandlers } from 'recompose'
import { connect } from 'react-redux'
import { appLink, ga } from 'services'
import { nav } from 'utilities'
import { withPreloader } from 'hocs'

import { selectors as ricohTouchesSelectors } from 'modules/RicohTouches'

import Touches from './Touches'

const mapStateToProps = state => ( {
  isFetching: ricohTouchesSelectors.isFetchingSelector( state ),
  touches: ricohTouchesSelectors.ricohTouchesByIdSelector( state ),
} )

export default compose(
  connect( mapStateToProps ),
  withHandlers( {
    onPressSelectTouches: ( { navigation } ) => ( title, url ) =>
      Platform.OS === 'ios'
        ? navigation.navigate( 'ricohTouchDetail', {
          title,
          url,
        } )
        : appLink.openUrl( url ),
  } ),
  withPreloader,
  pure
)( Touches )
