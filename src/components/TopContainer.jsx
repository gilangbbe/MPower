import * as React from 'react';
import TopContainerStyles from './styles/TopContainer';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import saly from '../assets/images/Saly-1.png';

export default function TopContainer() {
  return (
    <Container sx={TopContainerStyles.container}>
      <Box sx={TopContainerStyles.boxTypoAndImg}>
        <Box sx={TopContainerStyles.boxTypo}>
          <Typography variant="h6" fontSize={20} color={'white'} gutterBottom>
            MMP Request Checker
          </Typography>
          <Typography
            variant="body2"
            fontSize={10}
            color={'white'}
            gutterBottom
          >
            Welcome! Please insert the excel to compare with MMP PDF Files!
          </Typography>
        </Box>
        <Box component="img" src={saly}></Box>
      </Box>
    </Container>
  );
}
