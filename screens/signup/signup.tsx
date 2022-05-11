import React from "react";
import styled from "styled-components";
import { Row, Col, Divider } from "antd";
import Image from "next/image";

import singUpImage from "../../asset/signup-2.jpg";
import SingUpForm from "../../forms/signup";

import { Text } from "../styles";

export const LeftSideContent = styled.div`
  height: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 4px 0px 16px 2px #d3d3d359;
`;

export const CustomRow = styled(Row)`
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
export const ImageContainer = styled(Image)`
  align-self: end;
`;
export const ScrollerSection = styled(Col)`
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  overflow-y: auto;

  @media only screen and (min-width: 768px) and (max-width: 1500px) {
    height: 100vh;
  }
`;
export const WrapperSection = styled.div`
  padding: 10px;
  height: 100%;
  overflow: hidden;
  overflow-y: auto;
`;

const SignupScreen = () => {
  return (
    <>
      <CustomRow align="middle">
        <Col xs={{ span: 24 }} md={{ span: 12 }}>
          <LeftSideContent>
            <ImageContainer src={singUpImage} alt="Picture of the author" />
          </LeftSideContent>
        </Col>
        <ScrollerSection xs={{ span: 24 }} md={{ span: 12 }}>
          <WrapperSection>
            <Text fs="50px" mb="0" fl="none" lh="1.3" ta="center" color="black">
              Create an account
            </Text>

            <FormContainer>
              <Divider orientation="center"></Divider>
              <SingUpForm />
            </FormContainer>
          </WrapperSection>
        </ScrollerSection>
      </CustomRow>
    </>
  );
};

export default SignupScreen;
