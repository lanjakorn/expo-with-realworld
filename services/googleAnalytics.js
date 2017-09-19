import { Constants } from 'expo'
import { Platform } from 'react-native'
import config from 'config'

class Tracker {
  constructor( trackingId, appName, appVersion ) {
    this.trackingId = trackingId
    this.appName = appName
    this.appVersion = appVersion
  }

  toQueryString = obj => {
    var str = []

    for ( var p in obj ) {
      if ( obj.hasOwnProperty( p ) && obj[ p ] ) {
        str.push( encodeURIComponent( p ) + '=' + encodeURIComponent( obj[ p ] ) )
      }
    }

    return str.join( '&' )
  }

  trackScreenView = screenName => {
    let hit = {
      v: 1,
      tid: this.trackingId, // Tracking ID
      cid: Constants.deviceId, // Anonymous Client ID.
      sid: Constants.sessionId, // Anonymous Session ID.
      t: 'screenview', // Screenview hit type.
      an: this.appName, // App name.
      av: this.appVersion, // App version.
      cd: screenName, // Screen name / content description.
      dn: Constants.deviceName, // Device name.
      dm:
        Platform.OS === 'android' ? Platform.OS : Constants.platform.ios.model, // Device model.
      on: Platform.OS === 'android' ? Platform.OS : 'iOS', // Operating system.
      ov: Platform.Version, // Operating system version.
      ds: !Constants.isDevice, // If app is running on a device.
      ao: Constants.appOwnership, // Returns expo, standalone, or guest.
      ev: Constants.expoVersion, // Expo version.
    }

    const options = {
      method: 'get',
    }

    const url =
      'https://www.google-analytics.com/collect?' +
      `${ this.toQueryString( hit ) }` +
      `&z=${ Math.round( Math.random() * 1e8 ) }` // Cache buster.
    //console.log( 'trackScreenView', url )
    return fetch( url, options )
  }

  trackEvent = ( eventCategory, eventAction, eventLabel ) => {
    let hit = {
      v: 1,
      tid: this.trackingId, // Tracking ID
      cid: Constants.deviceId, // Anonymous Client ID.
      t: 'event', // Screenview hit type.
      an: this.appName, // App name.
      av: this.appVersion, // App version.
      ec: eventCategory,
      ea: eventAction,
      el: eventLabel,
      dn: Constants.deviceName, // Device name.
      dm:
        Platform.OS === 'android' ? Platform.OS : Constants.platform.ios.model, // Device model.
      on: Platform.OS === 'android' ? Platform.OS : 'iOS', // Operating system.
      ov: Platform.Version, // Operating system version.
      ds: !Constants.isDevice, // If app is running on a device.
      ao: Constants.appOwnership, // Returns expo, standalone, or guest.
    }

    const options = {
      method: 'get',
    }

    const url =
      'https://www.google-analytics.com/collect?' +
      `${ this.toQueryString( hit ) }` +
      `&z=${ Math.round( Math.random() * 1e8 ) }` // Cache buster.
    //console.log( 'trackEvent', url )
    return fetch( url, options )
  }
}

const trackEvent = ( { eventCategory, eventAction, eventLabel } ) => {
  const tracker = new Tracker( config.ga, config.app.name, config.app.version )
  tracker.trackEvent( eventCategory, eventAction, eventLabel )
}

export { Tracker, trackEvent }
