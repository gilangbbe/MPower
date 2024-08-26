import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import ItemCardStyles from './styles/ItemCard';
import DeleteIcon from '@mui/icons-material/Delete';
import { useDispatch } from 'react-redux';
import { deleteFile } from '../redux/reducers/fileSlice';

export default function ItemCard({ file }) {
  const dispatch = useDispatch();
  const onClick = () => {
    dispatch(deleteFile(file.id));
  };
  return (
    <Card sx={ItemCardStyles.card}>
      <CardContent sx={ItemCardStyles.cardContent}>
        <PictureAsPdfIcon color="primary" sx={ItemCardStyles.icon} />
        <Typography sx={{ fontSize: 14 }} color="text.secondary">
          {file.file.name.replace('.pdf', '').length > 29
            ? file.file.name.replace('.pdf', '').slice(0, 22) + '.. .pdf'
            : file.file.name}
        </Typography>
      </CardContent>
      <CardActions sx={ItemCardStyles.cardAction}>
        <IconButton sx={{ padding: 0 }} size="medium" onClick={onClick}>
          <DeleteIcon fontSize="inherit" />
        </IconButton>
      </CardActions>
    </Card>
  );
}
