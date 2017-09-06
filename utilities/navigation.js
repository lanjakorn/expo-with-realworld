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

export { getNavigationParam, getCurrentRouteName }
