import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuid } from 'uuid';

export const fileSlice = createSlice({
  name: 'file',
  initialState: {
    files: null,
    filesUploaded: [],
  },
  reducers: {
    addFiles: (state, action) => {
      state.files = action.payload;
    },
    uploadFiles: (state) => {
      state.files.forEach((e) => {
        state.filesUploaded.push({
          file: e,
          completed: false,
          id: uuid(),
        });
      });
      state.files = null;
    },
    deleteFile: (state, action) => {
      state.filesUploaded = state.filesUploaded.filter(
        (file) => file.id !== action.payload
      );
    },
  },
});

export const { addFiles, uploadFiles, deleteFile } = fileSlice.actions;

export default fileSlice.reducer;
