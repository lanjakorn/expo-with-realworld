import React, { Component } from 'react'
import Login from './LoginContainer'
import { HeaderNavigation } from '@components'

class LoginScreen extends Component {
  static navigationOptions = ( { navigation } ) => {
    return {
      header: <HeaderNavigation navigation={navigation} title={'Login'} />,
    }
  }

  render() {
    return <Login navigation={this.props.navigation} />
  }
}

export default LoginScreen
