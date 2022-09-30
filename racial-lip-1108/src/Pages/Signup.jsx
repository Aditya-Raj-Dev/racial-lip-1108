import React from "react";
import { useState } from "react";
import { Link, Box, Button, Input, Stack, Text } from "@chakra-ui/react";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  return (
    <Stack w="100%">
      <Box>
        <Box
          w={{ base: "90%", sm: "90%", lg: "35%" }}
          position="absolute"
          ml={{ base: "5%", sm: "5%", lg: "32.5%" }}
          mt="10"
          display="flex"
          flexDirection="column"
        >
          <Box display="flex">
            <Text
              m="auto"
              fontSize="4xl"
              color="rgb(1,191,189)"
              fontWeight="400"
              fontFamily="Montserrat Light,sans-serif"
            >
              CREATE ACCOUNT
            </Text>
          </Box>
          <Box display="flex">
            <Text
              m="auto"
              mt="4"
              fontSize="md"
              color="gray"
              fontWeight="thin"
              fontFamily="Montserrat Light,sans-serif"
            >
              {" "}
              Complete the form below to create a Ketto.org account.
            </Text>
          </Box>
          <Box mt="8" display="flex" flexDirection="column">
            <Input
              w="90%"
              m="auto"
              focusBorderColor="rgb(18,40,76)"
              borderColor="1px solid black"
              borderRadius="0px"
              p="4"
              placeholder="Email"
              type="email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              w="90%"
              m="auto"
              mt="4"
              focusBorderColor="rgb(18,40,76)"
              borderColor="1px solid black"
              borderRadius="0px"
              p="4"
              placeholder="First Name"
              type="text"
              onChange={(e) => setFirstName(e.target.value)}
            />

            <Input
              w="90%"
              m="auto"
              mt="4"
              focusBorderColor="rgb(18,40,76)"
              borderColor="1px solid black"
              borderRadius="0px"
              p="4"
              placeholder="Last Name"
              type="text"
              onChange={(e) => setLastName(e.target.value)}
            />

            <Input
              w="90%"
              m="auto"
              mt="4"
              focusBorderColor="rgb(18,40,76)"
              borderColor="1px solid black"
              borderRadius="0px"
              p="4"
              placeholder="Password"
              type="password"
              onChange={(e) => setPass(e.target.value)}
            />
            <Button
              w="50%"
              m="auto"
              mt="4"
              bg="rgb(1,191,189)"
              borderRadius="0"
              color="White"
            >
              CREATE ACCOUNT
            </Button>
          </Box>
          <Box display="flex" justifyContent="center" mt="8">
            <Text color="gray" fontSize="sm">
              Already have an account?
            </Text>
            <Link to="/login">
              <Text
                ml="2"
                textDecoration="none"
                fontSize="sm"
                color="rgb(1,191,189)"
              >
                Login
              </Text>
            </Link>
          </Box>
        </Box>
        <Box position="absolute" mt="650px" w="100%"></Box>
      </Box>
    </Stack>
  );
};

export default Signup;
