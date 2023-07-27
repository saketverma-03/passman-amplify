import { React, useState } from "react";

import { Link } from "react-router-dom";
import { createServiceCredentials } from "../server/user";

import { useAuthenticator } from "@aws-amplify/ui-react";
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
import { generateStrongPassword } from "../server/util";

const AddNewPassword = (props) => {
  const defaultValues = {
    username: "",
    product: "",
    password: "",
  };
  const [values, setValues] = useState(defaultValues);
  const [isLoading, setIsLoading] = useState(false);
  const toast = useToast();

  const { user } = useAuthenticator();

  async function handleSubmit() {
    try {
      toast({
        title: `Adding......`,
        status: "success",
        duration: 2000,
        position: "top",
        variant: "subtle",
      });
      const res = await createServiceCredentials({
        ...values,
        userId: user.attributes.sub,
      });
      setValues({ ...defaultValues });
      toast({
        title: `Added Successfully`,
        status: "success",
        duration: 2000,
        position: "top",
        variant: "subtle",
      });
    } catch (e) {
      console.error(e);
    }
  }

  const handleChange = (name) => (e) => {
    setValues({ ...values, [name]: e.target.value });
  };

  const handlePasswordGeneration = () => {
    const temp = generateStrongPassword();
    setValues({ ...values, password: temp });
  };

  return (
    <>
      <Flex
        flexDirection="column"
        width="100wh"
        height="100vh"
        // backgroundColor="white.200"
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
          <Heading color={"white"} marginBottom={"10"} size={"xl"}>
            Add New Password
          </Heading>
          <FormControl color={"white"}>
            <HStack marginBottom={"3"}>
              <FormLabel>Username</FormLabel>
              <Input
                onChange={handleChange("username")}
                type="text"
                placeholder="user name"
              />
            </HStack>

            <HStack marginBottom={"3"}>
              <FormLabel>product/website</FormLabel>
              <Input
                onChange={handleChange("product")}
                type="text"
                placeholder="https://examplesite.com"
              />
            </HStack>

            <HStack marginBottom={"3"}>
              <FormLabel>Password</FormLabel>
              <Input
                onChange={handleChange("password")}
                value={values.password}
                type="text"
                placeholder="create a strong password"
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
              {/* <Box> */}
              <Link to="/">
                <Button
                  colorScheme={"red"}
                  _hover={{ background: "rgba(255, 118, 154, 0.46)" }}
                  variant="outline"
                  marginRight={"4"}
                >
                  Close
                </Button>
              </Link>
              <Button colorScheme={"blue"} onClick={handleSubmit}>
                Add
              </Button>
            </Flex>
          </FormControl>
        </Box>
      </Flex>
    </>
  );
};

export default AddNewPassword;
