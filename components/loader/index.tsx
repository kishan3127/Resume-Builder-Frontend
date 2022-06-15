import { Skeleton, Row, Col } from "antd";
import styled from "styled-components";

const SkeletonLoader = styled(Skeleton)`
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

const Loader = () => {
  return <SkeletonLoader active />;
};

export default Loader;
