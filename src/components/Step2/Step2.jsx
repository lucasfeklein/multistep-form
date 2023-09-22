import {
  Box,
  Button,
  Card,
  Flex,
  Image,
  Switch,
  Text,
  Title,
} from "@mantine/core";
import React, { useState } from "react";
import classes from "./Step2.module.css";

const Step2 = ({ handleClick, plan, handleFormData }) => {
  const [checked, setChecked] = useState(false);
  const handleNextStepClick = () => {
    handleClick(3);
  };
  const handleBackStepClick = () => {
    handleClick(1);
  };

  const handleSwitch = (e) => {
    const duration = e.currentTarget.checked ? "year" : "month";
    handleFormData("planDuration", duration);
    setChecked(e.currentTarget.checked);
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
            onClick={() => handleFormData("plan", "arcade")}
            className={`${classes.card} ${
              plan === "arcade" ? classes.active_card : ""
            }`}
          >
            <Image src="./icon-arcade.svg" w={35} mb={50} />
            <h2>Arcade</h2>
            <p>$9/mo</p>
          </Card>
          <Card
            onClick={() => handleFormData("plan", "advanced")}
            className={`${classes.card} ${
              plan === "advanced" ? classes.active_card : ""
            }`}
          >
            <Image src="./icon-advanced.svg" w={35} mb={50} />
            <h2>Advanced</h2>
            <p>$12/mo</p>
          </Card>
          <Card
            onClick={() => handleFormData("plan", "pro")}
            className={`${classes.card} ${
              plan === "pro" ? classes.active_card : ""
            }`}
          >
            <Image src="./icon-pro.svg" w={35} mb={50} />
            <h2>Pro</h2>
            <p>$15/mo</p>
          </Card>
        </Box>
        <Flex
          style={{
            backgroundColor: "hsla(243, 100%, 62%, 0.05)",
            padding: "10px 0",
            borderRadius: "5px",
            marginTop: "30px",
          }}
          gap={20}
          align={"center"}
          justify={"center"}
        >
          <p>Montly</p>
          <Switch
            checked={checked}
            onChange={handleSwitch}
            styles={{
              track: { backgroundColor: "hsl(213, 96%, 18%)", border: "none" },
            }}
          />
          <p>Yearly</p>
        </Flex>
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
