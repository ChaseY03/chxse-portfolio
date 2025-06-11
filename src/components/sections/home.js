import "../../App.css";
import React, { useEffect, useState } from "react";
import { Container, Typography, Button, IconButton } from "@mui/material";
import { motion, useAnimation } from "framer-motion";
import RocketIcon from "@mui/icons-material/Rocket";
import RocketScene from "../rocketscene";

export default function Home() {
  const controls = useAnimation();

  useEffect(() => {
    function onScroll() {
      const scrollY = window.scrollY;

      if (scrollY < 200) {
        controls.start({ opacity: 1, pointerEvents: "auto" });
      } else {
        controls.start({ opacity: 0, pointerEvents: "none" });
      }
    }

    window.addEventListener("scroll", onScroll);
    onScroll(); // initial check

    return () => window.removeEventListener("scroll", onScroll);
  }, [controls]);

  const scrollToSkills = () => {
    const skillsSection = document.getElementById("skills");
    if (skillsSection) {
      skillsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      style={{
        position: "relative",
        overflow: "hidden",
        minHeight: "100vh",
      }}
    >
      <div className="rocket-container">
        <RocketScene />
      </div>
      <Container
        maxWidth="xl"
        sx={{
          paddingTop: 15,
          color: "#c9d1d9",
          zIndex: 1,
          position: "relative",
        }}
      >
        <Typography
          variant="h2"
          gutterBottom
          sx={{ fontFamily: "Space Grotesk, monospace" }}
        >
          Hi, I'm Chase
        </Typography>
        <Typography variant="h6" sx={{ maxWidth: "500px" }}>
          Specializing in full-stack development with a focus on UI/UX design.
        </Typography>
        <Typography sx={{color: "yellow"}}>Site is under construction, incoming!</Typography>

        <Button
          variant="outlined"
          sx={{
            margin: "20px 0px",
            color: "#d32f2f",
            borderColor: "#d32f2f",
            "&:hover": {
              backgroundColor: "#d32f2f",
              color: "white",
              borderColor: "#d32f2f",
            },
          }}
        >
          Download CV
        </Button>
        <motion.div
          animate={controls}
          initial={{ opacity: 1 }}
          style={{
            position: "fixed",
            bottom: 20,
            left: "50%",
            transform: "translateX(-50%)",
            zIndex: 1000,
          }}
        >
          <IconButton onClick={scrollToSkills} sx={{color: "white", transform:"scaleY(-1)"}}>
            <RocketIcon fontsize="large" sx={{color: "#d32f2f"}}/>
          </IconButton>
        </motion.div>
      </Container>
    </div>
  );
}
