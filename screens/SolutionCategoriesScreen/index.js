import React from 'react'
import { ScrollView } from 'react-native'
import PropTypes from 'prop-types'
import { nav } from 'utilities'

import { HeaderNavigation } from '@components'
import SolutionContainer from './SolutionContainer'

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
