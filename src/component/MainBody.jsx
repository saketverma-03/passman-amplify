import {
  Box,
  Button,
  ButtonGroup,
  Flex,
  Heading,
  Image,
  Spacer,
} from "@chakra-ui/react";

import React from "react";
import { CSVLink } from "react-csv";
import { Link as RouterLink } from "react-router-dom";
import Table_body from "./TableBody";
// isAuthnaticated
import { useAuthenticator } from "@aws-amplify/ui-react";
import useExportsToCSV from "../hooks/useExportToCSV";
import usePasswordList from "../hooks/usePasswordList";
import "../index.css";

const MainBody = () => {
  const { signOut, user } = useAuthenticator((context) => [context.user]);
  const [list] = usePasswordList(user.attributes.sub);
  const [header, data] = useExportsToCSV(list);

  return (
    <>
      <Flex
        background={"purple.500"}
        minWidth="max-content"
        alignItems="center"
        gap="2"
        paddingX={"3"}
      >
        <Image
          className="hidden-mobile"
          boxSize="28px"
          objectFit="cover"
          src="/192x192.png"
        />
        <Box p="2">
          <Heading textColor={"white"} size="md">
            PassMan
          </Heading>
        </Box>
        <Spacer />
        <ButtonGroup gap="2">
          <RouterLink to="/addNewPassword">
            <Button size={"sm"} colorScheme="blackAlpha">
              Add
            </Button>
          </RouterLink>

          <Button size="sm" onClick={() => "#"} colorScheme="blackAlpha">
            <CSVLink
              data={data}
              headers={header}
              filename={`${user.attributes.name}_backup_passman.csv`}
            >
              Export
            </CSVLink>
          </Button>
          <Button
            size="sm"
            onClick={signOut}
            variant="solid"
            colorScheme="blackAlpha"
          >
            Logout
          </Button>
        </ButtonGroup>
      </Flex>
      <Table_body list={list} />
    </>
  );
};

export default MainBody;
