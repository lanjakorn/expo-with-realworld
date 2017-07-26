import Reactotron from 'reactotron-react-native'
import { composeWithDevTools } from 'redux-devtools-extension'
import { createSagaMonitor } from 'redux-saga-devtools'

// import logger from 'redux-logger'
import { createStore, compose, applyMiddleware } from 'redux'
import createSagaMiddleware, { END } from 'redux-saga'

import reducers from 'rootReducer'
import sagas from 'rootSaga'

const sagaMonitor = createSagaMonitor()
const sagaMiddleware = createSagaMiddleware( { sagaMonitor } )

const store = Reactotron.createStore(
  reducers,
  {},
  composeWithDevTools( applyMiddleware( sagaMiddleware ) )
)

sagaMiddleware.run( sagas )

export default store
