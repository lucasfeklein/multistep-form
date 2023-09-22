import { Box, Button, Flex, Text, Title } from "@mantine/core";
import React from "react";
import classes from "./Step4.module.css";

const Step4 = ({ handleClick, handleFormData }) => {
  const handleBackStepClick = () => {
    handleClick(3);
  };
  return (
    <Box className={classes.container}>
      <Box>
        <Title style={{ color: "hsl(213, 96%, 18%)" }}>Finishing up</Title>
        <Text style={{ color: "hsl(231, 11%, 63%)" }}>
          Double-check everything looks OK before confirming.
        </Text>
        <Box
          style={{
            marginTop: "25px",
            display: "flex",
            gap: "20px",
            flexDirection: "column",
          }}
        >
          <Box>
            <Flex justify="space-between">
              <Box>
                <p style={{ color: "hsl(213, 96%, 18%)", fontWeight: "bold" }}>
                  Arcade (Monthly)
                </p>
                <p
                  onClick={() => handleClick(2)}
                  className={classes.change_button}
                >
                  Change
                </p>
              </Box>
              <p style={{ color: "hsl(213, 96%, 18%)", fontWeight: "bold" }}>
                $9/mo
              </p>
            </Flex>
          </Box>
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
        <Button className={classes.next_button}>Confirm</Button>
      </Box>
    </Box>
  );
};

export default Step4;
