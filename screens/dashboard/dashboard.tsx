import React from "react";
import { Col, Row } from "antd";
import Link from "next/link";

import AdminLayout from "../../layouts/admin-layout";
import { UserOutlined, BuildOutlined } from "@ant-design/icons";

import styled from "styled-components";

// import Countries from "../../components/Countries";
// import ClientOnly from "../../components/ClientOnly";

const GridItem = styled(Col)`
  .grid-layout-item {
    position: relative;
    background: #60aa25;
    border-radius: 6px;
    color: white;
    max-width: 338px;
    font-size: 20px;
    margin: 0 auto;
    box-shadow: 11px 10px 4px 2px #8f8f8f3d;
    display: flex;
    align-items: center;
    column-gap: 1rem;
    padding: 20px 30px;
  }

  p {
    margin: 0;
  }
`;

const DashboardScreen = (props) => {
  return (
    <>
      <AdminLayout>
        <Row align="middle" justify="center">
          <GridItem span={6}>
            <Link href={"./dashboard/employees"}>
              <div className="grid-layout-item">
                <UserOutlined />
                <p>Candidates</p>
              </div>
            </Link>
          </GridItem>
          <GridItem span={6}>
            <Link href={"./dashboard/companies"}>
              <div className="grid-layout-item">
                <BuildOutlined />
                <p>Clients</p>
              </div>
            </Link>
          </GridItem>
          <GridItem span={6}></GridItem>
          <GridItem span={6}></GridItem>
        </Row>
      </AdminLayout>
    </>
  );
};

export default DashboardScreen;
