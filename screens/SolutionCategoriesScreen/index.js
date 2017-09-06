import React from 'react'
import PropTypes from 'prop-types'
import { nav } from 'utilities'

import { ScrollView } from 'react-native'
import SolutionContainer from './SolutionContainer'
import { HeaderNavigation } from '@components'

const SolutionCategoriesScreen = ( { navigation } ) =>
  <ScrollView>
    <SolutionContainer navigation={navigation} />
  </ScrollView>

SolutionCategoriesScreen.navigationOptions = ( { navigation } ) => ( {
  header: (
    <HeaderNavigation
      navigation={navigation}
      title={nav.getNavigationParam( navigation, 'category' )}
    />
  ),
} )

SolutionCategoriesScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
}

export default SolutionCategoriesScreen
