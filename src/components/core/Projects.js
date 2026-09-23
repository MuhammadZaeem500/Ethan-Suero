import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

function Projects() {
  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "100vh",
        backgroundColor: "#000000",
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        alignItems: { xs: "flex-start", md: "center" },
        justifyContent: "flex-start",
        boxSizing: "border-box",
        p: { xs: 3, sm: 4, md: 6 },
        overflowX: "hidden",
      }}
    >
      <Typography
        sx={{
          width: { xs: "100%", md: "128px" },
          fontFamily: "'Ubuntu', sans-serif",
          fontSize: "12px",
          fontWeight: 500,
          letterSpacing: "0.1em",
          color: "#ffffff",
          mb: { xs: 4, md: 0 },
          ml: { xs: 0, md: "50px" },
        }}
      >
        MORE PROJECTS
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          maxWidth: "1000px",
          mt: { xs: 0, md: "240px" },
        }}
      >
        <Box sx={{ width: "100%", my: 2 }}>
          <Box
            component="hr"
            sx={{
              width: "100%",
              maxWidth: "800px",
              opacity: "0.3",
              border: "0.5px solid",
              borderColor: "#ffffff",
              ml: { xs: 0, md: "auto" },
            }}
          />
          <Typography
            variant="h1"
            sx={{
              fontFamily: "'Ubuntu', sans-serif",
              fontSize: { xs: "1.8rem", sm: "2.5rem", md: "70px" },
              fontWeight: 500,
              textAlign: { xs: "left", md: "right" },
              letterSpacing: "0.08em",
              color: "#ffffff",
              mt: 1,
            }}
          >
            HUNTER YEANY
          </Typography>
        </Box>

        <Box sx={{ width: "100%", my: 2 }}>
          <Box
            component="hr"
            sx={{
              maxWidth: "800px",
              opacity: "0.3",
              border: "0.5px solid",
              borderColor: "#ffffff",
              ml: { xs: 0, md: "auto" },
            }}
          />
          <Typography
            variant="h1"
            sx={{
              fontFamily: "'Ubuntu', sans-serif",
              fontSize: { xs: "1.8rem", sm: "2.5rem", md: "70px" },
              fontWeight: 500,
              textAlign: { xs: "left", md: "center" },
              letterSpacing: "0.08em",
              color: "#ffffff",
              mt: 1,
            }}
          >
            VELOCE
          </Typography>
        </Box>

        <Box sx={{ width: "100%", my: 2 }}>
          <Box
            component="hr"
            sx={{
              maxWidth: "800px",
              opacity: "0.3",
              border: "0.5px solid",
              borderColor: "#ffffff",
              ml: { xs: 0, md: "auto" },
            }}
          />
          <Typography
            variant="h1"
            sx={{
              fontFamily: "'Ubuntu', sans-serif",
              fontSize: { xs: "1.8rem", sm: "2.5rem", md: "70px" },
              letterSpacing: "0.08em",
              fontWeight: 500,
              textAlign: { xs: "left", md: "center" },
              color: "#ffffff",

              mt: 1,
            }}
          >
            WALKER
          </Typography>
          <Box
            component="hr"
            sx={{
              maxWidth: "800px",
              opacity: "0.3",
              border: "0.5px solid",
              borderColor: "#ffffff",
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
