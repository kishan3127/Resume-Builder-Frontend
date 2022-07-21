import { Avatar, Layout, Dropdown } from "antd";
import React, { useState, useEffect } from "react";
import { useCookies } from "react-cookie";
import { useRouter } from "next/router";

const { Header } = Layout;

const AdminHeader: React.FC = () => {
  const IS_LOGGED = "is_logged";

  const router = useRouter();

  const [user, setUser] = useState(null);

  const [cookies, , removeCookie] = useCookies([
    "token",
    "userId",
    "email",
    "name",
    IS_LOGGED,
  ]);

  useEffect(() => {
    setUser(cookies?.name?.split(" ")[0]);
  }, []);
  const handleLogoutClick = () => {
    removeCookie("token");
    removeCookie("userId");
    removeCookie("email");
    removeCookie("name");
    removeCookie(IS_LOGGED);
    router.push("/");
  };

  return (
    <>
      <Header
        style={{
          background: "white",
          padding: "0 18px",
          display: "flex",
          justifyContent: "end",
          alignItems: "center",
        }}
      >
        <Dropdown
          overlay={
            <a
              style={{ background: "white", padding: "10px" }}
              rel="noopener noreferrer"
              onClick={() => handleLogoutClick()}
            >
              Logout
            </a>
          }
        >
          <Avatar
            style={{
              backgroundColor: "#7265e6",
              verticalAlign: "middle",
            }}
            size="large"
          >
            {user}
          </Avatar>
        </Dropdown>
      </Header>
    </>
  );
};

export default AdminHeader;
