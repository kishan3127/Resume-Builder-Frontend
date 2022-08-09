import { useState } from "react";
import { useQuery, gql, useMutation } from "@apollo/client";
import Link from "next/link";

import { Table, Dropdown, Menu, Space, Button, Modal } from "antd";
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

const GET_EMPLOYEES = gql`
  query Employees {
    getEmployees {
      _id
      name
      email
    }
  }
`;
const DELETE_EMPLOYEE = gql`
  mutation DeleteEmployee($_id: ID!) {
    deleteEmployee(_id: $_id) {
      _id
      name
      email
    }
  }
`;

// const onClick: MenuProps["onClick"] = ({ key }) => {
//   message.info(`Click on item ${key}`);
// };

const EmployeesList = () => {
  const { data, loading, error } = useQuery(GET_EMPLOYEES);
  const [deleteEmployee, { loading: loadingDelete }] = useMutation(
    DELETE_EMPLOYEE,
    {
      refetchQueries: [{ query: GET_EMPLOYEES }, "Employees"],
    }
  );

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedEmployeeId, setEmployeeId] = useState(null);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
    deleteEmployee({
      variables: {
        _id: selectedEmployeeId,
      },
    });
  };

  const handleCancel = () => {
    setEmployeeId(null);
    setIsModalVisible(false);
  };

  const deleteEmoloyee = (id) => {
    setEmployeeId(id);
    showModal();
  };

  if (loading) {
    return <Loader />;
  }

  if (loadingDelete) {
    return <Loader />;
  }

  if (error) {
    console.error(error);
    return <ErrorScreen />;
  }
  const employees = data.getEmployees.slice(0, 100);

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
              <Link href={`/edit/employee/${encodeURIComponent(id)}`}>
                <a>
                  <EditOutlined /> <Space>Edit</Space>
                </a>
              </Link>
            ),
            key: "edit",
          },
          {
            label: (
              <Button
                style={{ padding: 0 }}
                type="text"
                onClick={() => deleteEmoloyee(id)}
              >
                <DeleteOutlined /> <Space>Delete</Space>
              </Button>
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
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Department",
      key: "_id",
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
      dataIndex: "_id",
      render: (_id: String) => (
        <Dropdown
          trigger={["click"]}
          placement="bottom"
          overlay={<ActionOptions id={_id} />}
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
      <Table rowKey="_id" dataSource={employees} columns={columns} />
      <Modal
        title="Delete emoloyee"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        Are you sure you want to delete the emoloyee?
      </Modal>
    </div>
  );
};

export default EmployeesList;
