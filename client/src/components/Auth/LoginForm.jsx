import React from "react";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Card, Checkbox, Form, Input } from "antd";
import { useAuth } from "../../context/AuthContext";
import axios from "axios";
import { useUser } from "../../context/UserContext";

function LoginForm() {

  const {setModalOpen, setToken, fetchUserData, setIsLogin} = useAuth()
  const {setUserData} = useUser()
  const onFinish = async (logUser) => {
    console.log('logUser: ', logUser);
    try {
      console.log('Hi from LoginForm');
      const {data} = await axios.post("http://localhost:8080/user/auth/login", logUser)
      setModalOpen(false)
      localStorage.setItem('token', data.accessToken)
      setToken(data.accessToken)
      setUserData(true)
      setIsLogin(true)
    } catch (error) {
      console.log('error: ', error?.response?.data);    
    }



  };
  return (
    <div>
      <Card>
        <Form
          name="normal_login"
          className="login-form"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
        >
          <Form.Item
            name="email"
            rules={[
              {
                required: true,
                message: "Please input your Email!",
              },
            ]}
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Email"
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your Password!",
              },
            ]}
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

            <a className="login-form-forgot" href="">
              Forgot password
            </a>
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
              Log in
            </Button>
            Or <a href="">register now!</a>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
}

export default LoginForm;
