import React, { useState } from "react";
import "antd/dist/antd.css";
import { Layout, Menu, Breadcrumb, Button } from "antd";
import { useCookies } from "react-cookie";
import { useRouter } from "next/router";

import {
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined,
} from "@ant-design/icons";

const { Header, Content, Sider } = Layout;
const items1 = ["1", "2", "3"].map((key) => ({
  key,
  label: `nav ${key}`,
}));

const items2 = [UserOutlined, LaptopOutlined, NotificationOutlined].map(
  (icon, index) => {
    const key = String(index + 1);
    return {
      key: `sub${key}`,
      icon: React.createElement(icon),
      label: `subnav ${key}`,
      children: new Array(4).fill(null).map((_, j) => {
        const subKey = index * 4 + j + 1;
        return {
          key: subKey,
          label: `option${subKey}`,
        };
      }),
    };
  }
);

function AdminLayout({ children }: { children: any }) {
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
        <Header className="header">
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={["2"]}
            items={items1}
          />
        </Header>
        <Layout>
          <Sider
            theme="dark"
            collapsible
            collapsed={collapsed}
            onCollapse={onCollapse}
            width={200}
            className="site-layout-background"
          >
            <Menu
              mode="inline"
              theme="dark"
              style={{
                height: "100%",
                borderRight: 0,
              }}
              items={items2}
            />
          </Sider>
          <Layout
            style={{
              padding: "0 24px 24px",
            }}
          >
            <Breadcrumb
              style={{
                margin: "16px 0",
              }}
            >
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>List</Breadcrumb.Item>
              <Breadcrumb.Item>App</Breadcrumb.Item>
            </Breadcrumb>
            <Content
              className="site-layout-background"
              style={{
                padding: 24,
                margin: 0,
                minHeight: 280,
              }}
            >
              {children}

              <Button onClick={() => handleLogoutClick()}>Logout</Button>
            </Content>
          </Layout>
        </Layout>
      </Layout>
    </>
  );
}

AdminLayout.defaultProps = {};

export default AdminLayout;
