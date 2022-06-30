import { useQuery, gql } from "@apollo/client";
import Link from "next/link";

import { Table, Dropdown, Menu, Space } from "antd";
// import type { MenuProps } from "antd";

import {
  EyeOutlined,
  MoreOutlined,
  DeleteOutlined,
  EditOutlined,
} from "@ant-design/icons";

import DashboardTitle from "../../components/dashboardTitle";
import ErrorScreen from "../../components/ErrorScreen";
import Loader from "../../components/loader";
import { Text } from "../../screens/styles";

const QUERY = gql`
  query Employees {
    employees {
      id
      name
      skill_intro
    }
  }
`;

// const onClick: MenuProps["onClick"] = ({ key }) => {
//   message.info(`Click on item ${key}`);
// };

const EmployeesList = () => {
  const { data, loading, error } = useQuery(QUERY);

  if (loading) {
    return <Loader />;
  }

  if (error) {
    console.error(error);
    return <ErrorScreen />;
  }
  const employees = data.employees.slice(0, 100);

  const ActionOptions = ({ id }) => {
    return (
      <Menu
        // onClick={onClick}
        items={[
          {
            label: (
              <Link href={`/employee/${encodeURIComponent(id)}`}>
                <a>
                  <EyeOutlined /> <Space>Preview</Space>
                </a>
              </Link>
            ),
            key: "preview",
          },
          {
            label: (
              <Link href={`/employee/${encodeURIComponent(id)}`}>
                <a>
                  <EditOutlined /> <Space>Edit</Space>
                </a>
              </Link>
            ),
            key: "edit",
          },
          {
            label: (
              <Link href={`/employee/${encodeURIComponent(id)}`}>
                <a>
                  <DeleteOutlined /> <Space>Delete</Space>
                </a>
              </Link>
            ),
            key: "delete",
          },
        ]}
      />
    );
  };

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Skill Intro",
      dataIndex: "skill_intro",
      key: "skill_intro",
    },
    {
      title: "Department",
      key: "id",
      dataIndex: "id",
      render: () => (
        <>
          <Text fl="unset" color="#121212">
            Frontend Developer
          </Text>
        </>
      ),
    },
    {
      title: "",
      key: "action",
      dataIndex: "id",
      render: (id) => (
        <Dropdown
          trigger={["click"]}
          placement="bottom"
          overlay={<ActionOptions id={id} />}
        >
          <a onClick={(e) => e.preventDefault()}>
            <Space>
              <MoreOutlined />
            </Space>
          </a>
        </Dropdown>
      ),
    },
  ];

  return (
    <div>
      <DashboardTitle
        buttonRequired={true}
        title={"Employees"}
        buttonLink="/dashboard/employees/new"
        buttonTitle="Add New"
      />
      <Table dataSource={employees} columns={columns} />
    </div>
  );
};

export default EmployeesList;
