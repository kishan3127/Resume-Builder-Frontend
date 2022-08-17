import React, { useEffect, useState } from "react";
import { Row, Col } from "antd";
import styled from "styled-components";
import Image from "next/image";

import loginImage from "../../asset/login-2.png";
import LoginForm from "../../forms/login";

import { Text } from "../styles";
import { useRouter } from "next/router";
import Loader from "components/loader";

export const LeftSideContent = styled.div`
  // background: #fff7fc;
  height: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 4px 0px 16px 2px #d3d3d359;

  @media only screen and (max-width: 767px) {
    margin-bottom: 100px;
  }
`;

const LoginFormWrapper = styled(LoginForm)`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 100%;
`;
const CustomRow = styled(Row)`
  height: 100%;
  min-height: 100vh;
  overflow: hidden;
`;
export const FormContainer = styled.div`
  width: 310px;
  margin: 0 auto;
  max-width: 100%;
  overflow: hidden;
  clear: both;
`;
const LoginScreen = (props) => {
  const router = useRouter();
  const [loggedIn] = useState(props.user.loggedIn);
  useEffect(() => {
    if (loggedIn) {
      router.push(`/dashboard`);
    }
  }, [loggedIn]);

  if (props.user.loggedIn) {
    return <Loader />;
  }
  return (
    <>
      <CustomRow align="middle">
        <Col xs={{ span: 24 }} md={{ span: 12 }}>
          <LeftSideContent>
            <Image src={loginImage} alt="Picture of the author" />
          </LeftSideContent>
        </Col>
        <Col xs={{ span: 24 }} md={{ span: 12 }}>
          <Text
            mb="40px"
            fs="50px"
            fl="none"
            lh="1.3"
            ta="center"
            color="black"
          >
            Login
          </Text>
          <FormContainer>
            <LoginFormWrapper />
          </FormContainer>
        </Col>
      </CustomRow>
    </>
  );
};

export default LoginScreen;
