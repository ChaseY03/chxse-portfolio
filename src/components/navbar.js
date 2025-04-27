import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AppBar, Toolbar, Typography, Button, IconButton, Menu, MenuItem, Box } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useMediaQuery, useTheme } from "@mui/material";

const Navbar = () => {
  // Detect if the screen is small (mobile or tablet)
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="sticky" sx={{ backgroundColor: '#EE2E31'}}>
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Chxse
        </Typography>
        {/* If the screen is small, show the hamburger menu */}
        {isSmallScreen ? (
          <div>
            <IconButton color="inherit" onClick={handleMenuClick}>
              <MenuIcon />
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
            >
              <MenuItem onClick={handleMenuClose} component={Link} to="/">Home</MenuItem>
              <MenuItem onClick={handleMenuClose} component={Link} to="/projects">Projects</MenuItem>
              <MenuItem onClick={handleMenuClose} component={Link} to="/contact">Contact</MenuItem>
            </Menu>
          </div>
        ) : (
          // If the screen is larger, show the regular buttons
          <Box sx={{ display: "flex", gap: 2 }}>
          <Button color="inherit" component={Link} to="/">
            Home
          </Button>
          <Button color="inherit" component={Link} to="/projects">
            Projects
          </Button>
          <Button color="inherit" component={Link} to="/contact">
            Contact
          </Button>
        </Box>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
