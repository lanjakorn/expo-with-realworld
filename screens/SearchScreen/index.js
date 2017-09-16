import React from 'react'
import PropTypes from 'prop-types'
import { Colors } from 'constants'

import { View, StyleSheet } from 'react-native'
import { Icon } from 'react-native-elements'
import { Search } from '@components'
import SearchList from './SearchListContainer'

const SearchScreen = ( { navigation } ) =>
  <View>
    <SearchList navigation={navigation} />
  </View>

// SearchScreen.navigationOptions = ( { navigation } ) => ( {
//   tabBarLabel: 'Search',
//   tabBarIcon: ( { focused } ) =>
//     <Icon
//       name={'search'}
//       size={24}
//       color={focused ? Colors.tabIconSelected : Colors.tabIconDefault}
//     />,
//   header: (
//     <View style={{ backgroundColor: Colors.tintColor }}>
//       <View style={{ marginTop: 24, height: 40 }}>
//         <Search navigation={navigation} navOnCancel={'search'} />
//       </View>
//     </View>
//   ),
// } )

SearchScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
}

export default SearchScreen
