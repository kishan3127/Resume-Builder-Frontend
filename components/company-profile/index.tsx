import { useQuery, gql } from "@apollo/client";
import { Skeleton, Row, Col } from "antd";

import Background from "../../asset/painter.svg";
import CandidateCard from "../../components/candidate-card";
import styled from "styled-components";

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

const CompanyContainer = styled.div``;

const LeftContainer = styled.div`
  background: #6c0487;
  position: fixed;
  top: 0;
  height: 100vh;
  width: 250px;
  background: url(${Background.src}) #ff127f;
  background-position: center center;
  background-size: auto 140%;
`;

const RightContainer = styled.div`
  width: 100%;
  padding: 10px 10px 10px 260px;
`;

const SkeletonLoader = styled(Skeleton)`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 100%;
  position: fixed;
  z-index: 61;
  width: 100%;
  margin: 0 auto;

  .ant-skeleton-content {
    width: 30%;
  }
`;

const CompanyProfile = ({ companyId }: { companyId: string }) => {
  const { data, loading, error } = useQuery(QUERY, {
    variables: { id: companyId },
  });

  if (loading) {
    return <SkeletonLoader />;
  }

  if (error) {
    console.error(error);
    return null;
  }

  const company = data.company;

  return (
    <div className={"companyProfile"}>
      <CompanyContainer>
        <LeftContainer></LeftContainer>
        <RightContainer>
          <h1> {company.name}</h1>
          <div className="list_of_employees">
            {company.employees.length != 0 ? (
              <Row gutter={16}>
                {company.employees.map((employee) => {
                  return (
                    <Col
                      xs={{ span: 24 }}
                      sm={{ span: 12 }}
                      md={{ span: 8 }}
                      lg={{ span: 6 }}
                      key={employee.id}
                    >
                      <CandidateCard company={company} employee={employee} />
                    </Col>
                  );
                })}
              </Row>
            ) : (
              "No Candidate is assigned to this company"
            )}
          </div>
        </RightContainer>
      </CompanyContainer>
    </div>
  );
};

export default CompanyProfile;
