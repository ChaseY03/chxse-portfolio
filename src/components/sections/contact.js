import "../../App.css";

import { Container, IconButton, Stack, Typography } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default function Contact() {
  return (
    <Container maxWidth="xl" sx={{ textAlign: 'center', pt: 3 }}>
      <h1>
        Want to contact me?
      </h1>

      {/* Social Icons */}
      <Stack direction="row" spacing={2} justifyContent="center" sx={{ mb: 4 }}>
        <IconButton
          component="a"
          href="https://github.com/ChaseY03"
          target="_blank"
          rel="noopener noreferrer"
          sx={{ color: 'white' }}
        >
          <GitHubIcon fontSize="large" />
        </IconButton>

        <IconButton
          component="a"
          href="https://linkedin.com/in/Chase-Yang"
          target="_blank"
          rel="noopener noreferrer"
          sx={{ color: 'white' }}
        >
          <LinkedInIcon fontSize="large" />
        </IconButton>
      </Stack>

    </Container>
  );
}
