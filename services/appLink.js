import { Linking, Platform } from 'react-native'

const maybeOpenURL = async (
  url,
  { appName, appStoreId, appStoreLocale, playStoreId }
) => {
  Linking.openURL( url ).catch( err => {
    if ( err.code === 'EUNSPECIFIED' ) {
      if ( Platform.OS === 'ios' ) {
        const locale =
          typeof appStoreLocale === 'undefined' ? 'us' : appStoreLocale

        Linking.openURL( `https://itunes.apple.com/${ locale }/app/${ appStoreId }` )
      } else {
        Linking.openURL(
          `https://play.google.com/store/apps/details?id=${ playStoreId }`
        )
      }
    } else {
      throw new Error( `Could not open ${ appName }. ${ err.toString() }` )
    }
  } )
}

const openInStore = async ( appStoreId, appStoreLocale, playStoreId ) => {
  if ( Platform.OS === 'ios' ) {
    Linking.openURL(
      `https://itunes.apple.com/${ appStoreLocale }/app/${ appStoreId }`
    )
  } else {
    Linking.openURL(
      `https://play.google.com/store/apps/details?id=${ playStoreId }`
    )
  }
}

const openUrl = async url => Linking.openURL( url )

export { maybeOpenURL, openInStore, openUrl }
