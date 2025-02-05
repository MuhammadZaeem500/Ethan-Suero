import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

function Navbar() {
  return (
    <AppBar
      position="static"
      color="transparent"
      sx={{
        backgroundColor: "white",
        boxShadow: "none", // Removes the shadow
        borderBottom: "none", // Removes the border line at the bottom
        outline: "none", // Removes any outline around the AppBar
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {/* LOGO */}
        <Box sx={{ margin: "0px 60px" }}>
          <img
            src="/images/logo.svg"
            alt="Logo"
            style={{ height: "30px", width: "92px" }}
          />
        </Box>

        {/* NAVBAR */}
        <Box
          sx={{
            display: "flex",
            height: "40px",
            padding: "22.66px",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography
            variant="body1"
            sx={{ fontFamily: "inter", fontWeight: "500", padding: "14.5px" }}
          >
            Home
          </Typography>
          <Typography
            variant="body1"
            sx={{ fontFamily: "inter", fontWeight: "500", padding: "17.19px" }}
          >
            Work
          </Typography>
          <Typography
            variant="body1"
            sx={{ fontFamily: "inter", fontWeight: "500", padding: "18.33px" }}
          >
            Contact
          </Typography>
          <Button
            variant="text"
            sx={{
              fontFamily: "inter",
              fontWeight: "500",
              color: "white",
              backgroundColor: "black",
              width: "189px",
              height: "50px",
              borderRadius: "8px",
            }}
          >
            Schedule a Call
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
