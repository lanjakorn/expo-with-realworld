// import './ReactotronConfig' // build android must comment
import Expo, { AppLoading } from 'expo'
import React from 'react'
import { Provider, connect } from 'react-redux'
import { cacheAssetsAsync } from 'utilities'
// import store from 'store' // build android must comment and turn off comment below
import store from 'store/configureStore.prod'

import { LayoutAnimation, StatusBar, View } from 'react-native'
import { FontAwesome } from '@expo/vector-icons'
import { MainNavigator } from 'navigation'
import { getDefaultTab } from '@screens/SettingsScreen'
import WelcomeScreen from '@screens/WelcomeScreen'
import { firebase } from 'services'
import { Colors } from 'constants'

class AppContainer extends React.Component {
  constructor( props ) {
    super( props )
    this.state = {
      appIsReady: false,
      isWelcome: true,
    }
  }

  componentDidMount() {
    setTimeout(
      () =>
        this.setState( state => ( {
          isWelcome: !state.isWelcome,
        } ) ),
      2000
    )
  }

  componentWillUpdate() {
    if ( this.state.appIsReady ) {
      LayoutAnimation.configureNext( {
        duration: 400,
        create: {
          type: LayoutAnimation.Types.linear,
          property: LayoutAnimation.Properties.opacity,
          springDamping: 0.7,
        },
        update: {
          type: LayoutAnimation.Types.spring,
          springDamping: 0.7,
        },
      } )
    }
  }

  async componentWillMount() {
    await this._loadAssetsAsync()
    await firebase.firebaseApp
  }

  async _loadAssetsAsync() {
    try {
      await cacheAssetsAsync( {
        files: [ require( './assets/htmls/companyProfile.html' ) ],
        images: [
          require( './assets/images/business-item-1.png' ),
          require( './assets/images/business-item-2.png' ),
          require( './assets/images/expo-wordmark.png' ),
          require( './assets/images/house-menu-item.png' ),
          require( './assets/images/ricoh-logo-red.jpg' ),
          require( './assets/images/ricoh-logo-welcome.png' ),
          require( './assets/images/ricoh-logo-white.png' ),
          require( './assets/images/ricoh-logo.png' ),
          require( './assets/images/ricoh-logo.png' ),
          require( './assets/images/vertical-menu-item.png' ),
          require( './assets/images/vertical-menu/company-profile-2x.jpg' ),
          require( './assets/images/vertical-menu/products-2x.jpg' ),
          require( './assets/images/vertical-menu/ricoh-eshop-2x.jpg' ),
          require( './assets/images/vertical-menu/ricoh-house-2x.jpg' ),
          require( './assets/images/vertical-menu/services-2x.jpg' ),
        ],
        fonts: [
          FontAwesome.font,
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
        <View
          style={
            this.state.isWelcome
              ? {
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: Colors.tintColor,
              }
              : {
                flex: 1,
              }
          }
        >
          <StatusBar barStyle="light-content" />
          <Provider store={store}>
            {this.state.isWelcome ? (
              <WelcomeScreen />
            ) : (
              <MainAppNavigator screenProps={'expo-with-realworld'} />
            )}
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
    nav: state.nav,
  }
}

const MainAppNavigator = connect( mapStateToProps, getDefaultTab )(
  MainNavigator.NavTracker
)

Expo.registerRootComponent( AppContainer )
