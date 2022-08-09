import { useMutation, gql } from "@apollo/client";
import { Form, Button, Row, Col } from "antd";
import { useRouter } from "next/router";

import Loader from "../loader";
import { message } from "antd";

import DashboardTitle from "../dashboardTitle";
import EmployeeForm from "../../forms/employee";

const ADD_EMPLOYEE = gql`
  mutation createEmployee(
    $name: String!
    $skill_intro: String
    $email: String!
  ) {
    createEmployee(
      employeeInput: { name: $name, skill_intro: $skill_intro, email: $email }
    ) {
      name
      skill_intro
      email
      _id
    }
  }
`;
const GET_EMPLOYEES = gql`
  query Employees {
    getEmployees {
      _id
      name
      skill_intro
    }
  }
`;

const AddEmployee = () => {
  const [createEmployee, { loading, data }] = useMutation(ADD_EMPLOYEE, {
    refetchQueries: [{ query: GET_EMPLOYEES }, "Employees"],
  });
  const [form] = Form.useForm();
  const router = useRouter();

  if (loading) {
    return <Loader />;
  }

  const onFormSubmit = (values: any) => {
    const { name, email, skill_intro } = values;
    createEmployee({
      variables: { name, skill_intro, email },
      onCompleted(data) {
        message.success("Successfully Updated");
        router.push(`/edit/employee/${data.createEmployee._id}`);
      },
      onError(error) {
        message.error(
          error.message ?? "Something went wrong, please try again!"
        );
      },
    });
  };

  return (
    <div>
      <DashboardTitle buttonRequired={false} title={"Add Employee"} />
      {data ? (
        <Loader />
      ) : (
        <Form
          // defaultValue={}

          form={form}
          onFinish={onFormSubmit}
          labelCol={{ span: 4 }}
          wrapperCol={{ span: 16 }}
        >
          <EmployeeForm />
          <Row>
            <Col span={24}>
              <Form.Item>
                <Button htmlType="submit" type="primary">
                  Submit
                </Button>
              </Form.Item>
            </Col>
          </Row>
        </Form>
      )}
    </div>
  );
};

export default AddEmployee;
