import {
  Form,
  Input,
  Button,
  Checkbox,
  Row,
  Col,
  Slider,
  Select,
  Skeleton,
} from "antd";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import { useMutation, gql, useQuery } from "@apollo/client";

import { message } from "antd";

const { Option } = Select;

const { TextArea } = Input;

import { Text } from "../../screens/styles";

const GET_EMPLOYEES_LIST = gql`
  query Employees {
    getEmployees {
      _id
      name
      skill_intro
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

      <Form.Item>
        <Button htmlType="submit" type="primary">
          Submit
        </Button>
      </Form.Item>
    </>
  );
}
export default CompanyForm;
