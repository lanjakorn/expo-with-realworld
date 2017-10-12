import { compose, mapProps, pure, withHandlers } from 'recompose'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import verticalMenu from 'mocks/verticalMenu'
import { appLink, ga } from 'services'

import { actions as homeActions } from 'modules/Home'
import { selectors as appConfigsSelectors } from 'modules/AppConfigs'
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

const mapStateToProps = state => ( {
  configs: appConfigsSelectors.configsSelector( state ),
} )

export default compose(
  connect( mapStateToProps, mapDispatchToProps ),
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
  mapProps( props => {
    const { onPressMenuSelect, configs: { eShop } } = props
    const injectFunc = Object.keys( verticalMenu ).map( e => {
      switch ( e ) {
      case 'eShop':
        return {
          onPressMenuSelect: () => appLink.openUrl( eShop.pageUrl ),
          ...verticalMenu[ e ],
        }
      default:
        return {
          onPressMenuSelect,
          ...verticalMenu[ e ],
        }
      }
    } )
    return {
      verticalMenu: { ...injectFunc },
      ...props,
    }
  } ),
  pure
)( Homes )
