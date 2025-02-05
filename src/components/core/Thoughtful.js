import React from "react";
import { Box, Typography, CardContent } from "@mui/material";

// Arrow function for creating a card
const ThoughtfulCard = ({ imgSrc, altText, title, description }) => {
  // Split the title into number and text part
  const [number, text] = title.split("/");

  return (
    <Box
      sx={{
        width: "31%",
        height: "350px",
        margin: "10px 0",
        border: "1px solid black",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "10px 10px",
      }}
    >
      <img
        src={imgSrc}
        alt={altText}
        style={{
          width: "200px",
          height: "200px",
          objectFit: "cover",
          marginTop: "100px",
          marginBottom: "150px",
        }}
      />
      <CardContent sx={{ padding: 0, textAlign: "left" }}>
        <Typography
          variant="body1"
          sx={{ fontWeight: "bold", fontSize: "12px" }}
        >
          {/* Wrap '01/' in a span with opacity */}
          <span
            style={{
              opacity: 0.5,
              fontSize: "7px",
              // top:0.5,
              // marginBottom:'500px',
              // display:'block',
              // position:'relative',
            }}
          >
            {number}/
          </span>
          {text}
        </Typography>
        <Typography
          variant="body2"
          color="textSecondary"
          textAlign="left"
          fontSize="10px"
        >
          {description}
        </Typography>
      </CardContent>
    </Box>
  );
};

function Thoughtful() {
  // Data for the cards
  const cards = [
    {
      imgSrc: "/images/logo.svg",
      altText: "Card 1",
      title: "01/ANALYSIS",
      description:
        "Live workshop where we define the main problems and challenges before building a strategic plan moving forward.",
    },
    {
      imgSrc: "/images/logo.svg",
      altText: "Card 2",
      title: "02/RESEARCH",
      description:
        "Competitive & Market research with the aim of finding that sweet spot that will set your brand apart.",
    },
    {
      imgSrc: "/images/logo.svg",
      altText: "Card 3",
      title: "03/DESIGN",
      description:
        "Here’s where your digital product starts to become a tangible thing with visual elements and a great UX design.",
    },
    {
      imgSrc: "/images/logo.svg",
      altText: "Card 4",
      title: "04/DEVELOPMENT",
      description:
        "Using Webflow, a no-code tool that allows us full creative development & is easy to manage by your team after launch.",
    },
    {
      imgSrc: "/images/logo.svg",
      altText: "Card 5",
      title: "05/ONBOARDING",
      description:
        "How to update and maintain your new digital product in minutes using no-code tools that are easy to use.",
    },
    {
      imgSrc: "/images/logo.svg",
      altText: "Card 6",
      title: "06/SUPPORT",
      description:
        "I got you, even after launching your digital product you can still count on me for every question or issue.",
    },
  ];

  return (
    <Box sx={{ width: "1000px", height: "800.16px" }}>
      {/* Title Section */}
      <Box sx={{ marginTop: "350px", marginLeft: "430px" }}>
        <Typography
          variant="h1"
          sx={{
            width: "794px",
            height: "70px",
            fontSize: "100px",
            fontWeight: 500,
            textAlign: "left",
            marginLeft: "40px",
            lineHeight: "0.75",
          }}
        >
          THOUGHTFUL
          <br /> PROCESS
        </Typography>
        <Box sx={{ marginLeft: "485px", marginTop: "60px" }}>
          <Typography sx={{ fontSize: "10px" }}>I THINK A LOT</Typography>
        </Box>
      </Box>

      {/* Cards Section */}
      <Box sx={{ marginLeft: "25px" }}>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            marginTop: "50px",
            marginLeft: "50px",
            // display:'inline',
            width: "1128px",
            height: "300px",
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
    </Box>
  );
}

export default Thoughtful;
