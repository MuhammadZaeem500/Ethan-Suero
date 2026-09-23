import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export default function HeroSection() {
  return (
    <Box
      sx={{
        position: "relative",
        minHeight: "100vh",
        width: "100%",
        backgroundColor: "#FFFFFF",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        boxSizing: "border-box",
        overflow: "hidden",
        py: { xs: 6, md: 8 },
      }}
    >
      <Box
        sx={{
          display: { xs: "none", lg: "flex" },
          position: "fixed",
          right: 0,
          top: "50%",
          transform: "translateY(-50%)",
          height: "171px",
          width: "53px",
          backgroundColor: "black",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 10,
        }}
      >
        <Typography
          variant="body1"
          sx={{
            fontFamily: "'Ubuntu', sans-serif",
            color: "white",
            fontWeight: "bold",
            writingMode: "vertical-rl",
            transform: "rotate(180deg)",
            mb: 2,
          }}
        >
          Honors
        </Typography>
        <Typography
          variant="h5"
          sx={{
            fontFamily: "'Ubuntu', sans-serif",
            color: "white",
            fontWeight: "bold",
            transform: "rotate(180deg)",
          }}
        >
          W.
        </Typography>
      </Box>

      <Box
        sx={{
          maxWidth: "1440px",
          width: "100%",
          mx: "auto",
          px: { xs: 3, sm: 6, md: "150px" },
          boxSizing: "border-box",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "space-between",
            alignItems: { xs: "flex-start", md: "center" },
            width: "100%",
            gap: { xs: 4, md: 6 },
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              width: { xs: "100%", md: "70%" },
              zIndex: 1,
            }}
          >
            <Typography
              variant="h1"
              sx={{
                fontFamily: "'Ubuntu', sans-serif",
                fontWeight: 500,
                textTransform: "uppercase",
                lineHeight: 1.05,
                fontSize: { xs: "2.2rem", sm: "4.2rem", md: "5.8rem" },
              }}
            >
              stunning
            </Typography>
            <Typography
              variant="h1"
              sx={{
                fontFamily: "'Ubuntu', sans-serif",
                fontWeight: 500,
                textTransform: "uppercase",
                lineHeight: 1.05,
                fontSize: { xs: "2.2rem", sm: "4.2rem", md: "5.8rem" },
              }}
            >
              brands
            </Typography>
            <Typography
              variant="h1"
              sx={{
                fontFamily: "'Ubuntu', sans-serif",
                fontWeight: 500,
                textTransform: "uppercase",
                lineHeight: 1.05,
                fontSize: { xs: "2.2rem", sm: "4.2rem", md: "5.8rem" },
              }}
            >
              & digital
            </Typography>
            <Typography
              variant="h1"
              sx={{
                fontFamily: "'Ubuntu', sans-serif",
                fontWeight: 500,
                textTransform: "uppercase",
                lineHeight: 1.05,
                fontSize: { xs: "2.2rem", sm: "4.2rem", md: "5.8rem" },
              }}
            >
              experiences
            </Typography>
          </Box>

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              width: { xs: "100%", md: "25%" },
              gap: 0.5,
            }}
          >
            <Typography
              variant="body2"
              sx={{
                fontFamily: "'Ubuntu', sans-serif",
                color: "text.secondary",
                fontWeight: 500,
                fontSize: { xs: "1rem", md: "1.15rem" },
              }}
            >
              Freelancer
            </Typography>
            <Typography
              variant="body2"
              sx={{
                fontFamily: "'Ubuntu', sans-serif",
                color: "text.secondary",
                fontWeight: 500,
                fontSize: { xs: "1rem", md: "1.15rem" },
              }}
            >
              Digital designer
            </Typography>
            <Typography
              variant="body2"
              sx={{
                fontFamily: "'Ubuntu', sans-serif",
                color: "text.secondary",
                fontWeight: 500,
                fontSize: { xs: "1rem", md: "1.15rem" },
              }}
            >
              Webflow expert
            </Typography>
          </Box>
        </Box>
      </Box>

      <Box
        sx={{
          maxWidth: "1440px",
          width: "100%",
          mx: "auto",
          px: { xs: 3, sm: 6, md: "150px" },
          mt: { xs: 6, md: 10 },
          boxSizing: "border-box",
          display: "flex",
          flexDirection: "column",
          alignItems: { xs: "center", md: "flex-start" },
        }}
      >
        <Typography
          sx={{
            fontFamily: "'Ubuntu', sans-serif",
            textAlign: { xs: "center", md: "left" },
            textTransform: "uppercase",
            fontWeight: 600,
            letterSpacing: "1px",
            fontSize: "0.85rem",
            color: "text.secondary",
            mb: 2.5,
          }}
        >
          Work seen On
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: { xs: "center", md: "flex-start" },
            alignItems: "center",
            gap: { xs: 4, md: 6 },
            width: "100%",
          }}
        >
          <Box
            component="img"
            src="/images/AdFluxLogo.svg"
            alt="AdFlux Logo"
            sx={{ height: "36px", width: "auto", maxWidth: "110px" }}
          />
          <Box
            component="img"
            src="/images/Yahoo.svg"
            alt="Yahoo Logo"
            sx={{ height: "24px", width: "auto", maxWidth: "90px" }}
          />
          <Box
            component="img"
            src="/images/FiaFormula3Logo.svg"
            alt="Formula Logo"
            sx={{ height: "32px", width: "auto", maxWidth: "90px" }}
          />
          <Box
            component="img"
            src="/images/AwwwardsLogo.svg"
            alt="Awwwards Logo"
            sx={{ height: "18px", width: "auto", maxWidth: "110px" }}
          />
        </Box>
      </Box>
    </Box>
  );
}
