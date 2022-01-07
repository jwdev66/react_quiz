import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import rootReducer from "./reducer";

const persistConfig = {
  key: 'g2i_trivia',
  storage,
}

const initialState = {};

const middleWare = [thunk];

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = createStore(
  persistedReducer,
  initialState,
  compose(applyMiddleware(...middleWare))
);

export const persistor = persistStore(store);