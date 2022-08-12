import { useMutation, gql } from "@apollo/client";
import { Form, message, Button } from "antd";

import CompanyForm from "forms/company";
import { useRouter } from "next/router";

import DashboardTitle from "../dashboardTitle";
import Loader from "../loader";

const ADD_EMPLOYEE = gql`
  mutation CreateCompany(
    $name: String!
    $is_active: Boolean!
    $email: String!
    $employeesId: [String]
  ) {
    createCompany(
      companyInput: {
        name: $name
        email: $email
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
      email
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

  if (loading) {
    return <Loader />;
  }

  const onFormSubmit = (values: any) => {
    addCompany({
      variables: {
        ...values,
      },
      onCompleted(data) {
        message.success("Successfully Updated");
        router.push(`/edit/company/${data.createCompany._id}`);
      },
      onError(error) {
        message.error(
          error.message ?? "Something went wrong, please try again!"
        );
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
          <Form.Item>
            <Button htmlType="submit" type="primary">
              Update
            </Button>
          </Form.Item>
        </Form>
      )}
    </>
  );
};

export default AddCompany;
