import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

function About() {
  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: "1440px",
        mx: "auto",
        px: { xs: 3, sm: 6, md: "150px" },
        py: { xs: 8, md: "120px" },
        backgroundColor: "#FFFFFF",
        boxSizing: "border-box",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "flex-start",
          gap: { xs: 3, md: 10 },
        }}
      >
        <Box
          sx={{
            minWidth: { md: "100px" },
            pt: { md: "4px" }, 
          }}
        >
          <Typography
            sx={{
              fontFamily: "'Ubuntu', sans-serif",
              fontSize: "14px",
              fontWeight: 500,
              lineHeight: "1.2",
              letterSpacing: "0.5px",
              textAlign: "left",
              textTransform: "uppercase",
              color: "text.secondary",
            }}
          >
            About
          </Typography>
        </Box>

        <Box
          sx={{
            maxWidth: "850px",
            width: "100%",
          }}
        >
          <Typography
            component="p"
            sx={{
              fontFamily: "'Ubuntu', sans-serif",
              fontSize: { xs: "1.75rem", sm: "2.2rem", md: "2.375rem" }, 
              fontWeight: 400,
              lineHeight: { xs: 1.3, md: 1.15 },
              textAlign: "left",
              color: "#111111",
              wordSpacing: { md: "3px" },
            }}
          >
            Ethan Suero is an independent designer focused on crafting immersive
            digital experiences. He believes every project is an opportunity to
            deliver a unique and memorable digital experience that delights
            users and builds brand equity.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default About;
