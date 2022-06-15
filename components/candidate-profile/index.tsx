import Image from "next/image";

import { Collapse, Progress, Row, Col } from "antd";
import { useQuery, gql } from "@apollo/client";

import { EyeInvisibleOutlined, EyeOutlined } from "@ant-design/icons";
import user from "../../asset/user.jpg";

import styled from "styled-components";

import { Text } from "../../screens/styles";

import CustomFront from "../../layouts/front-layout";
import Loader from "../../components/loader";
// todo: update the layout

const { Panel } = Collapse;

const GET_EMPLOYEE = gql`
  query employee($id: ID) {
    employee(id: $id) {
      name
      id
    }
  }
`;

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
  skill_intro: string;
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
    padding-left: 0 !important;
    border-bottom: 1px solid #f1e7e3;
  }

  .ant-collapse-item-active .ant-collapse-header {
    border-bottom: 0 !important;
  }

  span.anticon.anticon-eye-invisible,
  span.ant-collapse-arrow {
    color: #629489;
    font-size: 15px !important;
  }

  span.anticon.anticon-eye-invisible {
    opacity: 0.8;
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
    align-items: baseline;
    justify-content: flex-start;
    padding: 14px 33% 33px 30px;
    flex-direction: column;
    justify-content: space-around;
    height: 100%;
  }

  nav {
    ul {
      list-style-type: none;
      padding: 0;
      a {
        position: relative;
        font-family: var(--front-secondary-font);
        font-size: 16px;
        line-height: 30px;
        font-weight: 500;
        color: #6b6768;
        overflow-x: hidden;
        -webkit-font-smoothing: antialiased;
        padding: 0px;
        display: block;
        text-transform: uppercase;
        line-height: 1.3;
        padding: 10px 0;

        span {
          position: relative;
          color: #232323;
        }

        &.active span {
          -webkit-transform: scaleX(1) !important;
          -ms-transform: scaleX(1) !important;
          transform: scaleX(1) !important;
        }

        & span:hover {
          color: var(--front-primary-color);

          :after {
            -webkit-transform: scaleX(1) !important;
            -ms-transform: scaleX(1) !important;
            transform: scaleX(1) !important;
          }
        }

        span :after {
          width: 100%;
          height: 1px;
          background: #ee7968;
          content: "";
          position: relative;
          display: block;
          bottom: 22px;
          -webkit-transform: scaleX(0);
          -ms-transform: scaleX(0);
          transform: scaleX(0);
          -webkit-transform-origin: left;
          -ms-transform-origin: left;
          transform-origin: left;
          -webkit-transition: 0.3s;
          -o-transition: 0.3s;
          transition: 0.3s;
          position: absolute;
          bottom: 0;
          background-color: var(--front-primary-color);
        }
      }
    }
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
  .skill-name {
    font-family: var(--front-secondary-font);
    font-size: 15px;
    line-height: 1.538em;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    font-weight: 400;
    margin: 25px 0;
    -ms-word-wrap: break-word;
    word-wrap: break-word;
    display: block;
    text-align: center;
    font-weight: 600;
    color: #242424;
    margin: 15px 0 0;
  }

  .right-container-text {
    .title {
      color: #0a1a2b;
      font-family: var(--front-secondary-font);
      font-size: 16px;
      line-height: 1.375em;
      font-weight: 600;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      margin: 25px 0;
      -ms-word-wrap: break-word;
      word-wrap: break-word;
    }
    .right-container-details {
      font-size: 17px;
      line-height: 23px;
      color: #595959;
      font-family: var(--front-secondary-font);
      word-break: break-word;
    }
  }

  span.ant-progress-text {
    color: rgb(36, 36, 36) !important;
    font-family: var(--front-secondary-font);
    font-weight: 700;
    font-size: 21px;
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
  max-width: 100%;
  margin: 0 auto;
  padding: 0px;
  width: 1800px;
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

const CandidateProfile = ({
  candidateId,
  staticData,
}: {
  candidateId: string;
  staticData: CandidateProfile;
}) => {
  const { data, loading, error } = useQuery(GET_EMPLOYEE, {
    variables: { id: candidateId },
  });

  if (loading) {
    return <Loader />;
  }

  if (error) {
    console.error(error);
    return null;
  }
  const { name } = data?.employee;
  const { email, contact, intro, educations, projects, skills, skill_intro } =
    staticData;
  const firstName = name.split(" ")[0] || "Name Here";
  const [first] = firstName.split(" ")[0] || "N";
  return (
    <>
      <CustomFront bg="#faf2f0">
        <ContainerWrapper>
          <LeftContainer>
            <div className="header-inner">
              <div className="iconLogo">{first}</div>
              <nav>
                <ul>
                  <li>
                    <a href="#intro">
                      <span>Biography</span>
                    </a>
                  </li>
                  <li>
                    <a href="#education">
                      <span>Education</span>
                    </a>
                  </li>
                  <li>
                    <a href="#exprience">
                      <span>Expertise</span>
                    </a>
                  </li>
                  <li>
                    <a href="#skills">
                      <span>Skills</span>
                    </a>
                  </li>
                </ul>
              </nav>
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

            <Row gutter={[10, 20]} id="intro">
              <Col span={20}>
                <Text
                  p="86px 0 0 0"
                  fl="unset"
                  color="#232323"
                  fs="55px"
                  lh="1.3"
                >
                  {intro?.title}
                </Text>
              </Col>
              <Col span={16}>
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
                <section id="education">
                  <Text
                    color="#629489"
                    fl="unset"
                    lh="1.3"
                    fs="40px"
                    mb="20px;"
                    mt="20px;"
                    p="50px 0 0 0"
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
                <section id="exprience">
                  <Text
                    color="#629489"
                    fl="unset"
                    lh="1.3"
                    fs="40px"
                    mb="20px;"
                    mt="20px;"
                    p="50px 0 0 0"
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
              </Col>
              <Col span={8}>
                <div className="right-container-text">
                  <h4 className="title">Hello! I Am {firstName}</h4>
                  <div className="right-container-details">
                    {email && (
                      <p>
                        <b>Email:</b>
                        <a href={`mailto:${email}`}> {email}</a>
                      </p>
                    )}
                    {contact && (
                      <p>
                        <b>Contact:</b>{" "}
                        <a href={`tel:${contact}`}> {contact}</a>
                      </p>
                    )}
                  </div>
                </div>
              </Col>
            </Row>

            <Row id="skills">
              <Col span={16}>
                <Text
                  p="86px 0 0 0"
                  fl="unset"
                  color="#232323"
                  fs="55px"
                  lh="1.3"
                  mb="40px"
                >
                  {skill_intro}
                </Text>
              </Col>
              <Col span={16} style={{ marginBottom: "30px" }}>
                <section>
                  <Row justify="start" gutter={[20, 30]}>
                    {skills
                      ?.filter((skill: Skill) => skill.show)
                      .map((skill: Skill, index: number) => {
                        return (
                          <Col
                            flex="1 100%"
                            key={index}
                            style={{ textAlign: "center" }}
                            xs={{ span: 8 }}
                            lg={{ span: 8 }}
                          >
                            <Progress
                              type="circle"
                              format={() => `${skill.percentage}%`}
                              percent={skill.percentage}
                              strokeColor="var(--front-primary-color)"
                            />
                            <span className="skill-name">{skill.name} </span>
                          </Col>
                        );
                      })}
                  </Row>
                </section>
              </Col>
            </Row>
            <footer style={{ fontFamily: "var(--front-secondary-font)" }}>
              <Text
                fl="unset"
                mt="40px"
                mb="40px"
                color="#444343"
                fs="15px"
                fw="600"
                lh="1.765em"
              >
                © 2021{" "}
                <a
                  href="https://sunarctechnologies.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  SunArc Technologies
                </a>
                , All Rights Reserved
              </Text>
            </footer>
          </RightContainer>
        </ContainerWrapper>
      </CustomFront>
    </>
  );
};

export default CandidateProfile;
