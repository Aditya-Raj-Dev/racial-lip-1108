import React, { useState } from "react";
// import ketto from "../../Image/ketto.png";
import { login } from "../Redux/AuthReducer/action";
import { Box, Flex, Input, Button, Text } from "@chakra-ui/react";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
} from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import * as types from '../Redux/AuthReducer/actionTypes'
const Login = () => {
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const [err, setErr] = useState("");
  const [alertActive, setAlertActive] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // validating the email using email regex
  const checkValidEmail = (e) => {
    setEmail(e.target.value);
    if (/^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/.test(email) === false) {
      setErr("Please Enter the valid Email"); // show the error of writing email is valid or not
    } else {
      setErr(""); // if email is valid then don't show error
      return;
    }
  };
  // check the user is existed or not
  const checkUser = (userData, email, pwd) => {
    let user = userData.find(
      (user) => user.email === email && user.pwd === pwd
    );
    if (user) return user;
  };

  // submitting the form
  const handleSubmit = (e) => {
    dispatch({ type: types.LOGIN_REQUEST });
    e.preventDefault();

    axios
      .get("http://localhost:8080/users")
      .then((res) => {
        dispatch({
          type: types.LOGIN_SUCCESS,
          payload: checkUser(res.data, email, pwd),
        });
        navigate("/");

      })
      .catch((err) =>
        dispatch({ type: types.LOGIN_FAILURE, payload: err.message })
      );
    if (alertActive) {
      setAlertActive(false);
    } else setAlertActive(true);
  };
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
              placeholder="enter email address"
              border={"none"}
              onChange={(e) => checkValidEmail(e)}
            />
          </Flex>
          <Flex marginBottom={"10px"}>
            <FormLabel>Password:</FormLabel>
            <Input
              type="password"
              placeholder="enter password"
              border={"none"}
              onChange={(e) => setPwd(e.target.value)}
            />
          </Flex>
          <Button
            bg="rgb(1,191,189)"
            p={"10px 150px"}
            marginBottom={"10px"}
            color={"white"}
            onClick={(e) => handleSubmit(e)}
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
