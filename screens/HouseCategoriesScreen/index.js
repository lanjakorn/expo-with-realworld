import React from 'react'
import PropTypes from 'prop-types'
import { nav } from 'utilities'

import { ScrollView } from 'react-native'
import HouseCategories from './HouseCategoriesContainer'
import { HeaderNavigation } from '@components'

const HouseCategoriesScreen = ( { navigation } ) =>
  <ScrollView>
    <HouseCategories navigation={navigation} />
  </ScrollView>

HouseCategoriesScreen.navigationOptions = ( { navigation } ) => ( {
  header: (
    <HeaderNavigation
      navigation={navigation}
      title={nav.getNavigationParam( navigation, 'category' )}
    />
  ),
} )

HouseCategoriesScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
}

export default HouseCategoriesScreen
