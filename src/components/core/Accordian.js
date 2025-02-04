import React from 'react';
import { Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function FAQAccordion() {
  const faqData = [
    {
      question: 'Do you do web design or web development?',
      answer: 'I do both! Most of the times I take projects from strategy to design, and development in Webflow. However, if you have a Figma file that needs to be built in Webflow, or simply need me to design your website and your team will handle development, that\'s also fine.'
    },
    {
      question: 'I\'m an agency, do you develop figma designs?',
      answer: 'Yes, I can develop your Figma designs in Webflow, no problem!'
    },
    {
      question: 'Why do I develop solely using Webflow?',
      answer: 'Webflow offers a combination of design flexibility and ease of use, making it perfect for modern web development. It allows me to create responsive, scalable, and fast-loading websites with little-to-no coding required.'
    },
    {
      question: 'How much does it cost?',
      answer: 'The cost depends on the project scope. I would need to discuss the details with you to provide a personalized quote.'
    },
    {
      question: 'Do you offer retainer plans?',
      answer: 'Yes, I offer retainer plans for ongoing web development and maintenance. Contact me for more details.'
    },
    {
      question: 'Is there any extra cost involved?',
      answer: 'Additional costs might include third-party integrations, premium plugins, or custom development depending on your specific needs.'
    },
    {
      question: 'How long does it take?',
      answer: 'The timeline for a project depends on its complexity. Typically, a Webflow project can take anywhere from 2 to 8 weeks to complete.'
    },
    {
      question: 'Do I need a developer to make future updates on my website?',
      answer: 'No, you can easily update content on your website using the Webflow CMS. I can also provide training if needed.'
    }
  ];

  return (
    <div 
      style={{
        // position: 'relative',
         marginTop: '50px',
         width:'80%',
      }}
    >
      {faqData.map((item, index) => (
        <Accordion key={index}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`panel${index}-content`}
            id={`panel${index}-header`}
          >
            <Typography>{item.question}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>{item.answer}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
}

export default FAQAccordion;
