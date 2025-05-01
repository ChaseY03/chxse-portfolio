import '../App.css';
import { Container, IconButton, Stack, Typography } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default function Contact() {
  return (
    <Container maxWidth="xl" style={{ textAlign: 'center', paddingTop: '3rem' }}>
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
          sx={{ color: 'black' }}
        >
          <GitHubIcon fontSize="large" />
        </IconButton>

        <IconButton
          component="a"
          href="https://linkedin.com/in/Chase-Yang"
          target="_blank"
          rel="noopener noreferrer"
          sx={{ color: 'black' }}
        >
          <LinkedInIcon fontSize="large" />
        </IconButton>
      </Stack>

      {/* Contact Form placeholder */}
      <Typography variant="body1">
        [Contact form coming soon]
      </Typography>
    </Container>
  );
}
