import { compose, pure, mapProps, withHandlers } from 'recompose'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { appLink, ga } from 'services'
import { withPreloader } from 'hocs'

import { selectors as AppConfigsSelectors } from 'modules/AppConfigs'
import AppPortal from './AppPortal'

const mapStateToProps = state => ( {
  apps: AppConfigsSelectors.appPortalSelector( state ),
  isFetching: AppConfigsSelectors.isFetchingSelector( state ),
} )

export default compose(
  connect( mapStateToProps ),
  withHandlers( {
    onPressAppSelect: ( { navigation } ) => (
      appStoreId,
      appStoreLocale,
      playStoreId
    ) => appLink.openInStore( appStoreId, appStoreLocale, playStoreId ),
  } ),
  withPreloader,
  pure
)( AppPortal )
