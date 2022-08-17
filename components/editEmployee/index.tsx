import DashboardTitle from "../dashboardTitle";
import Loader from "../loader";

import { useMutation, gql, useQuery } from "@apollo/client";
import { Form, Button, Row, Col } from "antd";
import EmployeeForm from "../../forms/employee";
import { message } from "antd";

import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";
import { Upload } from "antd";
import React, { useState } from "react";

const EDIT_EMPLOYEE = gql`
  mutation EditEmployee(
    $_id: ID!
    $name: String!
    $contact: String
    $email: String!
    $skill_intro: String
    $intro: IntroInput
    $department: String
    $educations: [EducationInput]
    $projects: [ProjectInput]
    $skills: [SkillInput]
  ) {
    updateEmployee(
      _id: $_id
      employeeInput: {
        department: $department
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
      department
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
      department
      skill_intro
      userImage
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

const beforeUpload = (file) => {
  const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";

  if (!isJpgOrPng) {
    message.error("You can only upload JPG/PNG file!");
  }

  const isLt2M = file.size / 1024 / 1024 < 2;

  if (!isLt2M) {
    message.error("Image must smaller than 2MB!");
  }

  return isJpgOrPng && isLt2M;
};

function EmployeeEditComponent({ employeeId }) {
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState();
  const [imageData, setImageData] = useState("");
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
        imageData: imageData,
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
  const handleChange = async (info) => {
    if (info.file.status === "uploading") {
      setLoading(true);
      return;
    }

    if (info.file.status === "done") {
      // Get this url from response in real world.
      const file = info.file.originFileObj;
      const imageUpload = new FormData();

      imageUpload.append("file", file, info.file.name);
      imageUpload.append("upload_preset", "vita-uploads");
      // setImageUrl(file);
      console.log(info);
      const data = await fetch(
        "https://api.cloudinary.com/v1_1/vita-resume/image/upload",
        {
          method: "POST",
          body: imageUpload,
        }
      ).then((response) => {
        return response.json();
      });
    }
  };

  const uploadButton = (
    <div>
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div
        style={{
          marginTop: 8,
        }}
      >
        Upload
      </div>
    </div>
  );

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
          {userData?.getEmployee?.userImage ? "test" : "fail"}
          <EmployeeForm />

          <Upload
            name="avatar"
            listType="picture-card"
            className="avatar-uploader"
            showUploadList={false}
            beforeUpload={beforeUpload}
            onChange={handleChange}
          >
            {imageUrl ? (
              <img
                src={imageUrl}
                alt="avatar"
                style={{
                  width: "100%",
                }}
              />
            ) : (
              uploadButton
            )}
          </Upload>
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
