import React from "react";
import "antd/dist/antd.css";
import styled from "styled-components";

import { Layout } from "antd";

export const CustomFrontWrapper = styled(Layout)`
  ${({ bg }: { bg?: string }) => `
  background: ${bg};
  font-family: var(--front-primary-font)
  `}
`;

function CustomFront({ children, bg }: { children: any; bg: string }) {
  return (
    <>
      <CustomFrontWrapper bg={bg}>{children}</CustomFrontWrapper>
    </>
  );
}

CustomFront.defaultProps = {
  bg: "white",
};

export default CustomFront;
