const getNavigationParam = ( navigation, param ) => {
  if ( navigation.state && navigation.state.params ) {
    if ( navigation.state.params.hasOwnProperty( param ) ) {
      return navigation.state.params[ param ]
    }
  }
  return ''
}

export { getNavigationParam }
