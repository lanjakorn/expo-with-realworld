import Reactotron from 'reactotron-react-native'
import { composeWithDevTools } from 'redux-devtools-extension'
import { createSagaMonitor } from 'redux-saga-devtools'

import { applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'

import rootReducers from 'rootReducer'
import rootSagas from 'rootSaga'

const sagaMonitor = createSagaMonitor()
const sagaMiddleware = createSagaMiddleware( { sagaMonitor } )

const store = Reactotron.createStore(
  rootReducers,
  {},
  composeWithDevTools( applyMiddleware( sagaMiddleware ) )
)

sagaMiddleware.run( rootSagas )

export default store
