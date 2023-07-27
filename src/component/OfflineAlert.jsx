import { RepeatIcon } from "@chakra-ui/icons";
import { Alert, AlertTitle } from "@chakra-ui/react";
import React from "react";

const OfflineAlert = () => {
  return (
    <Alert status="error">
      <RepeatIcon />
      <AlertTitle>You Are Offline</AlertTitle>
    </Alert>
  );
};

export default OfflineAlert;
