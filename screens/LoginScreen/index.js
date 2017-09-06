import React from 'react'
import PropTypes from 'prop-types'

import Login from './LoginContainer'
import { HeaderNavigation } from '@components'

const LoginScreen = ( { navigation } ) => <Login navigation={navigation} />

LoginScreen.navigationOptions = ( { navigation } ) => ( {
  header: <HeaderNavigation navigation={navigation} title={'Login'} />,
} )

LoginScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
}

export default LoginScreen
