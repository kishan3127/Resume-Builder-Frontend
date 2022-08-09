import { useMutation, gql, useQuery } from "@apollo/client";
import { Form } from "antd";
import CompanyForm from "forms/company";
import { useRouter } from "next/router";

import DashboardTitle from "../dashboardTitle";
import Loader from "../loader";

const ADD_EMPLOYEE = gql`
  mutation CreateCompany(
    $name: String!
    $is_active: Boolean!
    $employeesId: [String]
  ) {
    createCompany(
      companyInput: {
        name: $name
        is_active: $is_active
        employeesId: $employeesId
      }
    ) {
      _id
      name
      is_active
    }
  }
`;

const GET_COMPANIES = gql`
  query Companies {
    getCompanies {
      _id
      name
      is_active
    }
  }
`;
const AddCompany = () => {
  const [addCompany, { loading, data }] = useMutation(ADD_EMPLOYEE, {
    refetchQueries: [{ query: GET_COMPANIES }, "Companies"],
  });

  const [form] = Form.useForm();

  const router = useRouter();

  if (data) {
    console.log(data, "datadatadata");
    router.push(`/edit/company/${data.createCompany._id}`);
  }

  if (loading) {
    return <Loader />;
  }

  const onFormSubmit = (values: any) => {
    addCompany({
      variables: {
        ...values,
      },
    });
  };

  return (
    <>
      <DashboardTitle buttonRequired={false} title={"Add Company"} />
      {data ? (
        <Loader />
      ) : (
        <Form
          form={form}
          onFinish={onFormSubmit}
          labelCol={{ span: 4 }}
          wrapperCol={{ span: 14 }}
        >
          <CompanyForm />
        </Form>
      )}
    </>
  );
};

export default AddCompany;
