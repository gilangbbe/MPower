import { configureStore } from '@reduxjs/toolkit';
import fileReducer from './reducers/fileSlice';

export default configureStore({
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // Ignore these action types
        ignoredActions: ['file/addFiles', 'file/uploadFiles'],
        ignoredPaths: ['file.files', 'file.filesUploaded'],
      },
    }),
  reducer: {
    file: fileReducer,
  },
});
