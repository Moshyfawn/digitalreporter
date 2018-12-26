import { combineReducers, createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'remote-redux-devtools'
import { enableBatching } from 'redux-batched-actions'
import createSagaMiddleware from 'redux-saga'
import { createLogger } from 'redux-logger'

import rootSaga from './saga'

import userReducer from './user';
import articlesReducer from './articles'

const logger = createLogger({
  collapsed: true,
  duration: true
})

// ---
// REDUCERS
// ---

export default function configureStore () {
  const sagaMiddleware = createSagaMiddleware()
  const middlewares = [sagaMiddleware, logger]

  // TODO: check to disable by default on prod
  const enhancer = composeWithDevTools(
    applyMiddleware(...middlewares)
  )

  const rootReducer = enableBatching(combineReducers({
    userReducer, articlesReducer
  }))

  const store = createStore(rootReducer, enhancer)

  sagaMiddleware.run(rootSaga)

  return store
}
