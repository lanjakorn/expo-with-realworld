// import './ReactotronConfig' // build android must comment
import Expo, { AppLoading } from 'expo'
import React from 'react'
import { Provider, connect } from 'react-redux'
import { cacheAssetsAsync } from 'utilities'
// import store from 'store' // build android must comment and turn off comment below
import store from 'store/configureStore.prod'

import { StatusBar, View } from 'react-native'
import { FontAwesome } from '@expo/vector-icons'
import { MainNavigator } from 'navigation'
import { getDefaultTab } from '@screens/SettingsScreen'

class AppContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      appIsReady: false,
    }
  }

  async componentWillMount() {
    this._loadAssetsAsync()
  }

  async _loadAssetsAsync() {
    try {
      await cacheAssetsAsync({
        images: [
          require('./assets/images/expo-wordmark.png'),
          require('./assets/images/business-item-1.png'),
          require('./assets/images/business-item-2.png'),
          require('./assets/images/vertical-menu-item.png'),
          require('./assets/images/house-menu-item.png'),
        ],
        fonts: [
          FontAwesome.font,
          { 'space-mono': require('./assets/fonts/SpaceMono-Regular.ttf') },
        ],
      })
    } catch (e) {
      console.warn(
        'There was an error caching assets (see: main.js), perhaps due to a ' +
          'network timeout, so we skipped caching. Reload the app to try again.'
      )
      console.log(e.message)
    } finally {
      this.setState({ appIsReady: true })
    }
  }

  render() {
    if (this.state.appIsReady) {
      return (
        <View style={{ flex: 1 }}>
          <StatusBar barStyle="light-content" />
          <Provider store={store}>
            <MainAppNavigator screenProps={'expo-with-realworld'} />
          </Provider>
        </View>
      )
    }
    return <AppLoading />
  }
}

const mapStateToProps = state => {
  return {
    default_tab: state.settings.default_tab,
  }
}

const MainAppNavigator = connect(mapStateToProps, getDefaultTab)(MainNavigator)

Expo.registerRootComponent(AppContainer)
