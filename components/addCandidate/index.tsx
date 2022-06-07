import { useMutation, gql } from "@apollo/client";
import styles from "../../styles/Home.module.css";
import { Form, Input, Button } from "antd";

import DashboardTitle from "../../components/dashboardTitle";

const ADD_CANDIDATE = gql`
  mutation addEmployee($name: String!, $skill_intro: String!) {
    addEmployee(name: $name, skill_intro: $skill_intro) {
      name
      skill_intro
      id
    }
  }
`;

const AddCandidate = () => {
  const [addCandidate, { loading }] = useMutation(ADD_CANDIDATE);
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

  // if (error) {
  //   console.error(error);
  //   return null;
  // }

  const onFormSubmit = (values: any) => {
    const { name, skill_intro } = values;
    addCandidate({
      variables: { name, skill_intro },
    });
  };
  return (
    <div>
      <DashboardTitle buttonRequired={false} title={"Add Candidate"} />
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
    </div>
  );
};

export default AddCandidate;
