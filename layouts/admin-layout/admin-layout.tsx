import React, { useState } from "react";
import "antd/dist/antd.css";
import { Layout, Menu, Image } from "antd";
import type { MenuProps } from "antd";
import Link from "next/link";
import { ContentArea } from "./admin-layout.styled";

import { useRouter } from "next/router";

import AdminHeader from "../../components/admin-header";

import Logo from "../../asset/logo.png";

import {
  UserOutlined,
  SettingOutlined,
  FileOutlined,
  TeamOutlined,
  HomeOutlined,
} from "@ant-design/icons";

const { Content, Sider } = Layout;

type MenuItem = Required<MenuProps>["items"][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[]
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem(
    <Link href="/dashboard">
      <a>Home</a>
    </Link>,
    "/dashboard",
    <HomeOutlined />
  ),
  getItem(
    <Link href="/dashboard/employees">
      <a>Users</a>
    </Link>,
    "/dashboard/employees",
    <UserOutlined />
  ),
  getItem(
    <Link href="/dashboard/companies">
      <a>Companies</a>
    </Link>,
    "/dashboard/companies",
    <TeamOutlined />
  ),
  getItem("User", "sub1", <UserOutlined />, [
    getItem("Tom", "3"),
    getItem("Bill", "4"),
    getItem("Alex", "5"),
  ]),
  getItem("Settings", "sub2", <SettingOutlined />, [
    getItem("Team 1", "6"),
    getItem("Team 2", "8"),
  ]),
  getItem("Files", "9", <FileOutlined />),
];
function AdminLayout({ children, route }: { children: any; route?: any }) {
  const router = useRouter();

  const [collapsed, setCollapsed] = useState(true);

  const onCollapse = (collapsed) => {
    setCollapsed(collapsed);
  };

  return (
    <>
      <Layout>
        <Layout style={{ minHeight: "100vh", flexDirection: "row" }}>
          <Sider
            theme="light"
            collapsible
            collapsed={collapsed}
            onCollapse={onCollapse}
          >
            <div
              className=""
              style={{
                margin: "0 auto",
                textAlign: "center",
                display: "block",
                padding: "14px 0px",
              }}
            >
              <Image
                preview={false}
                width={50}
                alt="logo"
                // src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"
                src={Logo.src}
              />
            </div>

            <Menu
              defaultSelectedKeys={[router.route]}
              mode="inline"
              items={items}
            />
          </Sider>
          <Content>
            <AdminHeader />
            <div
              style={{
                margin: "24px 16px 0",
                background: "white",
                overflow: "initial",
              }}
            >
              <ContentArea> {children}</ContentArea>
            </div>
          </Content>
        </Layout>
      </Layout>
    </>
  );
}

AdminLayout.defaultProps = {};

export default AdminLayout;
