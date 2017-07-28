// import './ReactotronConfig' // dev evn
import 'es6-symbol/implement'
import Expo, { AppLoading } from 'expo'
import React from 'react'
import { Provider, connect } from 'react-redux'
import firebase from 'firebase'
import config from 'config'
import { cacheAssetsAsync } from 'utilities'
// import store from 'store' // dev evn
import store from 'store/configureStore.prod'

import { Platform, StatusBar, StyleSheet, View, Text } from 'react-native'
import { FontAwesome } from '@expo/vector-icons'
import { MainNavigator } from 'navigation'
import { getDefaultTab } from '@screens/SettingsScreen'

firebase.initializeApp( config )

class AppContainer extends React.Component {
  constructor( props ) {
    super( props )
    this.state = {
      appIsReady: false,
    }
  }

  componentWillMount() {
    this._loadAssetsAsync()
  }

  async _loadAssetsAsync() {
    try {
      await cacheAssetsAsync( {
        images: [
          require( './assets/images/expo-wordmark.png' ),
          require( './assets/images/vertical-menu-item.png' ),
        ],
        fonts: [
          FontAwesome.font,
          // MaterialIcons.font,
          { 'space-mono': require( './assets/fonts/SpaceMono-Regular.ttf' ) },
        ],
      } )
    } catch ( e ) {
      console.warn(
        'There was an error caching assets (see: main.js), perhaps due to a ' +
          'network timeout, so we skipped caching. Reload the app to try again.'
      )
      console.log( e.message )
    } finally {
      this.setState( { appIsReady: true } )
    }
  }

  render() {
    if ( this.state.appIsReady ) {
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

const styles = StyleSheet.create( {
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  statusBarUnderlay: {
    height: 24,
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
  },
  statusHeight: {
    marginTop: 0,
  },
} )

const mapStateToProps = state => {
  return {
    default_tab: state.settings.default_tab,
  }
}

const MainAppNavigator = connect( mapStateToProps, getDefaultTab )( MainNavigator )

Expo.registerRootComponent( AppContainer )
