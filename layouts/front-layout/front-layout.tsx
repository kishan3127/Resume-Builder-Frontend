import React, { useState } from "react";
import "antd/dist/antd.css";
import styled from "styled-components";

import { Layout } from "antd";

export const CustomFrontWrapper = styled(Layout)`
  ${({ bg }: { bg?: string }) => `  background: ${bg};
  font-family: 'PlayFair Display', sans; `}
`;

function CustomFront({ children, bg }: { children: any; bg: string }) {
  return (
    <>
      <CustomFrontWrapper bg={bg}>{children}</CustomFrontWrapper>
    </>
  );
}

CustomFront.defaultProps = {
  bg: "red",
};

export default CustomFront;
