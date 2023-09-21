import { Box, Button, Text, TextInput, Title } from "@mantine/core";
import React, { useState } from "react";
import classes from "./Step1.module.css";

const Step1 = ({ handleClick, handleFormData, name, phone, email }) => {
  const [formErrors, setFormErrors] = useState({
    name: false,
    email: false,
    phone: false,
  });

  const handleNextStepClick = () => {
    // Validate the form before proceeding to the next step
    const newFormErrors = {};
    if (!name) {
      newFormErrors.name = true;
    }
    if (!email) {
      newFormErrors.email = true;
    }
    if (!phone) {
      newFormErrors.phone = true;
    }

    // If there are errors, set them in the formErrors state
    if (Object.keys(newFormErrors).length > 0) {
      setFormErrors(newFormErrors);
    } else {
      handleClick(2);
    }
  };

  return (
    <Box className={classes.container}>
      <Box>
        <Title style={{ color: "hsl(213, 96%, 18%)" }}>Personal info</Title>
        <Text style={{ color: "hsl(231, 11%, 63%)" }}>
          Please provide your name, email address, and phone number.
        </Text>
        <div style={{ position: "relative" }}>
          <TextInput
            mt={25}
            name="name"
            value={name}
            onChange={handleFormData}
            classNames={{ label: classes.label, input: classes.input }}
            label="Name"
            placeholder="John Doe"
            type="text"
            error={formErrors.name} // Set the error prop
          />
          {formErrors.name && (
            <Box className={classes.error_message}>This field is required</Box>
          )}
        </div>
        <div style={{ position: "relative" }}>
          <TextInput
            mt={15}
            name="email"
            value={email}
            onChange={handleFormData}
            classNames={{ label: classes.label, input: classes.input }}
            label="Email Address"
            placeholder="example@example.com"
            type="email"
            error={formErrors.email} // Set the error prop
          />
          {formErrors.email && (
            <Box className={classes.error_message}>This field is required</Box>
          )}
        </div>
        <div style={{ position: "relative" }}>
          <TextInput
            mt={15}
            name="phone"
            value={phone}
            onChange={handleFormData}
            classNames={{ label: classes.label, input: classes.input }}
            label="Phone Number"
            placeholder="e.g. +1 234 567 890"
            type="text"
            error={formErrors.phone} // Set the error prop
          />
          {formErrors.phone && (
            <Box className={classes.error_message}>This field is required</Box>
          )}
        </div>
      </Box>

      <Button onClick={handleNextStepClick} className={classes.button} mb={20}>
        Next Step
      </Button>
    </Box>
  );
};

export default Step1;
