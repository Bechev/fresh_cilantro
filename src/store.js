export const store = createStore(bagReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()); 

export const reducers=combineReducers({
  bag: bagReducer,
  items: itemsReducer
})