import React from 'react';
import { Form, Input, InputNumber, Button } from 'antd';
import { useDispatch } from 'react-redux';
import { fetchPostUsers } from '../redux/reducerSlices/userPostSlice';

function UserPost() {
  const dispatch = useDispatch();

  const onFinish = (values) => {
    dispatch(fetchPostUsers(values));
  };

  return (
    <Form
      name="userPostForm"
      layout="vertical"
      onFinish={onFinish}
      initialValues={{
        name: '',
        age: null,
        email: '',
        city: '',
      }}
    >
      <Form.Item
        label="Name"
        name="name"
        rules={[{ required: true, message: 'Please enter your name' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Age"
        name="age"
        rules={[{ required: true, message: 'Please enter your age' }]}
      >
        <InputNumber style={{ width: '100%' }} />
      </Form.Item>

      <Form.Item
        label="Email"
        name="email"
        rules={[
          { required: true, message: 'Please enter your email' },
          { type: 'email', message: 'Please enter a valid email address' },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="City"
        name="city"
        rules={[{ required: true, message: 'Please enter your city' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
}

export default UserPost;
