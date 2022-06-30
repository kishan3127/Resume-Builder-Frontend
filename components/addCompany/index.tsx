import { useMutation, gql, useQuery } from "@apollo/client";
import { Form, Input, Button, Select, Skeleton, Checkbox } from "antd";
import { useRouter } from "next/router";

import DashboardTitle from "../dashboardTitle";
import Loader from "../loader";

const { Option } = Select;

const ADD_EMPLOYEE = gql`
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
  const [addCompany, { loading, data }] = useMutation(ADD_EMPLOYEE);
  const employeesList = useQuery(GET_EMPLOYEES_LIST);
  const [form] = Form.useForm();

  const router = useRouter();

  if (data) {
    router.push("/dashboard/companies/");
  }

  if (loading) {
    return <Loader />;
  }

  const onFormSubmit = (values: any) => {
    const { name, is_active, selectedEmoloyees } = values;

    // console.log(name, is_active ?? false, selectedEmoloyees, "Values");
    addCompany({
      variables: {
        name,
        is_active: is_active ?? false,
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
            rules={[{ required: true, message: "Please input Company Name!" }]}
          >
            <Input placeholder="Company Name" />
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

          <Form.Item name="is_active" valuePropName="checked">
            <Checkbox>Active?</Checkbox>
          </Form.Item>

          <Form.Item>
            <Button htmlType="submit" type="primary">
              Submit
            </Button>
          </Form.Item>
        </Form>
      )}
    </>
  );
};

export default AddCompany;
