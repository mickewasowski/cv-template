import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore} from "redux-persist";

import certificatesReducer from './slices/certificatesSlice';
import contactsReducer from './slices/contactsSlice';
import educationReducer from './slices/educationSlice';
import experienceReducer from './slices/experienceSlice';
import headerReducer from './slices/headerSlice';
import hobbiesReducer from './slices/hobbiesSlice';
import languagesReducer from './slices/languagesSlice';
import skillsReducer from './slices/skillsSlice';
import templateReducer from './slices/templateSlice';
import websitesReducer from './slices/websitesSlice';
import uiReducer from './slices/uiSlice';

const rootReducer = combineReducers({
    certificates: certificatesReducer,
    contacts: contactsReducer,
    education: educationReducer,
    experience: experienceReducer,
    header: headerReducer,
    hobbies: hobbiesReducer,
    languages: languagesReducer,
    skills: skillsReducer,
    template: templateReducer,
    websites: websitesReducer,
    ui: uiReducer,
});

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware({
      serializableCheck: false,
    })
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
