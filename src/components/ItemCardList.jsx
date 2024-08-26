import * as React from 'react';
import Box from '@mui/material/Box';
import ItemCard from './ItemCard';
import ItemCardListStyles from './styles/ItemCardList';
import { useSelector } from 'react-redux';

export default function ItemCardList() {
  const filesUploaded = useSelector((state) => state.file.filesUploaded);
  return (
    <Box sx={ItemCardListStyles}>
      {filesUploaded.map((file, index) => {
        return <ItemCard key={index} file={file} />;
      })}
    </Box>
  );
}
