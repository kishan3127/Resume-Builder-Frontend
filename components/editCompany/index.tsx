import DashboardTitle from "../dashboardTitle";
import Loader from "../loader";

import { useMutation, gql, useQuery } from "@apollo/client";
import { Form } from "antd";

import CompanyForm from "../../forms/company";

import { message, Button } from "antd";

const GET_COMPANIES = gql`
  query GetCompanies {
    getCompanies {
      name
      is_active
      _id
      employeesId
    }
  }
`;
const ADD_EMPLOYEE = gql`
  mutation UpdateCompany(
    $_id: ID!
    $name: String!
    $email: String!
    $is_active: Boolean!
    $employeesId: [String]
  ) {
    updateCompany(
      _id: $_id
      companyInput: {
        name: $name
        email: $email
        is_active: $is_active
        employeesId: $employeesId
      }
    ) {
      name
      email
      is_active
      employeesId
      createdBy
      createdAt
    }
  }
`;

const GET_COMPANY = gql`
  query Companies($_id: ID!) {
    getCompany(_id: $_id) {
      _id
      name
      email
      is_active
      employeesId
      createdBy
      createdAt
    }
  }
`;
function CompanyEditComponent({ companyId }) {
  const { loading: companyLoading, data: companyData } = useQuery(GET_COMPANY, {
    variables: { _id: companyId },
  });

  const [form] = Form.useForm();

  const [updateCompany] = useMutation(ADD_EMPLOYEE, {
    refetchQueries: [
      { query: GET_COMPANY, variables: { _id: companyId } },
      { query: GET_COMPANIES },
    ],
  });

  const onFormSubmit = (values: any) => {
    updateCompany({
      variables: {
        _id: companyId,
        ...values,
      },
      onCompleted() {
        message.success("Successfully Updated");
      },
      onError(error) {
        message.error(
          error.message ?? "Something went wrong, please try again!"
        );
      },
    });
  };

  if (companyLoading) {
    return <Loader />;
  }

  return (
    <>
      <DashboardTitle buttonRequired={false} title={"Edit Company"} />
      {!companyData?.getCompany ? (
        <Loader />
      ) : (
        <Form
          form={form}
          initialValues={{
            ...companyData?.getCompany,
          }}
          onFinish={onFormSubmit}
          labelCol={{ span: 4 }}
          wrapperCol={{ span: 14 }}
        >
          <CompanyForm />
          Created At:{" "}
          {JSON.stringify(
            new Date(parseInt(companyData?.getCompany.createdAt, 10))
          )}
          <hr></hr>
          Created By: {companyData?.getCompany.createdBy}
          <Form.Item>
            <Button htmlType="submit" type="primary">
              Update
            </Button>
          </Form.Item>
        </Form>
      )}
    </>
  );
}

export default CompanyEditComponent;
