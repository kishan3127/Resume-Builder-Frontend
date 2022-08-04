import DashboardTitle from "../dashboardTitle";
import Loader from "../loader";

import { useMutation, gql, useQuery } from "@apollo/client";
import { Form, Input, Button, Select, Skeleton, Checkbox } from "antd";
import { useRouter } from "next/router";

const { Option } = Select;

const ADD_EMPLOYEE = gql`
  mutation CreateCompany(
    $name: String!
    $is_active: Boolean!
    $employeesId: [String]
  ) {
    createCompany(
      companyInput: {
        name: $name
        is_active: $is_active
        employeesId: $employeesId
      }
    ) {
      name
      is_active
    }
  }
`;
const GET_EMPLOYEES_LIST = gql`
  query Employees {
    getEmployees {
      _id
      name
      skill_intro
    }
  }
`;
const GET_COMPANIES = gql`
  query Companies {
    getCompanies {
      _id
      name
      is_active
    }
  }
`;
function CompanyEditComponent() { 

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

      const [addCompany, { loading, data }] = useMutation(ADD_EMPLOYEE, {
    refetchQueries: [{ query: GET_COMPANIES }, "Companies"],
  });

  const employeesList = useQuery(GET_EMPLOYEES_LIST);
  const [form] = Form.useForm();

  const router = useRouter();

  if (data) {
    router.push("/dashboard/companies/");
  }

  if (loading) {
    return <Loader />;
    }
    
    
  const handleChange = (value: string | string[]) => {
    console.log(`Selected: ${value}`);
  };


return <>
      <DashboardTitle buttonRequired={false} title={"Edit Employee"} />
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
}

export default CompanyEditComponent;