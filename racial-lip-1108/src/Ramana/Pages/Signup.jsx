import React from "react";
import { useState } from "react";
import { Link, Box, Button, Input, Stack, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const Signup = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const [err, setErr] = useState("");
const [status,setStatus] = useState("")
  const navigate = useNavigate();
  // checking the email is valid or not with email regex
  const checkValidEmail = (e) => {
    setEmail(e.target.value);
    if (/^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/.test(email) === false) {
      setErr("Please Enter the valid Email"); // show the error of writing email
    } else {
      setErr(""); // if email is valid then don't show error
      return;
    }
  };
  console.log(firstName, lastName, pwd, email);
  // submit the user details to the database;
  const handleSubmit = (e) => {
    e.preventDefault();
    // checking the feilds are filled or not if feild are filled then post in to the database
    if (firstName !== "" || email !== "" || pwd !== "") {
      axios
        .post("https://kitto-app.herokuapp.com/users", {
          firstName,
          email,
          pwd,
        })
        .then((res) => res.data)
        .catch((err) => err.message);
      setStatus(true);
      alert("Account created succesfully!");
      navigate("/login");
    } else setStatus(false);
  };

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
              onChange={(e) => checkValidEmail(e)}
            />
            {err ? <Text color="red">Please Enter Valid Email</Text> : null}
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
              onChange={(e) => setPwd(e.target.value)}
            />
            <Button
              w="50%"
              m="auto"
              mt="4"
              bg="rgb(1,191,189)"
              borderRadius="0"
              color="White"
              onClick={(e) => handleSubmit(e)}
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
