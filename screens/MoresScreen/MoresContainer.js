import { compose, mapProps, pure, withHandlers } from 'recompose'
import { connect } from 'react-redux'
import { appLink } from 'services'
import mores from 'mocks/mores'

import { selectors as appConfigsSelectors } from 'modules/AppConfigs'

import Mores from './Mores'

const mapStateToProps = state => ( {
  configs: appConfigsSelectors.configsSelector( state ),
} )

export default compose(
  connect( mapStateToProps ),
  withHandlers( {
    onPressMenuSelect: ( { navigation } ) => ( { navigate, title } ) =>
      navigation.navigate( navigate, { category: title } ),
  } ),
  mapProps( props => {
    const {
      onPressMenuSelect,
      configs: { eShop, ricohSmartDeviceConnectorApp },
    } = props
    const injectFunc = Object.keys( mores ).map( e => {
      switch ( e ) {
      // case 'app':
      //   return {
      //     onPressMenuSelect: () =>
      //       appLink.openInStore(
      //         ricohSmartDeviceConnectorApp.appStoreId,
      //         ricohSmartDeviceConnectorApp.appStoreLocale,
      //         ricohSmartDeviceConnectorApp.playStoreId
      //       ),
      //     ...mores[ e ],
      //   }
      case 'eShop':
        return {
          onPressMenuSelect: () => appLink.openUrl( eShop.pageUrl ),
          ...mores[ e ],
        }
      default:
        return {
          onPressMenuSelect,
          ...mores[ e ],
        }
      }
    } )
    return {
      mores: { ...injectFunc },
      ...props,
    }
  } ),
  pure
)( Mores )
