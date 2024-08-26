import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import TopContainer from './TopContainer.jsx';
import BaseContainerStyle from './styles/BaseContainer.js';
import InputBox from './InputBox.jsx';
import ItemCardList from './ItemCardList.jsx';
import { Box } from '@mui/material';

export default function BaseContainer() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container disableGutters sx={BaseContainerStyle}>
        <Stack>
          <TopContainer />
          <ItemCardList />
          <InputBox />
        </Stack>
      </Container>
    </React.Fragment>
  );
}
