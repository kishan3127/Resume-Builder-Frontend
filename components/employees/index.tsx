import { useQuery, gql } from "@apollo/client";
import Link from "next/link";

import { Table } from "antd";

import { EyeOutlined } from "@ant-design/icons";

import DashboardTitle from "../../components/dashboardTitle";
import Loader from "../../components/loader";

const QUERY = gql`
  query Employees {
    employees {
      id
      name
      skill_intro
    }
  }
`;

const EmployeesList = () => {
  const { data, loading, error } = useQuery(QUERY);

  if (loading) {
    return <Loader />;
  }

  if (error) {
    console.error(error);
    return null;
  }
  const employees = data.employees.slice(0, 100);

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Active",
      dataIndex: "skill_intro",
      key: "skill_intro",
    },
    {
      title: "Preview",
      key: "id",
      dataIndex: "id",
      render: (id) => (
        <>
          <Link href={`/candidate/${encodeURIComponent(id)}`}>
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
        title={"Candidates"}
        buttonLink="/dashboard/employees/new"
        buttonTitle="Add New"
      />
      <Table dataSource={employees} columns={columns} />
    </div>
  );
};

export default EmployeesList;
