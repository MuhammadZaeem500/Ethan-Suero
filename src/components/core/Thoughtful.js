import { Box, Typography, CardContent } from "@mui/material";

const ThoughtfulCard = ({ imgSrc, altText, title, description }) => {
  const [number, text] = title.split("/");

  return (
    <Box
      sx={{
        flex: {
          xs: "100%",
          sm: "calc(50% - 16px)",
          md: "calc(33.333% - 16px)",
        },
        minHeight: "380px",
        border: "1px solid rgba(255, 255, 255, 0.2)",
        backgroundColor: "#000000",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "space-between",
        padding: "24px",
        boxSizing: "border-box",
      }}
    >
      <Box
        component="img"
        src={imgSrc}
        alt={altText}
        sx={{
          width: "50px",
          height: "50px",
          objectFit: "contain",
          filter: "invert(1)",
        }}
      />

      <CardContent sx={{ padding: 0, textAlign: "left", width: "100%", mt: 4 }}>
        <Typography
          variant="body1"
          sx={{
            fontFamily: "'Ubuntu', sans-serif",
            fontWeight: "bold",
            fontSize: "14px",
            color: "#ffffff",
            mb: 1,
          }}
        >
          <span
            style={{
              opacity: 0.5,
              fontSize: "10px",
              marginRight: "6px",
            }}
          >
            {number}/
          </span>
          {text}
        </Typography>
        <Typography
          variant="body2"
          sx={{
            fontFamily: "'Ubuntu', sans-serif",
            fontSize: "16px",
            color: "rgba(255, 255, 255, 0.7)",
            lineHeight: 1.5,
          }}
        >
          {description}
        </Typography>
      </CardContent>
    </Box>
  );
};

function Thoughtful() {
  const cards = [
    {
      imgSrc: "/images/EthanSueroLogo.svg",
      altText: "Card 1",
      title: "01/ANALYSIS",
      description:
        "Live workshop where we define the main problems and challenges before building a strategic plan moving forward.",
    },
    {
      imgSrc: "/images/EthanSueroLogo.svg",
      altText: "Card 2",
      title: "02/RESEARCH",
      description:
        "Competitive & Market research with the aim of finding that sweet spot that will set your brand apart.",
    },
    {
      imgSrc: "/images/EthanSueroLogo.svg",
      altText: "Card 3",
      title: "03/DESIGN",
      description:
        "Here’s where your digital product starts to become a tangible thing with visual elements and a great UX design.",
    },
    {
      imgSrc: "/images/EthanSueroLogo.svg",
      altText: "Card 4",
      title: "04/DEVELOPMENT",
      description:
        "Using Webflow, a no-code tool that allows us full creative development & is easy to manage by your team after launch.",
    },
    {
      imgSrc: "/images/EthanSueroLogo.svg",
      altText: "Card 5",
      title: "05/ONBOARDING",
      description:
        "How to update and maintain your new digital product in minutes using no-code tools that are easy to use.",
    },
    {
      imgSrc: "/images/EthanSueroLogo.svg",
      altText: "Card 6",
      title: "06/SUPPORT",
      description:
        "I got you, even after launching your digital product you can still count on me for every question or issue.",
    },
  ];

  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "100vh",
        backgroundColor: "#000000",
        color: "#ffffff",
        py: { xs: 8, md: 15 },
        px: { xs: 3, sm: 6, md: 10 },
        boxSizing: "border-box",
        overflowX: "hidden",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "space-between",
          alignItems: { xs: "flex-start", md: "flex-end" },
          mb: { xs: 4, md: 10 },
        }}
      >
        <Typography
          variant="h1"
          sx={{
            fontFamily: "'Ubuntu', sans-serif",
            fontSize: { xs: "2.5rem", sm: "4rem", md: "5.5rem" },
            fontWeight: 500,
            lineHeight: 0.95,
            letterSpacing: "-0.02em",
          }}
        >
          THOUGHTFUL
          <br /> PROCESS
        </Typography>
        <Box sx={{ mt: { xs: 2, md: 0 } }}>
          <Typography
            sx={{
              fontFamily: "'Ubuntu', sans-serif",
              fontSize: "12px",
              letterSpacing: "0.1em",
              opacity: 0.8,
            }}
          >
            I THINK A LOT
          </Typography>
        </Box>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: "24px",
          justifyContent: "center",
          width: "100%",
        }}
      >
        {cards.map((card, index) => (
          <ThoughtfulCard
            key={index}
            imgSrc={card.imgSrc}
            altText={card.altText}
            title={card.title}
            description={card.description}
          />
        ))}
      </Box>
    </Box>
  );
}

export default Thoughtful;
