import React from 'react'
import PropTypes from 'prop-types'

import Faq from './FaqContainer'
import { HeaderNavigation } from '@components'

const FaqScreen = ( { navigation } ) => <Faq navigation={navigation} />

FaqScreen.navigationOptions = ( { navigation } ) => ( {
  header: <HeaderNavigation navigation={navigation} title={'FAQ'} />,
} )

FaqScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
}

export default FaqScreen
