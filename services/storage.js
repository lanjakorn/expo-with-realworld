import { AsyncStorage } from 'react-native'

const loadAsyncStorage = async key => {
  try {
    const serializedState = await AsyncStorage.getItem( key )
    if ( serializedState === null ) {
      return null
    }
    return JSON.parse( serializedState )
  } catch ( err ) {
    return null
  }
}

const saveAsyncStorage = async ( key, value ) => {
  try {
    await AsyncStorage.setItem( key, JSON.stringify( value ) )
  } catch ( err ) {
    console.log( err )
  }
}

export { loadAsyncStorage, saveAsyncStorage }
