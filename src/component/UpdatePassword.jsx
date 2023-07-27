import { React, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

import { RepeatClockIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  HStack,
  Heading,
  Input,
  Spacer,
  useToast,
} from "@chakra-ui/react";
import { updateCredentials } from "../server/user";
import { generateStrongPassword } from "../server/util";

const UpdatePassword = (props) => {
  const [values, setValues] = useState({
    userId: "",
    id: "",
    username: "",
    website: "",
    password: "",
    _version: "",
  });

  const location = useLocation();

  const toast = useToast();

  useEffect(() => {
    handleReset();
  }, []);

  const handleSubmit = () => {
    updateCredentials({ ...values })
      .then((res) => console.log(res))
      .then(() =>
        toast({
          duration: 1000,
          description: "updated successfuly",
          variant: "subtle",
          position: "top",
        })
      )
      .catch((e) => console.log(e));
  };

  // curring
  const handleChange = (name) => (e) => {
    setValues({ ...values, [name]: e.target.value });
  };

  function handleReset() {
    const { id, password, username, _version, website } = location.state;
    console.log(location.state);
    setValues({ ...values, id, password, username, _version, website });
  }

  function handlePasswordGeneration() {
    const temp = generateStrongPassword();
    setValues({ ...values, password: temp });
  }
  return (
    <>
      <Flex
        flexDirection="column"
        width="100wh"
        height="100vh"
        backgroundColor="white.200"
        justifyContent="center"
        alignItems="center"
      >
        <Box
          padding={"4"}
          width="80%"
          maxW="lg"
          borderWidth="1px"
          borderRadius="lg"
          overflow="hidden"
        >
          <Heading marginBottom={"10"} size={"xl"} color={"white"}>
            Add New Password
            <Spacer />
            <Button
              variant="solid"
              size="sm"
              rightIcon={<RepeatClockIcon />}
              colorScheme={"blackAlpha"}
              onClick={handleReset}
            >
              Reset
            </Button>
          </Heading>
          <FormControl color={"white"}>
            <HStack marginBottom={"3"}>
              <FormLabel>Username</FormLabel>
              <Input
                onChange={handleChange("username")}
                type="text"
                placeholder="user name"
                value={values.username}
              />
            </HStack>

            <HStack marginBottom={"3"}>
              <FormLabel>product/website</FormLabel>
              <Input
                onChange={handleChange("website")}
                type="text"
                placeholder="https://examplesite.com"
                value={values.website}
              />
            </HStack>

            <HStack marginBottom={"3"}>
              <FormLabel>Password</FormLabel>
              <Input
                onChange={handleChange("password")}
                type="text"
                placeholder="create a strong password"
                value={values.password}
              />
            </HStack>

            <Flex py={3}>
              <Spacer />

              <Button colorScheme={"green"} onClick={handlePasswordGeneration}>
                Generate Password
              </Button>
            </Flex>
            <Flex>
              <Spacer />
              <Link to="/">
                <Button colorScheme={"red"} variant="outline" marginRight={"4"}>
                  Close
                </Button>
              </Link>
              <Button colorScheme={"blue"} onClick={handleSubmit}>
                Update
              </Button>
            </Flex>
          </FormControl>
        </Box>
      </Flex>
    </>
  );
};

export default UpdatePassword;
