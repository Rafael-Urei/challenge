import { createStore, applyMiddleware } from "redux";
import thunk from 'redux-thunk'
import { rootReducer } from "./rootReducer";
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['user'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default function store() {
    const store = createStore(persistedReducer, applyMiddleware(thunk));
    const persistor = persistStore(store);
    return {store, persistor};
};