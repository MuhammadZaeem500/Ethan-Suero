import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const menuItems = ["Home", "Work", "Contact"];

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center", width: 250, pt: 4 }}>
      <List>
        {menuItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemText 
              primary={item} 
              sx={{ 
                textAlign: "center", 
                my: 1, 
                "& .MuiTypography-root": { 
                  fontFamily: "Inter, sans-serif", 
                  fontWeight: 500 
                } 
              }} 
            />
          </ListItem>
        ))}
        <ListItem sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
          <Button
            variant="text"
            sx={{
              fontFamily: "Inter, sans-serif",
              fontWeight: 500,
              color: "white",
              backgroundColor: "black",
              width: "160px",
              height: "45px",
              borderRadius: "8px",
              textTransform: "none",
              "&:hover": { backgroundColor: "#333" },
            }}
          >
            Schedule a Call
          </Button>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <AppBar
      position="static"
      color="transparent"
      sx={{
        backgroundColor: "white",
        boxShadow: "none",
        borderBottom: "none",
        outline: "none",
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          px: { xs: 2, md: 6 },
        }}
      >
        {/* Logo Container using standard Material-UI Box component image */}
        <Box
          component="img"
          src="/images/EthanSueroLogo.svg"
          alt="Logo"
          sx={{
            width: "92px",
            height: "30px",
            objectFit: "contain",
            margin: { xs: "0px", md: "0px 60px" },
          }}
        />

        <Box
          sx={{
            display: { xs: "none", md: "flex" },
            height: "40px",
            padding: "22.66px",
            justifyContent: "center",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <Typography
            variant="body1"
            sx={{ fontFamily: "Inter, sans-serif", fontWeight: 500, padding: "14.5px", cursor: "pointer", color: "text.primary" }}
          >
            Home
          </Typography>
          <Typography
            variant="body1"
            sx={{ fontFamily: "Inter, sans-serif", fontWeight: 500, padding: "17.19px", cursor: "pointer", color: "text.primary" }}
          >
            Work
          </Typography>
          <Typography
            variant="body1"
            sx={{ fontFamily: "Inter, sans-serif", fontWeight: 500, padding: "18.33px", cursor: "pointer", color: "text.primary" }}
          >
            Contact
          </Typography>
          <Button
            variant="text"
            sx={{
              fontFamily: "Inter, sans-serif",
              fontWeight: 500,
              color: "white",
              backgroundColor: "black",
              width: "189px",
              height: "50px",
              borderRadius: "8px",
              textTransform: "none",
              "&:hover": { backgroundColor: "#333" },
            }}
          >
            Schedule a Call
          </Button>
        </Box>

        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          sx={{ display: { md: "none" }, color: "black" }}
        >
          <MenuIcon />
        </IconButton>
      </Toolbar>

      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
        sx={{
          display: { xs: "block", md: "none" },
          "& .MuiDrawer-paper": { boxSizing: "border-box", width: 250 },
        }}
      >
        {drawer}
      </Drawer>
    </AppBar>
  );
}

export default Navbar;