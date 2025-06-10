import "../App.css";
import { Container, Typography } from "@mui/material";
import { motion } from "framer-motion";
import RocketScene from "./rocketscene";

export default function Home() {
  return (
    <div
      style={{
        position: "relative",
        overflow: "hidden",
        minHeight: "100vh",
        backgroundColor: "#0d1117",
      }}
    >
      <RocketScene />
      {/* 🔲 Page content */}
      <Container maxWidth="xl" sx={{ paddingTop: 15, color: '#c9d1d9', zIndex: 1, position: 'relative' }}>
        
        <Typography
          variant="h2"
          gutterBottom
          sx={{ fontFamily: "Space Grotesk, monospace" }}
        >
          Hi, I'm Chase
        </Typography>
        <Typography variant="h6" sx={{ maxWidth: "600px" }}>
          Computer Science graduate specializing in full-stack development with
          a focus on UI/UX design.
        </Typography>
        <Typography>
          This page is under construction — explore the others in the meantime!
        </Typography>
      </Container>
    </div>
  );
}
