import React, { useEffect } from "react";
import add from "date-fns/add";
import { useCookies } from "react-cookie";
import { useRouter } from "next/router";

import { Form, Input, Button, Divider } from "antd";
import { Text } from "../../screens/styles";

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 24 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 24 },
  },
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 24,
      offset: 0,
    },
  },
};

const SignUpForm = () => {
  const router = useRouter();
  const IS_LOGGED = "is_logged";

  const [, setCookie] = useCookies(["token", "userId", "email", IS_LOGGED]);

  const postSuccessfullSignup = (apiResponse: any) => {
    const signupResponse = apiResponse?.data?.data ?? {};

    const expiry = add(new Date(), {
      seconds: signupResponse?.tokenData?.expiresIn,
    });

    setCookie("token", signupResponse?.tokenData?.token, {
      expires: expiry,
    });

    setCookie("userId", signupResponse?.user?._id, {
      expires: expiry,
    });

    setCookie("email", signupResponse?.user?.email, {
      expires: expiry,
    });

    setCookie(IS_LOGGED, true, {
      expires: expiry,
    });

    router.push("/");
  };
  const signupSubmit = async () => {
    try {
      const response = [];
      postSuccessfullSignup(response);
    } catch (err) {
      console.log(err);
    }
  };
  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    console.log("Received values of form: ", values);
  };
  const onLoginClick = (e: any) => {
    e.preventDefault();
    e.stopPropagation();

    router.push("/login");
  };

  useEffect(() => {
    router.prefetch("/login");
  }, [router]);

  return (
    <>
      <Form
        {...formItemLayout}
        layout="vertical"
        form={form}
        name="register"
        onFinish={onFinish}
        initialValues={{}}
        scrollToFirstError
      >
        <Form.Item
          name="fullName"
          label="Full Name"
          rules={[
            {
              required: true,
              message: "Please input your Full name",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="email"
          label="E-mail"
          rules={[
            {
              type: "email",
              message: "The input is not valid E-mail!",
            },
            {
              required: true,
              message: "Please input your E-mail!",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="username"
          label="Username"
          rules={[
            {
              required: true,
              message: "Please input your username!",
              whitespace: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="password"
          label="Password"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
          hasFeedback
        >
          <Input.Password />
        </Form.Item>
        <Form.Item
          name="confirm"
          label="Confirm Password"
          dependencies={["password"]}
          hasFeedback
          rules={[
            {
              required: true,
              message: "Please confirm your password!",
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue("password") === value) {
                  return Promise.resolve();
                }
                return Promise.reject(
                  new Error("The two passwords that you entered do not match!")
                );
              },
            }),
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item {...tailFormItemLayout} style={{ textAlign: "center" }}>
          <Button
            onClick={() => signupSubmit()}
            type="primary"
            htmlType="submit"
          >
            Register
          </Button>{" "}
          <Divider orientation="center">Or</Divider>
          <a onClick={(e) => onLoginClick(e)}>
            <Text
              fs="16px"
              mb="20px"
              fl="none"
              lh="1.3"
              ta="center"
              color="#0008ffc7"
              cursor="pointer"
              fw="600"
            >
              Login?
            </Text>
          </a>
        </Form.Item>
      </Form>
    </>
  );
};

export default SignUpForm;
