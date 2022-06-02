import React, { useState } from "react";
import "antd/dist/antd.css";
import { Layout, Menu, Image, Button } from "antd";
import type { MenuProps } from "antd";
import Link from "next/link";

import { useCookies } from "react-cookie";
import { useRouter } from "next/router";
import {} from "antd";

import {
  UserOutlined,
  SettingOutlined,
  FileOutlined,
  TeamOutlined,
} from "@ant-design/icons";

const { Content, Sider, Header } = Layout;

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
    <Link href="/dashboard/employees">
      <a>Users</a>
    </Link>,
    "/",
    <UserOutlined />
  ),
  getItem(
    <Link href="/dashboard/employees">
      <a>Companies</a>
    </Link>,
    "/dashboard/companies",
    <TeamOutlined />,
    [
      getItem(
        <Link href="/dashboard/companies/new">
          <a>Add</a>
        </Link>,
        "/dashboard/companies/new"
      ),
      getItem(
        <Link href="/dashboard/companies">
          <a>Listing</a>
        </Link>,
        "/dashboard/companies"
      ),
    ]
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
  const IS_LOGGED = "is_logged";
  const router = useRouter();

  const [collapsed, setCollapsed] = useState(true);
  const [, , removeCookie] = useCookies([
    "token",
    "userId",
    "email",
    IS_LOGGED,
  ]);

  const onCollapse = (collapsed) => {
    setCollapsed(collapsed);
  };

  const handleLogoutClick = () => {
    removeCookie("token");
    removeCookie("userId");
    removeCookie("email");
    removeCookie(IS_LOGGED);

    router.push("/");
  };

  return (
    <>
      <Layout>
        <Layout style={{ minHeight: "100vh" }}>
          <Sider
            theme="light"
            collapsible
            collapsed={collapsed}
            onCollapse={onCollapse}
          >
            <Header
              style={{
                background: "white",
              }}
            >
              {" "}
              <Image
                preview={false}
                width={50}
                alt="logo"
                src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"
              />
            </Header>
            <Menu
              defaultSelectedKeys={[router.route]}
              mode="inline"
              items={items}
            />
          </Sider>
          <Content>
            <Header
              style={{
                background: "white",
                padding: "0 18px",
              }}
            ></Header>
            <div
              style={{
                margin: "24px 16px 0",
                background: "white",
                overflow: "initial",
              }}
            >
              <Button onClick={() => handleLogoutClick()}>Logout</Button>
              {children}
            </div>
          </Content>
        </Layout>
      </Layout>
    </>
  );
}

AdminLayout.defaultProps = {};

export default AdminLayout;
