import Reactotron from 'reactotron-react-native'
import { composeWithDevTools } from 'redux-devtools-extension'
import logger from 'redux-logger'
import { createStore, compose, applyMiddleware } from 'redux'
import createSagaMiddleware, { END } from 'redux-saga'

import thunk from 'redux-thunk'
import reducers from 'rootReducer'
import sagas from 'rootSaga'

const sagaMonitor = Reactotron.createSagaMonitor()
const sagaMiddleware = createSagaMiddleware( { sagaMonitor } )

const store = Reactotron.createStore(
  reducers,
  {},
  composeWithDevTools( applyMiddleware( thunk, logger, sagaMiddleware ) )
)

sagaMiddleware.run( sagas )

export default store
