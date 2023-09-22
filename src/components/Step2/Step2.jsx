import { Box, Button, Card, Image, Text, Title } from "@mantine/core";
import React from "react";
import classes from "./Step2.module.css";

const Step2 = ({ handleClick, plan, handleFormData }) => {
  const handleNextStepClick = () => {
    handleClick(3);
  };
  const handleBackStepClick = () => {
    handleClick(1);
  };
  return (
    <Box className={classes.container}>
      <Box>
        <Title style={{ color: "hsl(213, 96%, 18%)" }}>Select your plan</Title>
        <Text style={{ color: "hsl(231, 11%, 63%)" }}>
          You have the choice of monthly or yearly billing.
        </Text>
        <Box style={{ marginTop: "25px", display: "flex", gap: "20px" }}>
          <Card
            className={`${classes.card} ${
              plan === "arcade" ? classes.active_card : ""
            }`}
          >
            <Image src="./icon-arcade.svg" w={35} mb={50} />
            <h2>Arcade</h2>
            <p>$9/mo</p>
          </Card>
          <Card
            className={`${classes.card} ${
              plan === "advanced" ? classes.active_card : ""
            }`}
          >
            <Image src="./icon-advanced.svg" w={35} mb={50} />
            <h2>Advanced</h2>
            <p>$12/mo</p>
          </Card>
          <Card
            className={`${classes.card} ${
              plan === "pro" ? classes.active_card : ""
            }`}
          >
            <Image src="./icon-pro.svg" w={35} mb={50} />
            <h2>Pro</h2>
            <p>$15/mo</p>
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

export default Step2;
