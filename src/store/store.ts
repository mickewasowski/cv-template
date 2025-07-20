import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import certificatesReducer from './slices/certificatesSlice';
import contactsReducer from './slices/contactsSlice';
import educationReducer from './slices/educationSlice';
import experienceReducer from './slices/experienceSlice';
import headerReducer from './slices/headerSlice';
import hobbiesReducer from './slices/hobbiesSlice';
import languagesReducer from './slices/languagesSlice';
import skillsReducer from './slices/skillsSlice';
import summaryReducer from './slices/summarySlice';
import templateReducer from './slices/templateSlice';
import websitesReducer from './slices/websitesSlice';
import uiReducer from './slices/uiSlice';

export const store = configureStore({
  reducer: {
    certificates: certificatesReducer,
    contacts: contactsReducer,
    education: educationReducer,
    experience: experienceReducer,
    header: headerReducer,
    hobbies: hobbiesReducer,
    languages: languagesReducer,
    skills: skillsReducer,
    summary: summaryReducer,
    template: templateReducer,
    websites: websitesReducer,
    ui: uiReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
