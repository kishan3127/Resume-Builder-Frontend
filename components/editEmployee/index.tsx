import DashboardTitle from "../dashboardTitle";
import Loader from "../loader";

import { useMutation, gql, useQuery } from "@apollo/client";
import { Form, Button, Row, Col } from "antd";
import EmployeeForm from "../../forms/employee";
import { message } from "antd";

type ProjectInput = {
  role: String;
  description: String;
};
const EDIT_EMPLOYEE = gql`
  mutation EditEmployee(
    $_id: ID!
    $name: String!
    $contact: String
    $email: String!
    $skill_intro: String
    $intro: IntroInput
    $educations: [EducationInput]
    $projects: [ProjectInput]
    $skills: [SkillInput]
  ) {
    updateEmployee(
      _id: $_id
      employeeInput: {
        contact: $contact
        name: $name
        email: $email
        skill_intro: $skill_intro
        skills: $skills
        projects: $projects
        educations: $educations
        intro: $intro
      }
    ) {
      name
      _id
      email
      contact
      skill_intro
      intro {
        title
        description
      }
      educations {
        course
        description
      }
      projects {
        role
        description
      }
      skills {
        name
        percentage
        show
      }
    }
  }
`;

const GET_EMPLOYEE = gql`
  query Employees($_id: ID!) {
    getEmployee(_id: $_id) {
      name
      _id
      email
      contact
      skill_intro
      intro {
        title
        description
      }
      educations {
        course
        description
      }
      projects {
        role
        description
      }
      skills {
        name
        percentage
        show
      }
    }
  }
`;

function EmployeeEditComponent({ employeeId }) {
  const [updateEmployee, { loading: loadingUpdatedData, data: updatedData }] =
    useMutation(EDIT_EMPLOYEE, {
      refetchQueries: [
        { query: GET_EMPLOYEE, variables: { _id: employeeId } },
        "EMPLOYEE",
      ],
    });

  const { loading: userLoading, data: userData } = useQuery(GET_EMPLOYEE, {
    variables: { _id: employeeId },
  });

  const onFormSubmit = (values: any) => {
    console.log(values);
    updateEmployee({
      variables: {
        _id: employeeId,
        ...values,
      },
      onCompleted(data) {
        message.success("Successfully Updated");
      },
      onError(error) {
        message.error(
          error.message ?? "Something went wrong, please try again!"
        );
      },
    });
  };

  const [form] = Form.useForm();

  if (userLoading) {
    return <Loader />;
  }
  if (loadingUpdatedData) {
    return <Loader />;
  }

  if (updatedData) {
    message.success("Updating");
  }
  return (
    <>
      <DashboardTitle
        buttonRequired={true}
        buttonTitle="Preview"
        buttonLink={`/employee/${userData?.getEmployee?._id}`}
        title={"Edit Employee"}
      />
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
          wrapperCol={{ span: 16 }}
        >
          <EmployeeForm />
          <Row>
            <Col span={24}>
              <Form.Item>
                <Button htmlType="submit" type="primary">
                  Update
                </Button>
              </Form.Item>
            </Col>
          </Row>
        </Form>
      )}
    </>
  );
}

export default EmployeeEditComponent;
