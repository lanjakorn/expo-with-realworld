import React, { Component } from 'react'
import { ScrollView } from 'react-native'
import Post from './PostsContainer'
import { HeaderNavigation } from '@components'

class ContactUsScreen extends Component {
  static navigationOptions = ( { navigation } ) => {
    return {
      header: (
        <HeaderNavigation
          navigation={navigation}
          title={navigation.state.params.category}
        />
      ),
    }
  }

  render() {
    return (
      <ScrollView>
        <Post navigation={this.props.navigation} />
      </ScrollView>
    )
  }
}

export default ContactUsScreen
