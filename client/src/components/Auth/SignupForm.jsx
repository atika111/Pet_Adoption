import React, { useState } from "react";
import { Button, Form, Input, Card } from "antd";
import axios from "axios";
import { useAuth } from "../../context/AuthContext";

//  Layout, Typography, Col, Row, Button, Form, Input, Image, Card,Modal
function SignupForm() {
  const { setModalOpen } = useAuth();
  const onFinish = async (newUser) => {
    try {
      console.log("Received values of form: ", newUser);
      const { data } = await axios.post(
        "http://localhost:8080/user/auth/signup",
        newUser
      );
      setModalOpen(true);
      console.log("data: ", data);
    } catch (error) {
      console.log("error: ", error?.response?.data);
    }
  };

  return (
    <div>
      <Card>
        <Form
          name="register"
          onFinish={onFinish}
          initialValues={{
            residence: ["zhejiang", "hangzhou", "xihu"],
            prefix: "86",
          }}
          style={{ maxWidth: 600 }}
          scrollToFirstError
        >
          <Form.Item
            name="firstName"
            label="First Name"
            rules={[
              {
                type: "name",
                message: "Please provide your name",
              },
              {
                required: true,
                message: "Please,  your name",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="lastName"
            label="Last Name"
            rules={[
              {
                type: "name",
                message: "Please provide your name",
              },
              {
                required: true,
                message: "Please,  your name",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="email"
            label="email"
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
            name="repPassword"
            label="repPassword"
            dependencies={["password"]}
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
                  return Promise.reject("The passwords do not match!");
                },
              }),
            ]}
            hasFeedback
          >
            <Input.Password />
          </Form.Item>

          <Form.Item name="address" label="Address">
            <Input />
          </Form.Item>

          <Form.Item
            name="phoneNumber"
            label="Phone Number"
            rules={[
              { required: true, message: "Please input your phone number!" },
            ]}
          >
            <Input style={{ width: "100%" }} />
          </Form.Item>

          <Button type="primary" htmlType="submit">
            Register
          </Button>
        </Form>
      </Card>
    </div>
  );
}

export default SignupForm;
