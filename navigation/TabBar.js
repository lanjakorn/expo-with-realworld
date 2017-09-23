import React from 'react'
import { NavigationActions, TabBarBottom } from 'react-navigation'
import PropTypes from 'prop-types'
import { array } from 'utilities'

const TabBar = ( { jumpToIndex, ...props } ) => {
  const { state, dispatch } = props.navigation
  return (
    <TabBarBottom
      {...props}
      jumpToIndex={index => {
        if ( state.index === index ) {
          const currentRouteOfTab = state.routes[ state.index ]
          const [ currentRoute ] = array.getLast( currentRouteOfTab.routes )

          if ( currentRoute.routeName === currentRouteOfTab.routeName ) {
            jumpToIndex( index )
          } else {
            dispatch(
              NavigationActions.navigate( {
                routeName: state.routes[ state.index ].routeName,
              } )
            )
          }
        } else {
          jumpToIndex( index )
        }
      }}
    />
  )
}

TabBar.propTypes = {
  jumpToIndex: PropTypes.func.isRequired,
  navigation: PropTypes.object.isRequired,
}

export default TabBar
