import '../App.css';
import { Container, Typography } from '@mui/material';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <div
      style={{
        position: 'relative',
        overflow: 'hidden',
        minHeight: '100vh',
        backgroundColor: '#0d1117',
      }}
    >
      {/* Animated tech grid background
      <motion.div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '200%',
          height: '200%',
          backgroundImage:
            'linear-gradient(#1a1f2a 1px, transparent 1px), linear-gradient(to right, #1a1f2a 1px, transparent 1px)',
          backgroundSize: '40px 40px',
          backdropFilter: 'blur(1px)',
          zIndex: -1,
        }}
        animate={{ backgroundPosition: ['0px 0px', '40px 40px'] }}
        transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
      /> */}

      {/* 🔲 Page content */}
      <Container maxWidth="xl" sx={{ paddingTop: 15, color: '#c9d1d9' }}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }} // nice ease-out curve
        >
          <Typography
            variant="h2"
            gutterBottom
            sx={{ fontFamily: 'Space Grotesk, monospace' }}
          >
            Hi, I'm Chase
          </Typography>
          <Typography variant="h6" sx={{ maxWidth: '600px' }}>
            Computer Science graduate passionate about front-end development and UI/UX design.
          </Typography>
          <Typography>
            This page is under construction — explore the others in the meantime!
          </Typography>
        </motion.div>
      </Container>
    </div>
  );
}
