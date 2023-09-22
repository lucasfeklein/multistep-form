import { Box, Button, Text, Title } from "@mantine/core";
import React from "react";
import classes from "./Step2.module.css";

const handleNextStepClick = () => {
  handleClick(3);
};

const Step2 = ({ handleClick }) => {
  return (
    <Box className={classes.container}>
      <Box>
        <Title style={{ color: "hsl(213, 96%, 18%)" }}>Personal info</Title>
        <Text style={{ color: "hsl(231, 11%, 63%)" }}>
          Please provide your name, email address, and phone number.
        </Text>
      </Box>

      <Box
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "20px",
        }}
      >
        <Button className={classes.back_button}>Go Back</Button>
        <Button onClick={handleNextStepClick} className={classes.next_button}>
          Next Step
        </Button>
      </Box>
    </Box>
  );
};

export default Step2;
