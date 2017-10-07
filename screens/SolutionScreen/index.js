import React from 'react'
import { ScrollView } from 'react-native'
import PropTypes from 'prop-types'
import { nav } from 'utilities'

import SolutionContainer from './SolutionContainer'
import { HeaderNavigation } from '@components'

const SolutionScreen = ( { navigation } ) => (
  <ScrollView removeClippedSubviews={false}>
    <SolutionContainer navigation={navigation} />
  </ScrollView>
)

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
