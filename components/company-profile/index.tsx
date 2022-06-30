import { useQuery, gql } from "@apollo/client";
import { Skeleton, Row, Col } from "antd";

import BackgroundImageLanding from "../../asset/land-bg.jpg";
import EmployeeCard from "../../components/employee-card";
import styled from "styled-components";

import { Text } from "../../screens/styles";

const QUERY = gql`
  query company($id: ID) {
    company(id: $id) {
      name
      id
      employees {
        name
        id
        skill_intro
      }
    }
  }
`;

const CompanyContainer = styled.div`
  width: 1920px;
  margin: 0 auto;
  max-width: 100%;
`;

const RightContainer = styled.div`
  width: 100%;
  padding: 10px;
  width: 900px;
  margin: 0 auto;
`;

const SkeletonLoader = styled(Skeleton)`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 100%;
  position: fixed;
  z-index: 2;
  width: 100%;
  margin: 0 auto;

  .ant-skeleton-content {
    width: 30%;
  }
`;
const CompanyProfileContainer = styled.div`
  background: url(${BackgroundImageLanding.src}) #f5ece7;
  padding: 10px 10px 100px;
`;

const CompanyProfile = ({ companyId }: { companyId: string }) => {
  const { data, loading, error } = useQuery(QUERY, {
    variables: { id: companyId },
  });

  if (loading) {
    return <SkeletonLoader active />;
  }

  if (error) {
    console.error(error);
    return <p>Error Please try again</p>;
  }

  const company = data.company;

  return (
    <CompanyProfileContainer>
      <CompanyContainer>
        <RightContainer>
          <Text
            style={{
              fontFamily: "var(--front-primary-font)",
            }}
            mb="30px"
            fl="unset"
            lh="1.5"
            color="#EE7968"
            fs="79px"
          >
            {company.name}
          </Text>
          <Text
            style={{
              fontFamily: "var(--front-primary-font)",
            }}
            mb="55px"
            fl="unset"
            lh="1.5"
            color="#3F1A18"
            fs="19px"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut ipsum dolor sit amet, consectetur
            adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris.
          </Text>
          <div className="list_of_employees">
            {company.employees.length != 0 ? (
              <Row gutter={[30, 30]}>
                {company.employees.map((employee) => {
                  return (
                    <Col
                      xs={{ span: 24 }}
                      sm={{ span: 12 }}
                      lg={{ span: 8 }}
                      key={employee.id}
                    >
                      <EmployeeCard company={company} employee={employee} />
                    </Col>
                  );
                })}
              </Row>
            ) : (
              "No Employee is assigned to this company"
            )}
          </div>

          <Text
            style={{
              fontFamily: "var(--front-primary-font)",
            }}
            mt="50px"
            mb="10px"
            fl="unset"
            lh="1.5"
            color="#3F1A18"
            fs="19px"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt Lorem ipsum dolor sit amet, consectetur
            adipiscing elit, sed do eiusmod tempor incididunt ut ipsum dolor sit
            amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
            nostrud exercitation ullamco laboris. ut labore et dolore magna
            aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
            laboris.
          </Text>
          <Text
            style={{
              fontFamily: "var(--front-primary-font)",
            }}
            mb="10px"
            fl="unset"
            lh="1.5"
            color="#3F1A18"
            fs="19px"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris.
          </Text>
          <Text
            style={{
              fontFamily: "var(--front-primary-font)",
            }}
            mb="10px"
            fl="unset"
            lh="1.5"
            color="#3F1A18"
            fs="19px"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna Lorem ipsum
            dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut ipsum dolor sit amet, consectetur adipiscing elit, sed
            do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
            enim ad minim veniam, quis nostrud exercitation ullamco laboris.
            aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
            laboris.
          </Text>

          <iframe
            width="100%"
            height="415"
            style={{ margin: "10px 0px" }}
            src="https://www.youtube.com/embed/a5INJ6dy6pc"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <Text
            style={{
              fontFamily: "var(--front-primary-font)",
            }}
            mb="55px"
            fl="unset"
            lh="1.5"
            color="#3F1A18"
            fs="19px"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris.
          </Text>
        </RightContainer>
      </CompanyContainer>
    </CompanyProfileContainer>
  );
};

export default CompanyProfile;
