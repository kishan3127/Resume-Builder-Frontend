import Link from "next/link";
import { Image } from "antd";

import { ArrowRightOutlined } from "@ant-design/icons";

import { Text } from "../../screens/styles";

import styled from "styled-components";

const CardLayout = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: end;
  cursor: pointer;
  position: relative;
`;
const CardContainer = styled.div`
  // display: flex;
  padding: 10px;
  border: 1px solid #3b354b;
  box-shadow: 4px 5px 0px #ee7968;
  flex: 0 94%;

  .ant-image {
    margin: 0 auto;
    width: 100%;
    display: block;
    maxwidth: 100%;
    overflow: hidden;
  }
`;
const ImageEmployee = styled(Image)`
  border-radius: 55px 5px 55px 5px;
  margin: 0 auto 20px;
  display: block;

  &:nth-of-type(5) {
    border-radius: 5px 55px 5px 55px;
  }
`;

const RotatedTitle = styled(Text)`
  position: absolute;
  left: 15px;
  bottom: 0;
  transform: rotate(-90deg) translateZ(0);
  transform-origin: 0 100%;
  backface-visibility: hidden;
`;

const EmployeeCard = (props) => {
  const { employee, company } = props;
  return (
    <>
      <Link href={`/${company._id}/${employee._id}`}>
        <CardLayout>
          <RotatedTitle
            fs="20px"
            ta="center"
            lh="1.5"
            fw="600"
            color="#251b4d"
            fl="unset"
          >
            {employee.name}
          </RotatedTitle>
          <CardContainer>
            <ImageEmployee
              src="http://picsum.photos/200"
              alt={`${employee.name}'s image`}
              preview={false}
            />
            <Text
              cursor="pointer"
              fs="17px"
              lh="1.5"
              fw="400"
              color="#171609"
              fl="unset"
            >
              - ReactJs Developer
            </Text>
            <Text
              cursor="pointer"
              fs="17px"
              lh="1.5"
              fw="400"
              color="#171609"
              fl="unset"
            >
              - Can start work within a week
            </Text>
            <Text
              cursor="pointer"
              fs="17px"
              lh="1.5"
              fw="400"
              color="#171609"
              fl="unset"
            >
              - {employee.skill_intro}
            </Text>
            <Text
              cursor="pointer"
              fs="17px"
              mt="30px"
              lh="1.5"
              fw="400"
              color="#171609"
              fl="unset"
            >
              Read More <ArrowRightOutlined />
            </Text>
          </CardContainer>
        </CardLayout>
      </Link>
    </>
  );
};

export default EmployeeCard;
