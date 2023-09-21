import { Box, Button, Text, TextInput, Title } from "@mantine/core";

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
    <Box
      pt={30}
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: "100%",
      }}
    >
      <Box>
        <Title style={{ color: "hsl(213, 96%, 18%)" }}>Personal info</Title>
        <Text color="hsl(231, 11%, 63%)">
          Please provide your name, email address and phone number.
        </Text>
        <TextInput
          mt={25}
          styles={{
            label: labelStyle,
            input: inputStyle,
          }}
          label="Name"
          placeholder="John Doe"
          type="text"
        />
        <TextInput
          mt={15}
          styles={{ label: labelStyle, input: inputStyle }}
          label="Email Address"
          placeholder="example@example.com"
          type="email"
        />

        <TextInput
          mt={15}
          styles={{ label: labelStyle, input: inputStyle }}
          label="Phone Number"
          placeholder="e.g. +1 234 567 890"
          type="text"
        />
      </Box>
      <Button
        mb={20}
        style={{
          alignSelf: "end",
          backgroundColor: "hsl(213, 96%, 18%)",
          fontWeight: "500",
        }}
      >
        Next Step
      </Button>
    </Box>
  );
};

export default Step1;
