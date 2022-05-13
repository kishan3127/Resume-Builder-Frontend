import styled from "styled-components";
import { Button, Divider } from "antd";

export const Block = styled.div`
  padding: 0 24px;
`;

export const Title = styled.div`
  ${({ mb }: { mb?: string }) => `
    font-size: 16px;
    font-weight: 600;
    text-align: left;
    line-height: 24px;
    color: #595959;
    font-style: normal;
    letter-spacing: 0em;
    margin-bottom: ${mb || "16px"};
  `}
`;

export const AddAddress = styled(Button)`
  width: 100%;
  height: 40px;
  cursor: pointer;
  color: #597ef7;
  box-shadow: none;
  text-shadow: none;
  text-align: center;
  border-radius: 6px;
  border-color: #597ef7;
  background-color: #ffffff;
`;

export const Separator = styled(Divider)`
  margin-top: 16px;
  margin-bottom: 12px;
`;

export const Text = styled.div`
  ${({ color, mb, td }: { mb?: string; color?: string; td?: string }) => `
    font-size: 14px;
    font-weight: 400;
    line-height: 22px;
    margin-bottom: ${mb || 0};
    color: ${color || "#595959"};
    text-decoration: ${td || "none"};
  `}
`;

export const FlexWrapper = styled.div`
  ${({ align, justify }: { align?: "string"; justify?: "string" }) => `
    display: flex;
    align-items: ${align || "stretch"};
    justify-content: ${justify || "flex-start"};
  `}
`;
