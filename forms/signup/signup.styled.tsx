import styled from "styled-components";

export const DesktopWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: row;
  overflow: hidden;
`;

export const MobileWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: row;
`;

export const DesktopInfoWrapper = styled.div`
  width: 50vw;
  padding: 56px;
  background-size: contain;
  background-color: #fd87a3;
  background-position: bottom;
  background-repeat: no-repeat;
  background-image: url("/signup-image.svg");
`;

export const Content = styled.div`
  display: flex;
  margin: 0 auto;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 400px;
  overflow: hidden;
  overflow-y: auto;
  padding: 20px 0px;
`;

export const SignUpTextWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

export const LogoWrapper = styled.div`
  padding: 8px 24px;
  width: fit-content;
  border-radius: 30px;
  background-color: white;
`;

export const ContentWrapper = styled.div`
  width: 100%;
  display: flex;
  padding-left: 24px;
  padding-right: 24px;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
`;
