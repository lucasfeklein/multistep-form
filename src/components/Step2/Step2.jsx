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
import React from "react";
import classes from "./Step2.module.css";

const plans = [
  { icon: "/icon-arcade.svg", name: "Arcade", price: 9 },
  { icon: "/icon-advanced.svg", name: "Advanced", price: 12 },
  { icon: "/icon-pro.svg", name: "Pro", price: 15 },
];

const Step2 = ({ handleClick, plan, handleFormData, planDuration }) => {
  const handleNextStepClick = () => {
    handleClick(3);
  };
  const handleBackStepClick = () => {
    handleClick(1);
  };

  const handleSwitch = (e) => {
    const duration = e.currentTarget.checked ? "year" : "month";
    handleFormData("planDuration", duration);
  };

  return (
    <Box className={classes.container}>
      <Box>
        <Title style={{ color: "hsl(213, 96%, 18%)" }}>Select your plan</Title>
        <Text style={{ color: "hsl(231, 11%, 63%)" }}>
          You have the choice of monthly or yearly billing.
        </Text>
        <Box className={classes.card_container}>
          {plans.map((planObj) => (
            <Card
              key={planObj.name}
              onClick={() => handleFormData("plan", planObj.name)}
              className={`${classes.card} ${
                plan === planObj.name ? classes.active_card : ""
              }`}
            >
              <Image src={planObj.icon} w={40} className={classes.image} />
              <Box>
                <h2>{planObj.name}</h2>
                <p>
                  $
                  {planDuration === "month"
                    ? planObj.price
                    : planObj.price * 10}
                  /{planDuration === "month" ? "mo" : "yr"}
                </p>
                {planDuration === "year" && (
                  <p style={{ color: "hsl(213, 96%, 18%)" }}>2 months free</p>
                )}
              </Box>
            </Card>
          ))}
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
          <p
            style={{
              color: planDuration === "month" ? "hsl(213, 96%, 18%)" : "",
              fontWeight: "bold",
            }}
          >
            Montly
          </p>
          <Switch
            checked={planDuration === "month" ? false : true}
            onChange={handleSwitch}
            styles={{
              track: { backgroundColor: "hsl(213, 96%, 18%)", border: "none" },
            }}
          />
          <p
            style={{
              color: planDuration === "year" ? "hsl(213, 96%, 18%)" : "",
              fontWeight: "bold",
            }}
          >
            Yearly
          </p>
        </Flex>
      </Box>

      <Box className="travel-steps-container">
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
