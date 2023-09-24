import { Box, Image, Title } from "@mantine/core";
import React from "react";

const Thanks = () => {
  return (
    <Box
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
        gap: "20px",
        padding: "60px 0",
      }}
    >
      <Image src="./icon-thank-you.svg" w={70} />
      <Title style={{ color: "hsl(213, 96%, 18%)" }}>Thank you!</Title>
      <p style={{ textAlign: "center", fontSize: "16px" }}>
        Thanks for confirming your subscription! We hope you have fun using our
        platform. If you ever need support, please feel free to email us at
        support@loremgaming.com.
      </p>
    </Box>
  );
};

export default Thanks;
