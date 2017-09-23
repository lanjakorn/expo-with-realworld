import config from 'config'

import { nav } from 'utilities'
import { Tracker } from './googleAnalytics'

import { MainNavigator } from 'navigation'

const tracker = new Tracker( config.ga, config.app.name, config.app.version )

const initialState = MainNavigator.Nav.router.getStateForAction(
  MainNavigator.TabNav.router.getActionForPathAndParams( 'homes' )
)

const navReducer = ( state = initialState, action ) => {
  const nextState = MainNavigator.Nav.router.getStateForAction( action, state )

  const currentScreen = nav.getCurrentRouteName( nextState )
  const prevScreen = nav.getCurrentRouteName( state )

  if ( prevScreen !== currentScreen ) {
    tracker.trackScreenView( currentScreen )
  }

  return nextState || state
}

export { navReducer }
