import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'

import rootReducers from 'rootReducer'
import rootSagas from 'rootSaga'

const sagaMiddleware = createSagaMiddleware()
const store = createStore( rootReducers, {}, applyMiddleware( sagaMiddleware ) )

sagaMiddleware.run( rootSagas )

export default store
