import React, { useState } from "react";
import ketto from "../Image/ketto.png";
import { login } from "../Redux/AuthReducer/action";
import { Box, Flex, Input, Button, Text } from "@chakra-ui/react";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
} from "@chakra-ui/react";
import { useDispatch } from "react-redux";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  console.log("email", email, "password", password);

  return (
    <Box
      style={{
        backgroundImage:
          "url('https://kettocdn.gumlet.io/media/banner/0/71/image/626a109be777492340e46d013c3cad0857a5da3a.png?w=1300&dpr=1.5')",
        height: "80vh",
        // marginTop:'-70px',
        // fontSize:'50px',
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Box
        m={"auto"}
        width={"400px"}
        display="flex"
        marginTop={"100px"}
        boxShadow="sm"
        p="10"
        rounded="md"
        bg="white"
      >
        <FormControl>
          <Flex marginBottom={"10px"}>
            <FormLabel>Email:</FormLabel>
            <Input
              type="email"
              value={email}
              placeholder="enter your email address"
              border={"none"}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Flex>
          <Flex marginBottom={"10px"}>
            <FormLabel>Password:</FormLabel>
            <Input
              type="password"
              value={password}
              placeholder="enter your password"
              border={"none"}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Flex>
          <Button
            bg="rgb(1,191,189)"
            p={"10px 150px"}
            marginBottom={"10px"}
            color={"white"}
          >
            Sign in
          </Button>
          <Text>OR</Text>
          <Flex marginBottom={"10px"}>
            <FormLabel>Phone:</FormLabel>
            <Input type={"number"} placeholder={"enter phone number"} />
          </Flex>
          <Button bg="rgb(1,191,189)" p={"10px 150px"} color={"white"}>
            Get Otp
          </Button>
        </FormControl>
      </Box>
    </Box>
  );
};

export default Login;
