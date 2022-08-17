import { Form, Input, Checkbox, Select, Skeleton } from "antd";
import { gql, useQuery } from "@apollo/client";

const { Option } = Select;

const GET_EMPLOYEES_LIST = gql`
  query Employees {
    getEmployees {
      _id
      name
    }
  }
`;

function CompanyForm() {
  const employeesList = useQuery(GET_EMPLOYEES_LIST);

  return (
    <>
      <Form.Item
        name="name"
        rules={[{ required: true, message: "Please input Company Name!" }]}
      >
        <Input placeholder="Company Name" />
      </Form.Item>
      <Form.Item
        name="email"
        rules={[{ required: true, message: "Please input Company Email!" }]}
      >
        <Input placeholder="Company Email" />
      </Form.Item>
      <Form.Item name="employeesId">
        {!employeesList?.loading ? (
          <Select
            showSearch
            mode="tags"
            placeholder="Please select the employees"
            optionFilterProp="children"
            filterOption={(input, option) =>
              (option!.children as unknown as string)
                .toLowerCase()
                .includes(input.toLowerCase())
            }
          >
            {employeesList?.data?.getEmployees ? (
              employeesList?.data?.getEmployees.map((employee) => {
                return (
                  <Option key={employee._id} value={employee._id}>
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

      <Form.Item valuePropName="checked" name="is_active">
        <Checkbox>Active?</Checkbox>
      </Form.Item>
    </>
  );
}
export default CompanyForm;
