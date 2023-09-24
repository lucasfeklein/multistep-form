import { Box, Button, Flex, Text, Title } from "@mantine/core";
import React from "react";
import classes from "./Step4.module.css";

const planPrices = {
  Arcade: 9,
  Advanced: 12,
  Pro: 15,
};

const PlanDetails = ({ plan, planDuration, planPrice, handleClick }) => (
  <Flex
    justify="space-between"
  >
    <Box>
      <p style={{ color: "hsl(213, 96%, 18%)", fontWeight: "bold" }}>
        {plan} ({planDuration === "month" ? "Monthly" : "Yearly"})
      </p>
      <p onClick={() => handleClick(2)} className={classes.change_button}>
        Change
      </p>
    </Box>
    <p style={{ color: "hsl(213, 96%, 18%)", fontWeight: "bold" }}>
      ${planPrice}/{planDuration === "month" ? "mo" : "yr"}
    </p>
  </Flex>
);

const AddOnDetails = ({ selectedAddOns, planDuration }) => (
  <Flex direction="column" gap={10} mt={15} pt={20} style={{borderTop: "1px solid hsl(229, 24%, 87%)",}}>
    {selectedAddOns.map((addOn) => (
      <Flex justify="space-between" key={addOn.name}>
        <p>{addOn.name}</p>
        <p style={{ color: "hsl(213, 96%, 18%)" }}>
          +${planDuration === "month" ? addOn.price : addOn.price * 10}/mo
        </p>
      </Flex>
    ))}
  </Flex>
);

const Step4 = ({ handleClick, plan, addOns, planDuration }) => {
  const planPrice =
    planDuration === "month" ? planPrices[plan] : planPrices[plan] * 10;
  const selectedAddOns = addOns.filter((addOn) => addOn.isSelected);
  const totalPrice = selectedAddOns.reduce(
    (total, addOn) =>
      total + (planDuration === "month" ? addOn.price : addOn.price * 10),
    planPrice
  );

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
            <PlanDetails
              plan={plan}
              planDuration={planDuration}
              planPrice={planPrice}
              handleClick={handleClick}
            />
            {selectedAddOns.length > 0 && <AddOnDetails
              selectedAddOns={selectedAddOns}
              planDuration={planDuration}
            />}
          </Box>
          <Flex justify="space-between" px={20}>
            <p>Total (per {planDuration === "month" ? "month" : "year"})</p>
            <p
              style={{
                fontSize: "16px",
                color: "hsl(243, 100%, 62%)",
                fontWeight: "bold",
              }}
            >
              +${totalPrice}/mo
            </p>
          </Flex>
        </Box>
      </Box>
      <Box className="travel-steps-container">
        <Button onClick={handleBackStepClick} className={classes.back_button}>
          Go Back
        </Button>
        <Button className={classes.next_button}>Confirm</Button>
      </Box>
    </Box>
  );
};

export default Step4;
