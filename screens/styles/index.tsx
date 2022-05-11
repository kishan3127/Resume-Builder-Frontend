import styled from "styled-components";
import { Row, Col, Form, Button, Layout, Divider } from "antd";

export const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
`;

export const DesktopShow = styled.div`
  display: none;
`;
export const MobileShow = styled.div``;

export const Content = styled.div`
  max-width: 1180px;
  display: flex;
  margin: 0 auto;
  align-items: center;
  justify-content: center;
`;

export const LoginWrapper = styled.div`
  width: 100%;
  display: flex;
  padding-left: 24px;
  padding-right: 24px;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
`;

export const Title = styled.span`
  margin-top: 8px;
  font-size: 36px;
  font-weight: 600;
  line-height: 46px;
`;

export const SubTitle = styled.span`
  font-size: 16px;
  margin-top: 4px;
  font-weight: 400;
  line-height: 24px;
  margin-bottom: 12px;
`;

export const Separator = styled(Divider)`
  margin-top: 14px;
  margin-bottom: 14px;
`;

export const SeparatorWithText = styled(Divider)`
  &.ant-divider-horizontal {
    margin-top: 8px;
    margin-bottom: 8px;
  }

  .ant-divider-inner-text {
    font-size: 12px;
    font-weight: 400;
    color: #bfbfbb;
    line-height: 20px;
  }
`;

export const AccountText = styled.span`
  font-size: 12px;
  font-weight: 400;
  color: #8c8c8c;
  line-height: 20px;
`;

export const SignInText = styled.a`
  font-size: 12px;
  cursor: pointer;
  color: #f7597e;
  margin-left: 4px;
  font-weight: 400;
  line-height: 20px;
  text-decoration: none;
`;

export const SignInTextWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledForm = styled(Form)`
  width: 100%;
`;

export const FormButton = styled(Button)`
  ${({
    mb,
    color,
    bgcolor,
    borderColor,
  }: {
    mb?: string;
    color?: string;
    bgcolor?: string;
    borderColor?: string;
  }) => `
    width: 100%;
    height: 40px;
    margin-bottom: ${mb || 0};
    color: ${color || "#597ef7"};
    border-color: ${borderColor || "#597ef7"};
    background-color: ${bgcolor || "transparent"};
  `}
`;

export const FormItem = styled(Form.Item)`
  margin-bottom: 12px;

  &.no-bottom-margin {
    margin-bottom: 0;
  }

  .ant-form-item-label {
    padding-bottom: 4px;

    > label {
      height: auto;
      font-size: 12px;
      font-weight: 400;
      line-height: 20px;

      &.ant-form-item-required:not(.ant-form-item-required-mark-optional):before {
        display: none;
      }
    }
  }

  .ant-checkbox-wrapper {
    color: #8c8c8c;
    font-size: 12px;
    font-weight: 400;
    line-height: 20px;
  }
`;

export const HeaderWrapper = styled.div`
  width: 100%;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  margin-top: 24px;
  margin-bottom: 24px;
`;

export const IconWrapper = styled.div`
  width: 100%;
  display: flex;
  position: absolute;
  align-items: center;
  justify-content: space-between;
`;

export const PageWrapper = styled.main`
  width: 100vw;
  height: 100vh;
  background: white;
`;

export const PageLayout = styled(Layout)`
  height: 100%;
  display: flex;
  margin: 0 auto;
  background: transparent;
  background-color: transparent;
`;

export const PageHeader = styled(Layout.Header)`
  height: auto;
  flex: 0 0 auto;
  max-width: 1300px;
  line-height: unset;
  background: #fff;
  padding: 24px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
  box-shadow: 0px 3px 6px -4px rgba(0, 0, 0, 0.1);
`;

export const PageContent = styled(Layout.Content)`
  ${({
    m,
    p,
    maxWidth,
    width,
  }: {
    m?: string;
    p?: string;
    width?: string;
    maxWidth?: string;
  }) => `
  background: white;
  overflow-y: scroll;
  flex: 1 1 auto;
  max-width: ${maxWidth || "1300px"};
  margin: ${m || 0};
  width: ${width || "100%"};
  padding: ${p || 0};
`}
`;

export const PageFooter = styled(Layout.Footer)`
  bottom: 0;
  width: 100%;
  flex: 0 0 auto;
  padding: 0px;
  position: fixed;
  background: white;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
`;

export const Text = styled.div`
  ${({
    fl,
    fs,
    fw,
    ta,
    lh,
    mt,
    ml,
    mb,
    p,
    mr,
    color,
    width,
    cursor,
    bg,
    border,
  }: {
    fl?: string;
    fs?: string;
    lh?: string;
    ta?: string;
    mt?: string;
    mb?: string;
    ml?: string;
    p?: string;
    mr?: string;
    fw?: number;
    color?: string;
    width?: string;
    cursor?: string;
    border?: string;
    bg?: string;
  }) => `
    float: ${fl || "left"};
    margin-top: ${mt || 0};
    margin-left: ${ml || 0};
    padding: ${p || 0};
    margin-right: ${mr || 0};
    font-weight: ${fw || 400};
    width: ${width || "auto"};
    margin-bottom: ${mb || 0};
    font-size: ${fs || "14px"};
    line-height: ${lh || "22px"};
    text-align: ${ta || "initial"};
    color: ${color || "#595959"};
    cursor: ${cursor || "default"};
    background:${bg || "transparent"};
    border:${border || "0px"}
  `}
`;

export const MobileHiddenText = styled(Text)``;
export const DesktopHiddenText = styled(Text)``;

export const WordWrap = styled(Text)``;

export const FlexWrapper = styled.div`
  ${({
    mb,
    mt,
    ml,
    mr,
    pb,
    pt,
    pl,
    pr,
    width,
    cg,
  }: {
    mb?: string;
    mt?: string;
    mr?: string;
    ml?: string;
    pb?: string;
    pt?: string;
    pr?: string;
    pl?: string;
    width?: string;
    height?: string;
    cg?: string;
  }) => `
    display: flex;
    margin-top: ${mt || 0};
    margin-left: ${ml || 0};
    margin-right: ${mr || 0};
    margin-bottom: ${mb || 0};
    padding-top: ${pt || 0};
    padding-left: ${pl || 0};
    padding-right: ${pr || 0};
    padding-bottom: ${pb || 0};
    width: ${width || "100%"};
    column-gap: ${cg || "0"};
  `}
`;
export const FlexContainer = styled.div`
  display: flex;
  background-color: transparent;
`;

export const InlineWrapper = styled.div`
  ${({
    mb,
    mt,
    ml,
    mr,
    pb,
    pt,
    pl,
    pr,
    width,
    height,
  }: {
    mb?: string;
    mt?: string;
    mr?: string;
    ml?: string;
    pb?: string;
    pt?: string;
    pr?: string;
    pl?: string;
    width?: string;
    height?: string;
  }) => `
    display: inline-block;
    margin-top: ${mt || 0};
    margin-left: ${ml || 0};
    margin-right: ${mr || 0};
    margin-bottom: ${mb || 0};
    padding-top: ${pt || 0};
    padding-left: ${pl || 0};
    padding-right: ${pr || 0};
    padding-bottom: ${pb || 0};
    width: ${width || "100%"};
    height: ${height || "auto"};
  `}
`;
export const ContainerFlex = styled.div`
  ${({
    justify,
    align,
    direction,
    ml,
    p,
  }: {
    justify?: string;
    align?: string;
    direction?: string;
    ml?: string;
    p?: string;
  }) => `
  display: flex;
  justify-content: ${justify || "auto"};
  align-items: ${align || "auto"};
  flex-direction: ${direction || "row"};
  margin-left: ${ml || "0px"};
  padding: ${p || "0px"};
`}
`;

interface ImageProps {
  img?: any;
}

export const HomeBackground = styled.div`
  background: ${(props: ImageProps) =>
    `url( ${props.img} ) center no-repeat` || "transparent"};
  background-size: cover;
`;

export const ShadowElement = styled(Col)`
  ${({ p, m }: { p?: string; m?: string }) => `
  background: #ffffff;
  padding: ${p || "0px"};
  margin: ${m || "0px"};
  box-shadow: 0px 6px 16px rgba(0, 0, 0, 0.08);
  border-radius: 10px;
  `}
`;

export const RowElement = styled(Row)`
  column-gap: 18px;
`;

export const MainHeading = styled.h1`
  ${({ color }: { color?: string }) => `
  font-family: Open Sans;
  font-style: normal;
  font-weight: 600;
  font-size: 30px;
  line-height: 38px;
    color: ${color || "#262626"};
  `}
`;
export const SubHeading = styled.h3`
  ${({
    color,
    fs,
    mb,
    lh,
  }: {
    mb?: string;
    color?: string;
    fs?: string;
    lh?: string;
  }) => `
  font-family: Open Sans;
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  font-size: ${fs || "20px"};
  line-height: ${lh || "28px"};
  color: ${color || "#262626"};
  margin-bottom: ${mb || "0px"}
  `}
`;

export const DefaultButton = styled(Button)`
  ${({
    margin,
    type,
    color,
    bgcolor,
    borderColor,
    br,
  }: {
    margin?: string;
    type?: string;
    color?: string;
    bgcolor?: string;
    borderColor?: string;
    br?: string;
  }) => `
    margin: ${margin || 0};
    color: ${type === "primary" ? color || "#fff" : color || "#000"};
    border-color: ${borderColor || "transparent"};
    background-color: ${bgcolor || "#597ef7"};
    border-radius: ${br || "5px"};

    &:hover , &:focus{
      color: ${type === "primary" ? color || "#fff" : color || "#000"};
      border-color: ${borderColor || "transparent"};
      background-color: ${bgcolor || "#597ef7"};
      border-radius: ${br || "5px"};
    }
  `}
`;

export const HeadSection = styled.div`
  ${({
    padding,
    border,
    flex,
    justify,
  }: {
    padding?: string;
    border?: boolean;
    flex?: boolean;
    justify?: string;
  }) => `
  border-bottom: ${!border ? "0px" : "1px solid #f0f0f0"};
  display: ${!flex ? "block" : "flex"};
  padding: ${padding || "16px 24px"};
  justify-content : ${justify || "center"};
  margin-bottom:10px;
`}
`;

export const SeeAll = styled(Button)`
  ${({
    padding,
    border,
    display,
    justify,
    color,
    fs,
  }: {
    padding?: string;
    border?: boolean;
    display?: string;
    justify?: string;
    color?: string;
    fs?: string;
  }) => `
  border-bottom: ${!border ? "0px" : "1px solid #f0f0f0"};
  display: ${display || "block"};
  padding: ${padding || "16px 24px"};
  color: ${color || "#000"};
  justify-content : ${justify || "center"};
  line-height: 22px;
  font-size : ${fs || "14px"};
  margin-bottom:10px;
`}
`;

export const Division = styled.div`
  ${({
    overflowX,
    overflowY,
    w,
    h,
    display,
    border,
    p,
    m,
    background,
    minH,
    maxH,
  }: {
    overflowX?: string;
    overflowY?: string;
    w?: string;
    h?: string;
    display?: string;
    border?: string;
    background?: string;
    p?: string;
    m?: string;
    minH?: string;
    maxH?: string;
  }) => `
  width: ${w || "auto"};
    overflow-x: ${overflowX || "visible"};
    overflow-y: ${overflowY || "visible"};
    height: ${h || "auto"};
    display: ${display || "block"};
    border: ${border || "0px"};
    padding: ${p || "0px"};
    margin: ${m || "0px"};
    background: ${background || "transparent"};
    min-height: ${minH || "0"};
    max-height: ${maxH || "none"};
  `}
`;
