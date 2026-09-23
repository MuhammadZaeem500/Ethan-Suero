import React from "react";
import { Box, Accordion, AccordionSummary, AccordionDetails, Typography } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

function FAQAccordion() {
  const faqData = [
    {
      question: "Do you do web design or web development?",
      answer: "I do both! Most of the times I take projects from strategy to design, and development in Webflow. However, if you have a Figma file that needs to be built in Webflow, or simply need me to design your website and your team will handle development, that's also fine.",
    },
    {
      question: "I'm an agency, do you develop figma designs?",
      answer: "Yes, I can develop your Figma designs in Webflow, no problem!",
    },
    {
      question: "Why do I develop solely using Webflow?",
      answer: "Webflow offers a combination of design flexibility and ease of use, making it perfect for modern web development. It allows me to create responsive, scalable, and fast-loading websites with little-to-no coding required.",
    },
    {
      question: "How much does it cost?",
      answer: "The cost depends on the project scope. I would need to discuss the details with you to provide a personalized quote.",
    },
    {
      question: "Do you offer retainer plans?",
      answer: "Yes, I offer retainer plans for ongoing web development and maintenance. Contact me for more details.",
    },
    {
      question: "Is there any extra cost involved?",
      answer: "Additional costs might include third-party integrations, premium plugins, or custom development depending on your specific needs.",
    },
    {
      question: "How long does it take?",
      answer: "The timeline for a project depends on its complexity. Typically, a Webflow project can take anywhere from 2 to 8 weeks to complete.",
    },
    {
      question: "Do I need a developer to make future updates on my website?",
      answer: "No, you can easily update content on your website using the Webflow CMS. I can also provide training if needed.",
    },
  ];

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        py: { xs: 6, md: 10 },
        px: { xs: 2, sm: 4, md: 6 },
        boxSizing: "border-box",
      }}
    >
      <Box
        sx={{
          width: "100%",
          maxWidth: "1000px",
          mx: "auto",
        }}
      >
        <Typography
          variant="h2"
          sx={{
            fontFamily: "'Ubuntu', sans-serif",
            fontWeight: 500,
            fontSize: { xs: "2rem", md: "3rem" },
            mb: 4,
            textTransform: "uppercase",
            textAlign: { xs: "center", md: "left" },
          }}
        >
          Frequently Asked Questions
        </Typography>

        {faqData.map((item, index) => (
          <Accordion
            key={index}
            sx={{
              backgroundColor: "#ffffff",
              color: "#000000",
              mb: 2,
              borderRadius: "8px !important",
              border: "1px solid rgba(0, 0, 0, 0.1)",
              boxShadow: "none",
              "&:before": {
                display: "none",
              },
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon sx={{ color: "#000000" }} />}
              aria-controls={`panel${index}-content`}
              id={`panel${index}-header`}
            >
              <Typography
                sx={{
                  fontFamily: "'Ubuntu', sans-serif",
                  fontWeight: 600,
                  fontSize: { xs: "0.95rem", md: "1.1rem" },
                }}
              >
                {item.question}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography
                sx={{
                  fontFamily: "'Ubuntu', sans-serif",
                  fontWeight: 300,
                  fontSize: { xs: "0.85rem", md: "1rem" },
                  color: "#555555",
                  lineHeight: 1.6,
                }}
              >
                {item.answer}
              </Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Box>
    </Box>
  );
}

export default FAQAccordion;