import {persistReducer, persistStore} from 'redux-persist';
import rootReducer from '../reducers/rootReducer';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit';

const persistedConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistedConfig, rootReducer);

const middlewares = getDefaultMiddleware({
  immutableCheck: false,
  serializableCheck: false,
});

const store = configureStore({
  reducer: persistedReducer,
  middleware: middlewares,
});

const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;

export {store, persistor};
