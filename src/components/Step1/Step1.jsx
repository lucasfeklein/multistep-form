import { Box, Button, Text, TextInput, Title } from "@mantine/core";
import classes from "./Step1.module.css";
const labelStyle = {
  color: "hsl(213, 96%, 18%)",
  fontWeight: "400",
  marginBottom: "4px",
  fontSize: "13px",
};
const inputStyle = {
  color: "hsl(213, 96%, 18%)",
  fontWeight: "500",
  padding: "20px 15px",
  borderRadius: "8px",
};

const Step1 = () => {
  return (
    <Box className={classes.container}>
      <Box>
        <Title style={{ color: "hsl(213, 96%, 18%)" }}>Personal info</Title>
        <Text color="hsl(231, 11%, 63%)">
          Please provide your name, email address and phone number.
        </Text>
        <TextInput
          mt={25}
          classNames={{ label: classes.label, input: classes.input }}
          label="Name"
          placeholder="John Doe"
          type="text"
        />
        <TextInput
          mt={15}
          classNames={{ label: classes.label, input: classes.input }}
          label="Email Address"
          placeholder="example@example.com"
          type="email"
        />

        <TextInput
          mt={15}
          classNames={{ label: classes.label, input: classes.input }}
          label="Phone Number"
          placeholder="e.g. +1 234 567 890"
          type="text"
        />
      </Box>
      <Button className={classes.button} mb={20}>
        Next Step
      </Button>
    </Box>
  );
};

export default Step1;
