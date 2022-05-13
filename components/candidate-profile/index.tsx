import Image from "next/image";

import { Collapse, Progress, Row, Col } from "antd";
import { EyeInvisibleOutlined, EyeOutlined } from "@ant-design/icons";
import user from "../../asset/user.jpg";

import styled from "styled-components";

import { Text } from "../../screens/styles";

import CustomFront from "../../layouts/front-layout";
// todo: update the layout

const { Panel } = Collapse;

type Skill = {
  percentage: number;
  show: boolean;
  name: string;
};
type Education = {
  course: string;
  description: string;
};

type Project = {
  description: string;
  role: string;
};

type Skills = {
  [index: number]: Skill;
};

type Intro = {
  title: string;
  description: string;
};

type CandidateProfile = {
  image: string;
  name: string;
  email: string;
  contact: string;
  intro: Intro;
  projects: Project[];
  skills: Skills[];
  educations: Education[];
};

// styledComponents

export const CollapseCustom = styled(Collapse)`
  .ant-collapse-content {
    background: rgb(241, 231, 227) !important;
    padding: 35px 31px 38px 31px;
    font-size: 17px;
    font-family: var(--front-secondary-font);
    color: #232323;
    font-weight: 300;
  }

  .ant-collapse-header {
    font-size: 16px;
    text-transform: uppercase;
    font-family: var(--front-secondary-font);
    font-weight: bold;
    border-bottom: 1px solid rgba(0, 0, 0, 0.5);
  }

  .ant-collapse-item-active .ant-collapse-header {
    border-bottom: 0 !important;
  }
`;

export const LeftContainer = styled.header`
  display: inline-block;
  width: 25%;
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  z-index: 1;

  .iconLogo {
    width: 75px;
    background: var(--front-primary-color);
    height: 75px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 55px;
    line-height: 27px;
  }

  .header-inner {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: 14px 33% 33px 30px;
  }
`;
export const RightContainer = styled.main`
  display: inline-block;
  width: 100%;
  padding-left: 25%;

  .intro-details {
    font-family: var(--front-secondary-font);
    font-weight: 400;
  }
`;

const TopBannerSection = styled.div`
  position: relative;

  .text-container-top {
    text-align: left;
    -webkit-transform: rotate(90deg) translateX(28%);
    -ms-transform: rotate(90deg) translateX(28%);
    -webkit-transform: rotate(90deg) translateX(28%);
    -ms-transform: rotate(90deg) translateX(28%);
    transform: rotate(90deg) translateX(28%);
    left: -50%;
    position: absolute;
    display: block;
    width: 100%;
    top: 50px;
    z-index: 200;

    .first-name {
      -webkit-transform: translateY(0);
      -ms-transform: translateY(0);
      transform: translateY(0);
      h1 {
        color: #faf2f0;
      }
    }
    .second-name {
      position: absolute;
      display: block;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      -webkit-transition: 1s cubic-bezier(0.075, 0.82, 0.165, 1);
      -o-transition: 1s cubic-bezier(0.075, 0.82, 0.165, 1);
      transition: 1s cubic-bezier(0.075, 0.82, 0.165, 1);
      -webkit-clip-path: polygon(0 50%, 100% 50%, 100% 100%, 0 100%) !important;
      clip-path: polygon(0 50%, 100% 50%, 100% 100%, 0 100%) !important;

      h1 {
        -webkit-transform: translateY(0);
        -ms-transform: translateY(0);
        transform: translateY(0);
        color: #63958b;
      }
    }
    h1 {
      font-size: 190px !important;
    }
  }
`;
export const ContainerWrapper = styled.div`
  width: 780px;
  max-width: 100%;
  margin: 0;
  padding: 0 10px;
`;
function callback(key) {
  console.log(key);
}

const AccordionHeaderEducation = (data: { course: String }) => {
  return (
    <>
      <div className="">{data.course}</div>
    </>
  );
};
const AccordionHeaderExprience = (data: { role: String }) => {
  return (
    <>
      <div className="">{data.role}</div>
    </>
  );
};

const CandidateProfile = ({ data }: { data: CandidateProfile }) => {
  const { name, email, contact, intro, educations, projects, skills } = data;
  const firstName = name.split(" ")[0] || "Name Here";
  const [first] = firstName.split(" ")[0] || "N";

  return (
    <>
      <CustomFront bg="#faf2f0">
        <LeftContainer>
          <div className="header-inner">
            <div className="iconLogo">{first}</div>
            <nav></nav>
            <footer></footer>
          </div>
        </LeftContainer>
        <RightContainer>
          <TopBannerSection>
            <Image src={user} alt="Picture of the author" />
            <div className="text-container-top">
              <div className="first-name rotated-name">
                <h1>{firstName}</h1>
              </div>
              <div className="second-name rotated-name">
                <h1>{firstName}</h1>
              </div>
            </div>
          </TopBannerSection>
          email: {email}
          <br></br>
          contact: {contact}
          <br></br>
          <Text p="86px 0 0 0" fl="unset" color="#232323" fs="55px" lh="1.3">
            {intro?.title}
          </Text>
          <ContainerWrapper>
            <section className="intor-section">
              <div className="intro-details">
                <Text
                  fl="unset"
                  mt="18px"
                  mb="18px"
                  color="#444343"
                  fs="17px"
                  fw="inherit"
                  lh="1.765em"
                >
                  {intro?.description}
                </Text>
              </div>
            </section>
            <section>
              <Text
                color="#629489"
                fl="unset"
                lh="1.3"
                fs="40px"
                mb="10px;"
                mt="20px;"
                p="0px 0 0px"
              >
                Education
              </Text>
              <CollapseCustom
                expandIconPosition="right"
                ghost
                onChange={callback}
                expandIcon={({ isActive }) =>
                  isActive ? <EyeOutlined /> : <EyeInvisibleOutlined />
                }
              >
                {educations?.map((education: Education, index: number) => {
                  return (
                    <Panel
                      key={index}
                      header={AccordionHeaderEducation(education)}
                    >
                      <p>{education?.description}</p>
                    </Panel>
                  );
                })}
              </CollapseCustom>
            </section>
            <section>
              <Text
                color="#629489"
                fl="unset"
                lh="1.3"
                fs="40px"
                mb="10px;"
                mt="20px;"
                p="0px 0 0px"
              >
                Exprience
              </Text>

              <CollapseCustom
                ghost
                expandIconPosition="right"
                onChange={callback}
                expandIcon={({ isActive }) =>
                  isActive ? <EyeOutlined /> : <EyeInvisibleOutlined />
                }
              >
                {projects?.map((project: Project, index: number) => {
                  return (
                    <Panel
                      key={index}
                      header={AccordionHeaderExprience(project)}
                    >
                      <p>{project?.description}</p>
                    </Panel>
                  );
                })}
              </CollapseCustom>
            </section>
            <section>
              <Text
                color="#629489"
                fl="unset"
                lh="1.3"
                fs="40px"
                mb="10px;"
                mt="20px;"
                p="0px 0 0px"
              >
                Skills
              </Text>
              <Row gutter={[20, 20]}>
                {skills
                  ?.filter((skill: Skill) => skill.show)
                  .map((skill: Skill, index: number) => {
                    return (
                      <Col key={index}>
                        <Progress
                          type="circle"
                          format={() => `${skill.percentage}%`}
                          percent={skill.percentage}
                          strokeColor="var(--front-primary-color)"
                        />
                        <br />
                        {skill.name}
                        <br />
                      </Col>
                    );
                  })}
              </Row>
            </section>
          </ContainerWrapper>
        </RightContainer>
      </CustomFront>
    </>
  );
};

export default CandidateProfile;
