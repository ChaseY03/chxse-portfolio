import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Box,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useMediaQuery, useTheme } from "@mui/material";
import { motion } from "framer-motion";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "Projects", to: "/projects" },
  { label: "Contact", to: "/contact" },
];

const MotionButton = motion(Button);

const Navbar = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuClick = (event) => setAnchorEl(event.currentTarget);
  const handleMenuClose = () => setAnchorEl(null);

  return (
    <AppBar
      data-darkreader-ignore
      position="sticky"
      elevation={0}
      sx={{
        backgroundColor: "rgba(255, 255, 255, 0.05)", // Transparent white
        backdropFilter: "blur(12px)", // Blur for glass effect
        borderBottom: "1px solid rgba(255,255,255,0.1)",
        boxShadow: "0 0 12px rgba(255,255,255,0.05)",
      }}
    >
      <Toolbar>
        <Box sx={{ display: "flex", alignItems: "center", flexGrow: 1 }}>
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Typography
              variant="h6"
              component={Link}
              to="/"
              sx={{
                textDecoration: "none",
                color: "#ffffff",
                fontWeight: "bold",
                letterSpacing: 1,
              }}
            >
              Chxse
            </Typography>
          </motion.div>
        </Box>

        {isSmallScreen ? (
          <>
            <IconButton color="inherit" onClick={handleMenuClick}>
              <MenuIcon />
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
            >
              {navLinks.map(({ label, to }) => (
                <MenuItem
                  key={label}
                  onClick={handleMenuClose}
                  component={Link}
                  to={to}
                >
                  {label}
                </MenuItem>
              ))}
            </Menu>
          </>
        ) : (
          <Box sx={{ display: "flex", gap: 3 }}>
            {navLinks.map(({ label, to }) => (
              <MotionButton
                key={label}
                component={Link}
                to={to}
                color="inherit"
                sx={{
                  fontWeight: "500",
                  color: "#f0f0f0",
                  position: "relative",
                }}
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {label}
              </MotionButton>
            ))}
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
