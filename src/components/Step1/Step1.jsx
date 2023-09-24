import { Box, Button, Text, TextInput, Title } from "@mantine/core";
import React, { useState } from "react";
import classes from "./Step1.module.css";

const Step1 = ({ handleClick, handleFormData, name, phone, email, formErrors }) => {

  const handleNextStepClick = () => {
      handleClick(2);
  };

  return (
    <Box className={classes.container}>
      <Box>
        <Title style={{ color: "hsl(213, 96%, 18%)" }}>Personal info</Title>
        <Text style={{ color: "hsl(231, 11%, 63%)" }}>
          Please provide your name, email address, and phone number.
        </Text>
        <Box style={{ position: "relative", marginTop: "25px" }}>
          <TextInput
            name="name"
            value={name}
            onChange={(e) => handleFormData(e.target.name, e.target.value)}
            classNames={{ label: classes.label, input: classes.input }}
            label="Name"
            placeholder="John Doe"
            type="text"
            error={Boolean(formErrors.name)}
          />
          {formErrors.name && (
            <Box className={classes.error_message}>{formErrors.name}</Box>
          )}
        </Box>
        <Box style={{ position: "relative" }}>
          <TextInput
            mt={15}
            name="email"
            value={email}
            onChange={(e) => handleFormData(e.target.name, e.target.value)}
            classNames={{ label: classes.label, input: classes.input }}
            label="Email Address"
            placeholder="example@example.com"
            type="email"
            error={Boolean(formErrors.email)}
          />
          {formErrors.email && (
            <Box className={classes.error_message}>{formErrors.email}</Box>
          )}
        </Box>
        <div style={{ position: "relative" }}>
          <TextInput
            mt={15}
            name="phone"
            value={phone}
            onChange={(e) => handleFormData(e.target.name, e.target.value)}
            classNames={{ label: classes.label, input: classes.input }}
            label="Phone Number"
            placeholder="1 234 567 890"
            type="number"
            error={Boolean(formErrors.phone)}
          />
          {formErrors.phone && (
            <Box className={classes.error_message}>{formErrors.phone}</Box>
          )}
        </div>
      </Box>
      <Box className="travel-steps-container">
        <p></p>
        <Button onClick={handleNextStepClick} className={classes.next_button}>
          Next Step
        </Button>
      </Box>
    </Box>
  );
};

export default Step1;
