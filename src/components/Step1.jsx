import { Box, Text, TextInput, Title } from "@mantine/core";

const labelStyle = { color: "hsl(213, 96%, 18%)", fontWeight: "400" };
const inputStyle = { color: "hsl(213, 96%, 18%)", fontWeight: "500" };

const Step1 = () => {
  return (
    <Box pt={30}>
      <Title style={{ color: "hsl(213, 96%, 18%)" }}>Personal info</Title>
      <Text color="hsl(231, 11%, 63%)">
        Please provide your name, email address and phone number.
      </Text>
      <TextInput
        styles={{
          label: labelStyle,
          input: { color: "hsl(213, 96%, 18%)", fontWeight: "500" },
        }}
        label="Name"
        placeholder="John Doe"
        type="text"
      />
      <TextInput
        styles={{ label: labelStyle }}
        label="Email Address"
        placeholder="example@example.com"
        type="email"
      />
      <TextInput
        styles={{ label: labelStyle }}
        label="Phone Number"
        placeholder="e.g. +1 234 567 890"
        type="text"
      />
    </Box>
  );
};

export default Step1;
