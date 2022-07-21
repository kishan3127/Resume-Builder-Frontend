import { useState } from "react";
import Link from "next/link";

import { useQuery, gql, useMutation } from "@apollo/client";
import { EyeOutlined, DeleteOutlined } from "@ant-design/icons";

import { Table, Tag, Modal, Space, Button } from "antd";

import DashboardTitle from "../../components/dashboardTitle";
import ErrorScreen from "../../components/ErrorScreen";
import Loader from "components/loader";

const GET_COMPANIES = gql`
  query Companies {
    getCompanies {
      _id
      name
      is_active
    }
  }
`;
const DELETE_COMPANY = gql`
  mutation DeleteCompany($_id: ID!) {
    deleteCompany(_id: $_id) {
      _id
      name
    }
  }
`;
const CompaniesList = () => {
  const { data, loading, error } = useQuery(GET_COMPANIES);
  const [deleteCompany, { loading: loadingDelete }] = useMutation(
    DELETE_COMPANY,
    {
      refetchQueries: [{ query: GET_COMPANIES }, "Employees"],
    }
  );

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedCompanyId, setCompanyId] = useState(null);

  const showDeleteModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
    deleteCompany({
      variables: {
        _id: selectedCompanyId,
      },
    });
  };

  const handleCancel = () => {
    setCompanyId(null);
    setIsModalVisible(false);
  };

  const deleteCompanyHandle = (id) => {
    setCompanyId(id);
    showDeleteModal();
  };

  if (loading) {
    return <Loader />;
  }

  if (loadingDelete) {
    return <Loader />;
  }

  if (error) {
    return <ErrorScreen />;
  }
  const companies = data.getCompanies;

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Active",
      dataIndex: "is_active",
      key: "is_active",
      render: (is_active) => (
        <>
          {is_active ? (
            <Tag color="#87d068"> Active </Tag>
          ) : (
            <Tag color="red">Not active</Tag>
          )}
        </>
      ),
    },
    {
      title: "Preview",
      key: "_id",
      dataIndex: "_id",
      render: (_id: String) => (
        <>
          <Link href={`/${_id}`}>
            <a>
              <EyeOutlined />
            </a>
          </Link>
          <Button type="text" onClick={() => deleteCompanyHandle(_id)}>
            <DeleteOutlined /> <Space>Delete</Space>
          </Button>
        </>
      ),
    },
  ];

  return (
    <div>
      <DashboardTitle
        buttonRequired={true}
        title={"Companies"}
        buttonLink="/dashboard/companies/new"
        buttonTitle="Add New"
      />
      <Table rowKey="_id" dataSource={companies} columns={columns} />
      <Modal
        title="Delete Company"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        Are you sure you want to delete the company?
      </Modal>
    </div>
  );
};

export default CompaniesList;
