import { NavigationActions } from 'react-navigation'

const getNavigationParam = ( navigation, param ) => {
  if ( navigation.state && navigation.state.params ) {
    if ( navigation.state.params.hasOwnProperty( param ) ) {
      return navigation.state.params[ param ]
    }
  }
  return ''
}

const getCurrentRouteName = navigationState => {
  if ( !navigationState ) {
    return null
  }
  const route = navigationState.routes[ navigationState.index ]
  // dive into nested navigators
  if ( route.routes ) {
    return getCurrentRouteName( route )
  }
  return route.routeName
}

const navigateOnce = getStateForAction => ( action, state ) => {
  const { type, routeName } = action
  return state &&
  type === NavigationActions.NAVIGATE &&
  routeName === state.routes[ state.routes.length - 1 ].routeName
    ? null
    : getStateForAction( action, state )
  // you might want to replace 'null' with 'state' if you're using redux (see comments below)
}

export { getNavigationParam, getCurrentRouteName, navigateOnce }
