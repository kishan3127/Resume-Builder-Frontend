import add from "date-fns/add";
import { useRouter } from "next/router";
import { MouseEvent, useEffect } from "react";
import { Form, Input, Button, Checkbox, Divider, message } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { useCookies } from "react-cookie";
import { useMutation, gql } from "@apollo/client";

import { Wrapper } from "./login.styled";
import { Text } from "../../screens/styles";

export default function LoginForm() {
  const router = useRouter();

  const LOGIN_EMPLOYEE = gql`
    mutation loginUser($email: String!, $password: String!) {
      loginUser(loginInput: { email: $email, password: $password }) {
        name
        token
        email
        _id
      }
    }
  `;

  const [, setCookie] = useCookies([
    "token",
    "userId",
    "email",
    "name",
    "is_logged",
  ]);

  const [loginUser, { data }] = useMutation(LOGIN_EMPLOYEE);

  useEffect(() => {
    router.prefetch("/signup");
  }, []);

  const postSuccessfullSignup = async (apiResponse: any) => {
    const { token, name, email, _id } = apiResponse ?? {};

    const expiry = add(new Date(), {
      seconds: 1000 * 60 * 60 * 1,
    });
    const maxAge = 60 * 60; // removed after everyhour

    setCookie("token", token, {
      expires: expiry,
      maxAge: maxAge,
    });

    setCookie("userId", _id, {
      expires: expiry,
      maxAge: maxAge,
    });

    setCookie("email", email, {
      expires: expiry,
      maxAge: maxAge,
    });
    setCookie("name", name, {
      expires: expiry,
      maxAge: maxAge,
    });

    setCookie("is_logged", true, {
      expires: expiry,
      maxAge: maxAge,
    });

    router.push("/");
  };

  const onFinish = async (values: any) => {
    console.log("values", values);
    const email = values.username;
    const password = values.password;
    try {
      loginUser({
        variables: {
          email,
          password,
        },
        onCompleted(data) {
          console.log(data.loginUser);
          postSuccessfullSignup(data.loginUser);
        },
        onError(error) {
          message.error(
            error.message ?? "Something went wrong, please try again!"
          );
        },
      });

      // postSuccessfullSignup(data);

      if (data) message.success("Logged in successfully");
    } catch (err) {
      message.error(
        err?.response?.data?.message ??
          "Something went wrong, please try again!"
      );
    }
  };

  const onSignUpClick = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    e.stopPropagation();

    router.push("/signup");
  };

  const onForgotPasswordClick = () => {
    router.push("/forgot-password");
  };

  return (
    <Wrapper>
      <Form
        name="normal_login"
        className="login-form"
        initialValues={{ remember: true }}
        onFinish={onFinish}
      >
        <Form.Item
          name="username"
          rules={[{ required: true, message: "Please input your Username!" }]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Username"
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{ required: true, message: "Please input your Password!" }]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>
        <Form.Item>
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <a
            onClick={() => onForgotPasswordClick()}
            className="login-form-forgot"
          >
            | Forgot password
          </a>
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
          >
            Log in
          </Button>{" "}
          <Divider orientation="center">Or</Divider>
          <a onClick={(e) => onSignUpClick(e)} className="login-form-forgot">
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
              Create an Account
            </Text>
          </a>
        </Form.Item>
      </Form>
    </Wrapper>
  );
}
