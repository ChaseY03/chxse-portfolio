import "../../App.css";
import { Container, IconButton, Stack, Typography } from '@mui/material';

export default function Footer(){

    return(
<Container
  maxWidth="xl"
  sx={{
    textAlign: 'center',
    py: 2,
    borderTop: '1px solid rgba(255,255,255,0.1)',
    mt: 4,
  }}
>
  <Typography> 2025 Chase Yang</Typography>
</Container>

);
}

//©