import { MuiFileInput } from 'mui-file-input';
import * as React from 'react';
import CloseIcon from '@mui/icons-material/Close';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import { useSelector, useDispatch } from 'react-redux';
import { addFiles } from '../redux/reducers/fileSlice';

export default function FileInput() {
  const files = useSelector((state) => state.file.files);
  const dispatch = useDispatch();
  const handleChange = (event) => {
    dispatch(addFiles(event)); // Dispatch the action with the input value as the payload
  };
  return (
    <MuiFileInput
      id="pdf-input"
      size="small"
      value={files}
      sx={{ paddingBottom: 2 }}
      placeholder="PDF Files"
      onChange={handleChange}
      clearIconButtonProps={{
        title: 'Remove',
        children: <CloseIcon fontSize="small" />,
      }}
      InputProps={{
        inputProps: {
          accept: '.pdf',
        },
        startAdornment: <AttachFileIcon />,
      }}
      hideSizeText
      multiple
    />
  );
}
