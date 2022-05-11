import Image from "next/image";

import { Collapse, Progress, Row, Col } from "antd";
import { EyeInvisibleOutlined, EyeOutlined } from "@ant-design/icons";
import user from "../../asset/user.jpg";

import styled from "styled-components";

import AdminLayout from "../../layouts/admin-layout";
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

  return (
    <>
      <AdminLayout>
        Name:{name} <br></br>
        Name:{firstName} <br></br>
        <Image src={user} alt="Picture of the author" />
        <br></br>
        email: {email}
        <br></br>
        contact: {contact}
        <br></br>
        Title: {intro?.title}
        <br></br>
        description: {intro?.description}
        <Collapse
          ghost
          onChange={callback}
          expandIcon={({ isActive }) =>
            isActive ? <EyeOutlined /> : <EyeInvisibleOutlined />
          }
        >
          {educations?.map((education: Education, index: number) => {
            return (
              <Panel key={index} header={AccordionHeaderEducation(education)}>
                <p>{education?.description}</p>
              </Panel>
            );
          })}
        </Collapse>
        <hr />
        <Collapse
          ghost
          onChange={callback}
          expandIcon={({ isActive }) =>
            isActive ? <EyeOutlined /> : <EyeInvisibleOutlined />
          }
        >
          {projects?.map((project: Project, index: number) => {
            return (
              <Panel key={index} header={AccordionHeaderExprience(project)}>
                <p>{project?.description}</p>
              </Panel>
            );
          })}
        </Collapse>
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
                    strokeColor="#ab5232"
                  />
                  <br />
                  {skill.name}
                  <br />
                </Col>
              );
            })}
        </Row>
      </AdminLayout>
    </>
  );
};

export default CandidateProfile;
