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
          <Box
            style={{
              backgroundColor: "hsla(243, 100%, 62%, 0.05)",
              padding: "20px",
              borderRadius: "5px",
            }}
          >
            <Flex
              justify="space-between"
              style={{
                borderBottom: "1px solid hsl(229, 24%, 87%)",
                paddingBottom: "20px",
              }}
            >
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

            <Flex direction="column" gap={10} mt={15}>
              <Flex justify="space-between">
                <p>Online services</p>
                <p style={{ color: "hsl(213, 96%, 18%)" }}>+$1/mo</p>
              </Flex>
              <Flex justify="space-between">
                <p>Larger storage</p>
                <p style={{ color: "hsl(213, 96%, 18%)" }}>+$2/mo</p>
              </Flex>
            </Flex>
          </Box>

          <Flex justify="space-between" px={20}>
            <p>Total (per month)</p>
            <p
              style={{
                fontSize: "16px",
                color: "hsl(243, 100%, 62%)",
                fontWeight: "bold",
              }}
            >
              +$12/mo
            </p>
          </Flex>
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
