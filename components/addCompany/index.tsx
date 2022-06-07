import { useMutation, gql, useQuery } from "@apollo/client";
import styles from "../../styles/Home.module.css";
import { Form, Input, Button, Select, Skeleton, Checkbox } from "antd";

import DashboardTitle from "../dashboardTitle";

const { Option } = Select;

const ADD_CANDIDATE = gql`
  mutation addEmployee(
    $name: String!
    $is_active: Boolean!
    $employeesId: [ID]
  ) {
    addCompany(name: $name, is_active: $is_active, employeesId: $employeesId) {
      name
      is_active
    }
  }
`;
const GET_EMPLOYEES_LIST = gql`
  query employee {
    employees {
      name
      id
    }
  }
`;

const AddCompany = () => {
  const [addCompany, { loading }] = useMutation(ADD_CANDIDATE);
  const employeesList = useQuery(GET_EMPLOYEES_LIST);
  const [form] = Form.useForm();

  if (loading) {
    return (
      <div className={styles.grid}>
        <svg
          aria-hidden="true"
          className="aal_svg"
          height="16"
          version="1.1"
          viewBox="0 0 16 16"
          width="16"
        >
          <path
            fillRule="evenodd"
            d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"
          ></path>
        </svg>
        Loading...
      </div>
    );
  }

  const onFormSubmit = (values: any) => {
    const { name, is_active, selectedEmoloyees } = values;
    addCompany({
      variables: {
        name,
        is_active: is_active,
        employeesId: selectedEmoloyees,
      },
    });
  };

  const handleChange = (value: string | string[]) => {
    console.log(`Selected: ${value}`);
  };
  return (
    <>
      <DashboardTitle buttonRequired={false} title={"Add Company"} />
      <Form
        form={form}
        onFinish={onFormSubmit}
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 14 }}
      >
        <Form.Item
          name="name"
          rules={[{ required: true, message: "Please input Candidate Name!" }]}
        >
          <Input placeholder="Candidate Name" />
        </Form.Item>
        <Form.Item name="selectedEmoloyees">
          {!employeesList?.loading ? (
            <Select
              showSearch
              mode="tags"
              placeholder="Please select the employees"
              optionFilterProp="children"
              onChange={handleChange}
              filterOption={(input, option) =>
                (option!.children as unknown as string)
                  .toLowerCase()
                  .includes(input.toLowerCase())
              }
            >
              {employeesList?.data?.employees ? (
                employeesList?.data?.employees.map((employee) => {
                  return (
                    <Option key={employee.id} value={employee.id}>
                      {employee.name}
                    </Option>
                  );
                })
              ) : (
                <Option key={"no_input"}>No Employees Found</Option>
              )}
            </Select>
          ) : (
            <Skeleton.Input active={true} />
          )}
        </Form.Item>

        <Form.Item name="is_active">
          <Checkbox>Active?</Checkbox>
        </Form.Item>

        <Form.Item>
          <Button htmlType="submit" type="primary">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default AddCompany;
