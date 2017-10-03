import React from 'react'
import PropTypes from 'prop-types'
import { Colors } from 'constants'

import { View, StyleSheet } from 'react-native'
import { Icon } from 'react-native-elements'
import { Search } from '@components'
import SearchList from './SearchListContainer'

const SearchScreen = ( { navigation } ) => <View />

SearchScreen.navigationOptions = ( { navigation } ) => ( {
  header: <SearchList navigation={navigation} />,
} )

SearchScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
}

export default SearchScreen
