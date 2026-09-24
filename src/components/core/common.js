import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import FAQAccordion from "./Accordian.js";

function Common() {
  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: "1300px",
        margin: "0 auto",
        mt: { xs: 6, md: "125px" },
        px: { xs: 2, sm: 4, md: 6 },
        boxSizing: "border-box",
        backgroundColor: "#ffffff",
        color: "#000000",
      }}
    >
      {/* Parent wrapper set to flex column to control responsive ordering */}
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          textAlign: { xs: "center", md: "left" },
        }}
      >
        <Typography
          variant="h1"
          sx={{
            fontFamily: "'Ubuntu', sans-serif",
            fontWeight: 500,
            textTransform: "uppercase",
            fontSize: { xs: "40px", sm: "60px", md: "85px" },
            lineHeight: 1,
            order: { xs: 1, md: 1 },
          }}
          aria-label="Home"
        >
          common
        </Typography>

        <Box
          sx={{
            ml: { xs: 0, md: "485px" },
            my: { xs: 2, md: 1 },
            order: { xs: 3, md: 2 }, // Pushes it below Questions on small screens, keeps it in the middle on desktop
          }}
        >
          <Typography
            sx={{
              fontFamily: "'Ubuntu', sans-serif",
              fontSize: "10px",
              textTransform: "uppercase",
              color: "#666666",
            }}
          >
            Some questions
          </Typography>
          <Typography
            sx={{
              fontSize: "10px",
              textTransform: "uppercase",
              color: "#666666",
            }}
          >
            PEOPLE USUALLY ASK
          </Typography>
        </Box>

        <Typography
          variant="h1"
          sx={{
            fontFamily: "'Ubuntu', sans-serif",
            fontWeight: 500,
            textTransform: "uppercase",
            fontSize: { xs: "40px", sm: "60px", md: "85px" },
            lineHeight: 1,
            mb: { xs: 4, md: 6 },
            order: { xs: 2, md: 3 }, // Appears right after "common" on small screens so they read together as "common Questions"
          }}
          aria-label="Work"
        >
          Questions
        </Typography>
      </Box>

      <Box sx={{ width: "100%", mb: 6 }}>
        <FAQAccordion />
      </Box>

      <Box
        sx={{
          backgroundColor: "#ffffff",
          width: "100%",
          height: { xs: "50px", md: "200px" },
        }}
      ></Box>
    </Box>
  );
}

export default Common;