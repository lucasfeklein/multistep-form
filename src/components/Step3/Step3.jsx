import { Box, Button, Card, Text, Title } from "@mantine/core";
import React from "react";
import classes from "./Step3.module.css";

const Step3 = ({ handleClick, handleFormData }) => {
  const handleNextStepClick = () => {
    handleClick(4);
  };
  const handleBackStepClick = () => {
    handleClick(2);
  };

  return (
    <Box className={classes.container}>
      <Box>
        <Title style={{ color: "hsl(213, 96%, 18%)" }}>Pick add-ons</Title>
        <Text style={{ color: "hsl(231, 11%, 63%)" }}>
          Add-ons help enhance your gaming experience.
        </Text>
        <Box style={{ marginTop: "25px", display: "flex", gap: "20px" }}>
          <Card>
            <input type="checkbox" />
            <Box>
              <h2>Online service</h2>
              <p>Online service</p>
            </Box>
            <p>+1/mo</p>
          </Card>
        </Box>
      </Box>

      <Box
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "20px",
        }}
      >
        <Button onClick={handleBackStepClick} className={classes.back_button}>
          Go Back
        </Button>
        <Button onClick={handleNextStepClick} className={classes.next_button}>
          Next Step
        </Button>
      </Box>
    </Box>
  );
};

export default Step3;
