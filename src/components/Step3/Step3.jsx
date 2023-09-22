import { Box, Button, Card, Flex, Text, Title } from "@mantine/core";
import React from "react";
import classes from "./Step3.module.css";

const Step3 = ({ handleClick, handleFormData, addOns }) => {
  const handleNextStepClick = () => {
    handleClick(4);
  };
  const handleBackStepClick = () => {
    handleClick(2);
  };
  const handleCheckboxChange = (name) => {
    const updatedAddOns = addOns.map((addOn) =>
      addOn.name === name
        ? { ...addOn, isSelected: !addOn.isSelected }
        : { ...addOn }
    );

    handleFormData("addOns", updatedAddOns);
  };

  return (
    <Box className={classes.container}>
      <Box>
        <Title style={{ color: "hsl(213, 96%, 18%)" }}>Pick add-ons</Title>
        <Text style={{ color: "hsl(231, 11%, 63%)" }}>
          Add-ons help enhance your gaming experience.
        </Text>
        <Box
          style={{
            marginTop: "25px",
            display: "flex",
            gap: "20px",
            flexDirection: "column",
          }}
        >
          {addOns.map((addOn) => (
            <Card
              key={addOn.name}
              className={classes.card}
              onClick={() => handleCheckboxChange(addOn.name)}
            >
              <Flex gap={20}>
                <input
                  type="checkbox"
                  checked={addOn.isSelected}
                  onChange={() => handleCheckboxChange(addOn.name)}
                />
                <Box>
                  <h2>{addOn.name}</h2>
                  <p>{addOn.description}</p>
                </Box>
              </Flex>
              <p>+{addOn.price}/mo</p>
            </Card>
          ))}
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
