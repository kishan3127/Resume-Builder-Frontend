import { useMutation, gql } from "@apollo/client";
import { Form, Input, Button } from "antd";
import { useRouter } from "next/router";

import DashboardTitle from "../dashboardTitle";
import Loader from "../loader";

const ADD_EMPLOYEE = gql`
  mutation createEmployee(
    $name: String!
    $skill_intro: String
    $email: String!
  ) {
    createEmployee(
      employeeInput: {
        name: $name
        skill_intro: $skill_intro
        email: $email
        password: "sun123ARC"
      }
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

  if (data) {
    router.push("/dashboard/employees/");
  }

  if (loading) {
    return <Loader />;
  }

  const onFormSubmit = (values: any) => {
    const { name, skill_intro, email } = values;
    createEmployee({
      variables: { name, skill_intro, email },
    });
  };

  return (
    <div>
      <DashboardTitle buttonRequired={false} title={"Add Employee"} />
      {data ? (
        <Loader />
      ) : (
        <Form
          form={form}
          onFinish={onFormSubmit}
          labelCol={{ span: 4 }}
          wrapperCol={{ span: 14 }}
        >
          <Form.Item
            name="name"
            rules={[{ required: true, message: "Please input Employee Name!" }]}
          >
            <Input placeholder="Employee Name" />
          </Form.Item>

          <Form.Item
            name="email"
            rules={[
              {
                required: true,
                type: "email",
                message: "Please input the correct Email!",
              },
            ]}
          >
            <Input placeholder="Employee Email" />
          </Form.Item>

          <Form.Item
            name="skill_intro"
            rules={[{ required: false, message: "Please input Skill Intro!" }]}
          >
            <Input placeholder="Skill Intro" />
          </Form.Item>
          <Form.Item>
            <Button htmlType="submit" type="primary">
              Submit
            </Button>
          </Form.Item>
        </Form>
      )}
    </div>
  );
};

export default AddEmployee;
