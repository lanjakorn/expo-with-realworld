import React from 'react'
import PropTypes from 'prop-types'
import { nav } from 'utilities'

import { ScrollView } from 'react-native'
import SolutionContainer from './SolutionContainer'
import { HeaderNavigation } from '@components'

const SolutionScreen = ( { navigation } ) =>
  <ScrollView>
    <SolutionContainer navigation={navigation} />
  </ScrollView>

SolutionScreen.navigationOptions = ( { navigation } ) => ( {
  header: (
    <HeaderNavigation
      navigation={navigation}
      title={nav.getNavigationParam( navigation, 'solution' )}
    />
  ),
} )

SolutionScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
}

export default SolutionScreen
