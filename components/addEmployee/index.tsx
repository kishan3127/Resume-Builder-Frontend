import { useMutation, gql } from "@apollo/client";
import { Form, Input, Button } from "antd";
import { useRouter } from "next/router";

import DashboardTitle from "../dashboardTitle";
import Loader from "../loader";

const ADD_EMPLOYEE = gql`
  mutation addEmployee($name: String!, $skill_intro: String!) {
    addEmployee(name: $name, skill_intro: $skill_intro) {
      name
      skill_intro
      id
    }
  }
`;

const AddEmployee = () => {
  const [addEmployee, { loading, data }] = useMutation(ADD_EMPLOYEE);
  const [form] = Form.useForm();
  const router = useRouter();

  if (data) {
    router.push("/dashboard/employees/");
  }

  if (loading) {
    return <Loader />;
  }

  const onFormSubmit = (values: any) => {
    const { name, skill_intro } = values;
    addEmployee({
      variables: { name, skill_intro },
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
            name="skill_intro"
            rules={[{ required: true, message: "Please input Skill Intro!" }]}
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
