import Link from "next/link";

import { useQuery, gql } from "@apollo/client";
import { EyeOutlined } from "@ant-design/icons";

import { Table, Tag } from "antd";

import DashboardTitle from "../../components/dashboardTitle";
import ErrorScreen from "../../components/ErrorScreen";
import Loader from "components/loader";

const QUERY = gql`
  query Companies {
    companies {
      id
      name
      is_active
    }
  }
`;

const CompaniesList = () => {
  const { data, loading, error } = useQuery(QUERY);

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <ErrorScreen />;
  }
  const companies = data.companies;

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
      key: "id",
      dataIndex: "id",
      render: (id) => (
        <>
          <Link href={`/${id}`}>
            <a>
              <EyeOutlined />
            </a>
          </Link>
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
      <Table dataSource={companies} columns={columns} />
    </div>
  );
};

export default CompaniesList;
