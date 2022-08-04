import DashboardTitle from "../dashboardTitle";
import Loader from "../loader";

import { useMutation, gql, useQuery } from "@apollo/client";
import { Form, Input, Button, Select, Skeleton, Checkbox } from "antd";
import { useRouter } from "next/router";

const { Option } = Select;

const ADD_EMPLOYEE = gql`
  mutation EditEmployee(
    $_id: ID!
    $name: String!
    $email: Boolean!
    $skill_intro: [String]
  ) {
    updateEmployee(
      _id: $_id
      employeeInput: { name: $name, email: $email, skill_intro: $skill_intro }
    ) {
      name
      skill_intro
    }
  }
`;

const GET_EMPLOYEE = gql`
  query Employees($_id: ID!) {
    getEmployee(_id: $_id) {
      _id
      name
      email
      skill_intro
      password
    }
  }
`;

function EmployeeEditComponent({ employeeId }) {
  const [updateEmployee, { loading: loadingUpdatedData, data: updatedData }] =
    useMutation(ADD_EMPLOYEE, {
      refetchQueries: [{ query: GET_EMPLOYEE }, "EMPLOYEE"],
    });

  const { loading: userLoading, data: userData } = useQuery(GET_EMPLOYEE, {
    variables: { _id: employeeId },
  });

  const onFormSubmit = (values: any) => {
    const { name, email, skill_intro } = values;
    updateEmployee({
      variables: {
        _id: employeeId,
        name,
        email,
        skill_intro,
        password: userData.password,
      },
    });
  };

  console.log(userData?.getEmployee, "datadatadata");
  console.log(updatedData?.getEmployee, "updatedData");

  const [form] = Form.useForm();

  if (userLoading) {
    return <Loader />;
  }
  if (loadingUpdatedData) {
    return <Loader />;
  }

  const handleChange = (value: string | string[]) => {
    console.log(`Selected: ${value}`);
  };

  return (
    <>
      <DashboardTitle buttonRequired={false} title={"Edit Employee"} />
      {!userData?.getEmployee ? (
        <Loader />
      ) : (
        <Form
          // defaultValue={}
          initialValues={{
            ...userData?.getEmployee,
          }}
          form={form}
          onFinish={onFormSubmit}
          labelCol={{ span: 4 }}
          wrapperCol={{ span: 14 }}
        >
          <Form.Item
            name="name"
            rules={[{ required: true, message: "Please input Company Name!" }]}
          >
            <Input placeholder="Company Name" />
          </Form.Item>

          <Form.Item
            name="email"
            rules={[{ required: true, message: "Please input correct Email" }]}
          >
            <Input placeholder="Email" />
          </Form.Item>

          <Form.Item
            name="skill_intro"
            rules={[{ required: true, message: "Please input Skill Intro" }]}
          >
            <Input placeholder="Skill Intro" />
          </Form.Item>

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

export default EmployeeEditComponent;
