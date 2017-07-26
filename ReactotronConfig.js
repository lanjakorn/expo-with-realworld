import Reactotron from 'reactotron-react-native'
import { reactotronRedux } from 'reactotron-redux'
import sagaPlugin from 'reactotron-redux-saga'

console.tron = Reactotron
Reactotron.configure()
  .useReactNative()
  .connect()
  .use( reactotronRedux() )
  .use( sagaPlugin() )
