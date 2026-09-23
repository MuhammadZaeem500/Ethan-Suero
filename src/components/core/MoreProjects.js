import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

function Projects() {
  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "100vh",
        backgroundColor: "#000000", // Background color set to black
        display: "flex",
        flexDirection: { xs: "column", md: "row" }, // Stack vertically on mobile, side-by-side on desktop
        alignItems: { xs: "flex-start", md: "center" },
        justifyContent: "flex-start",
        boxSizing: "border-box",
        p: { xs: 3, sm: 4, md: 6 }, // Responsive padding around the container
        overflowX: "hidden", // Prevents horizontal scrolling on small screens
      }}
    >
      {/* First Typography */}
      <Typography
        sx={{
          width: { xs: "100%", md: "128px" },
          fontSize: "12px",
          fontWeight: 500,
          letterSpacing: "0.1em",
          color: "#ffffff", // Text color set to white
          mb: { xs: 4, md: 0 },
          ml: { xs: 0, md: "50px" },
        }}
      >
        MORE PROJECTS
      </Typography>

      {/* Second Typography */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          maxWidth: "1000px",
          mt: { xs: 0, md: "240px" },
        }}
      >
        {/* Project 1 */}
        <Box sx={{ width: "100%", my: 2 }}>
          <Box
            component="hr"
            sx={{
              width: "100%",
              maxWidth: "800px",
              opacity: "0.3",
              border: "0.5px solid",
              borderColor: "#ffffff", // Border color set to white
              ml: { xs: 0, md: "auto" },
            }}
          />
          <Typography
            variant="h1"
            sx={{
              width: "100%",
              fontSize: { xs: "1.8rem", sm: "2.5rem", md: "70px" },
              fontWeight: 500,
              textAlign: { xs: "left", md: "right" },
              letterSpacing: "0.08em",
              color: "#ffffff", // Text color set to white
              mt: 1,
            }}
          >
            HUNTER YEANY
          </Typography>
        </Box>

        {/* Project 2 */}
        <Box sx={{ width: "100%", my: 2 }}>
          <Box
            component="hr"
            sx={{
              width: "100%",
              maxWidth: "800px",
              opacity: "0.3",
              border: "0.5px solid",
              borderColor: "#ffffff", // Border color set to white
              ml: { xs: 0, md: "auto" },
            }}
          />
          <Typography
            variant="h1"
            sx={{
              width: "100%",
              fontSize: { xs: "1.8rem", sm: "2.5rem", md: "70px" },
              fontWeight: 500,
              textAlign: { xs: "left", md: "center" },
              letterSpacing: "0.08em",
              color: "#ffffff", // Text color set to white
              mt: 1,
            }}
          >
            VELOCE
          </Typography>
        </Box>

        {/* Project 3 */}
        <Box sx={{ width: "100%", my: 2 }}>
          <Box
            component="hr"
            sx={{
              width: "100%",
              maxWidth: "800px",
              opacity: "0.3",
              border: "0.5px solid",
              borderColor: "#ffffff", // Border color set to white
              ml: { xs: 0, md: "auto" },
            }}
          />
          <Typography
            variant="h1"
            sx={{
              width: "100%",
              fontSize: { xs: "1.8rem", sm: "2.5rem", md: "70px" },
              letterSpacing: "0.08em",
              fontWeight: 500,
              textAlign: { xs: "left", md: "center" },
              color: "#ffffff", // Text color set to white
              mt: 1,
            }}
          >
            WALKER
          </Typography>
          <Box
            component="hr"
            sx={{
              width: "100%",
              maxWidth: "800px",
              opacity: "0.3",
              border: "0.5px solid",
              borderColor: "#ffffff", // Border color set to white
              mt: 2,
              ml: { xs: 0, md: "auto" },
            }}
          />
        </Box>
      </Box>
    </Box>
  );
}

export default Projects;