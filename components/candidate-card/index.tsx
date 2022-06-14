import Link from "next/link";
import { Skeleton, Card, Avatar, Image, Tag } from "antd";

const { Meta } = Card;
import { Text } from "../../screens/styles";

import styled from "styled-components";

const CardLayout = styled.div`
  display: flex;
`;
const CardContainer = styled.div`
  // display: flex;
  flex: 1 200px;
  border-radius: 25px;
  background: linear-gradient(49deg, #cbc3ff24, #8675eb33);
  flex: 0 100%;
  box-shadow: -5px 16px 6px -1px #dbdbdb57;
  padding: 30px 10px;
  border: 1px solid #9d9d9d14;

  .ant-image {
    margin: 0 auto;
    width: 100%;
    display: block;
    maxwidth: 100%;
    overflow: hidden;
  }
`;
const ImageCandidate = styled(Image)`
  border-radius: 50%;
  height: 100px;
  width: 100px;
  margin: 0 auto;
  display: block;
  padding: 10px 10px;
`;

const CandidateCard = (props) => {
  const { employee, company } = props;
  return (
    <>
      {/* <Card>
        <Skeleton avatar active loading={false}>
          <Link href={`/${company.id}/${employee.id}`}>
            <Meta
              avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
              title={employee.name}
              description={employee.skill_intro}
            />
          </Link>
        </Skeleton>
      </Card> */}
      <div>
        <CardLayout>
          <CardContainer>
            <ImageCandidate
              style={{}}
              src="https://picsum.photos/200"
              alt={`${employee.name}'s image`}
              preview={false}
            />
            <Text
              fs="16px"
              ta="center"
              lh="1.5"
              fw="600"
              color="#251b4d"
              fl="unset"
            >
              {employee.name}
            </Text>
            <Text
              fs="11px"
              ta="center"
              lh="1.5"
              fw="400"
              color="#827da1"
              fl="unset"
            >
              {employee.skill_intro}
            </Text>
            <Tag color="#edeefd">Frontend Developer</Tag>
          </CardContainer>
        </CardLayout>
      </div>
    </>
  );
};

export default CandidateCard;
