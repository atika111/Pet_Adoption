import { useState } from "react";
import Navbar from "../Header/Navbar";
import { Button, Form, Input, InputNumber } from "antd";
import { Container, Typography } from "@mui/material";

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

/* eslint-disable no-template-curly-in-string */
const validateMessages = {
  required: "${label} is required!",
  types: {
    email: "${label} is not a valid email!",
    password: "${label} is not a valid Password!",
    number: "${label} is not a valid number!",
    phone: "${label} is not a valid number!",
  },
  number: {
    range: "${label} must be between ${min} and ${max}",
  },
};

function ProfileSettingForm() {
  const onFinish = (values) => {
    console.log(values);
  };

  return (
    <div>
      <Navbar />
      <Container
        fixed
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "80vh",
          width: "50%",
          margin: "1.5rem auto",
          marginTop: "3rem",
          borderRadius: "10px",
          boxShadow: "0 1px 4px rgba(0,0,0,.1)",
          backgroundColor: "#FFFFFF",
        }}
      >
        <div className="profile-settings">
          <Typography variant="h3" sx={{ marginBottom: "50px" }}>
            Edit Profile
          </Typography>
          <Form
            {...layout}
            name="nest-messages"
            onFinish={onFinish}
            validateMessages={validateMessages}
          >
            <Form.Item name={["user", "First Name"]} label="First Name">
              <Input />
            </Form.Item>
            <Form.Item name={["user", "Last Name"]} label="Last Name">
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
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              name="password"
              label="Password"
            >
              <Input.Password />
            </Form.Item>

            <Form.Item
              name={["user", "phone"]}
              label="Phone number"
              rules={[{ type: "phone", min: 0, max: 20 }]}
            >
              <Input />
            </Form.Item>
            <Form.Item name={["user", "introduction"]} label="short bio">
              <Input.TextArea />
            </Form.Item>
            <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
              <Button type="primary" htmlType="submit">
                Save
              </Button>
            </Form.Item>
          </Form>
        </div>
      </Container>
    </div>
  );
}

export default ProfileSettingForm;
