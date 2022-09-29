import React from 'react'
import { Box, Button, Input, Stack, Text } from "@chakra-ui/react";

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// import MainNavbar from "../Components/MainNavbar";
// import {Link as RLink} from "react-router-dom"
// import Footer from "../Footer/Footer";


const Signup = () => {
    const [email, setEmail] = useState("");
const [pass, setPass] = useState("");
const [firstName, setFirstName] = useState("");
const [lastName, setLastName] = useState("");
const navigate = useNavigate()

const handleSignUp = async () => {
    if(email, pass, firstName, lastName){
        const payload = {
            Email:email, 
            Password:pass, 
            FirstName:firstName,
            LastName:lastName
        }
        await fetch("https://stark-lake-19402.herokuapp.com/user/signup", {
            method:"POST",
            body: JSON.stringify(payload), 
            headers:{"Content-Type":"application/json"}
        })
        // .then((res)=> res.json())
        //     .then((res)=> {
        //         console.log(res);
              
        //     }
            //     )
            // .catch((err)=> console.log(err));
            alert("SignUp Successful")

    }
  navigate("/login")
}
  return (
    
    <Stack w="100%">
    {/* <MainNavbar/> */}
    <Box>
<Box
        h="35px"
        bg="rgb(215,235,242)"
        display="flex"
        alignItems="center"
        justifyContent="center"
        border="none"
        mt={{lg:'32'}}
        textAlign="center"
        // color={"rgb(96,111,135)"}
        color={"black"}
        fontSize="0.3rem" letterSpacing={"1px"}
      >
<div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active" data-bs-interval="10000">
    <Text
          fontFamily="Montserrat Medium,sans-serif"
          fontSize="10px"
          color="gray"
          fontWeight="500"
          letterSpacing="-10%"
        >FREE SHIPPING FOR BLUEREWARDS MEMBER</Text> 
    </div>
    <div class="carousel-item" data-bs-interval="2000">
   
    </div>
    <div class="carousel-item">
    <Text
          fontFamily="Montserrat Medium,sans-serif"
          fontSize="10px"
          color="gray"
          fontWeight="500"
          letterSpacing="-10%"
        > FREE SAMPLES WITH ALL ORDERS</Text>
    </div>
  </div>
</div>
      </Box>


    <Box
    w={{ base: "90%", sm: "90%", lg: "35%" }}
    position='absolute'
    ml={{base:"5%", sm:"5%", lg:"32.5%"}}
     mt="10"
    display="flex"
    flexDirection="column"
  >
    <Box display="flex">
<Text
        m="auto"
        fontSize="4xl"
        color="rgb(18,40,76)"
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
        Complete the form below to create a bluemercury.com account.
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
        onChange={(e)=> setEmail(e.target.value)}
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
        onChange={(e)=> setFirstName(e.target.value)}
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
        onChange={(e)=> setLastName(e.target.value)}
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
        onChange={(e)=> setPass(e.target.value)}
      />
      <Button
        w="50%"
        m="auto"
        mt="4"
        bg="rgb(18,40,76)"
        borderRadius="0"
        color="White"
        onClick={handleSignUp}
      >
       CREATE ACCOUNT
      </Button>
    </Box>
    <Box display="flex" justifyContent="center" mt="8">
      <Text color="gray" fontSize="sm">
      Already have a bluemercury.com account?
      </Text>
      <Link to="/login">
        <Text
          ml="2"
          textDecoration="underline"
          fontSize="sm"
          color="rgb(18,40,76)"
        >
          SignUP
        </Text>
      </Link>
    </Box>
  </Box>
  <Box position='absolute' mt='650px' w='100%'>
      {/* <Footer/> */}
    </Box>
  </Box>
  </Stack>
  )
};

export default Signup;