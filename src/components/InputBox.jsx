import * as React from 'react';
import InputBoxStyles from './styles/InputBox';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import FileInput from './FileInput';
import Button from '@mui/material/Button';
import { useSelector, useDispatch } from 'react-redux';
import { uploadFiles } from '../redux/reducers/fileSlice';

const { useEffect } = React;

export default function InputBox() {
  const filesUploaded = useSelector((state) => state.file.filesUploaded);
  const dispatch = useDispatch();
  const onClick = () => {
    dispatch(uploadFiles());
  };
  return (
    <Box sx={InputBoxStyles}>
      <Typography variant="h6" fontSize={13} color={'black'} gutterBottom>
        Welcome to <span style={{ color: '#0089ED' }}>MPower</span>
      </Typography>
      <Typography variant="h5" color={'black'} gutterBottom>
        Input
      </Typography>
      <FileInput />
      <Button variant="contained" onClick={onClick} sx={{ width: '100%' }}>
        Upload
      </Button>
    </Box>
  );
}
