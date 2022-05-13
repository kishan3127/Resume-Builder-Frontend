import styled from "styled-components";

import { Layout } from "antd";

import { PageContent } from "../../screens/styles";

export const HeaderWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const HomeButtom = styled.button`
  padding: 0;
  border: none;
  border: none;
  outline: none;
  background: transparent;
`;

export const Content = styled(PageContent)`
  ${({
    nomargins,
    nopaddingtop,
    hidefooter,
  }: {
    nomargins?: string;
    nopaddingtop?: string;
    hidefooter?: string;
  }) => `
    flex: 1 1 auto;
    margin-top: 10px;
    max-width: 1300px;
    padding: 14px 0 24px 0;

    ${
      nomargins === "true" &&
      `
      text-align: center;
      margin: 0;
    `
    }

    ${
      nopaddingtop === "true" &&
      `
      text-align: center;
      padding-top: 0;
    `
    }

    ${
      hidefooter === "false" &&
      `
      text-align: center;
      padding-bottom: 90px;
    `
    }
  `}
`;

export const Text = styled.div`
  ${({
    fl,
    fs,
    fw,
    lh,
    mb,
    color,
  }: {
    fl?: string;
    fs?: string;
    lh?: string;
    mb?: string;
    fw?: number;
    color?: string;
  }) => `
    float: ${fl || "left"};
    font-weight: ${fw || 400};
    margin-bottom: ${mb || 0};
    font-size: ${fs || "14px"};
    line-height: ${lh || "22px"};
    color: ${color || "#595959"};
  `}
`;

export const ContentLayout = styled(Layout)`
  background: transparent;
  padding: 0;
`;

export const FixedWidthContainer = styled(Layout)`
  width: 100%;
  margin: 0 auto;
  background: transparent;
  display: flex;
  justify-content: center;
`;
