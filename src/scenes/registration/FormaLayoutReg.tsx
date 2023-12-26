import React from 'react';
import { Button, Form, Input} from 'antd';
import { Link } from 'react-router-dom';


const onFinish = (values: any) => {
  console.log('Success:', values);
};

const onFinishFailed = (errorInfo: any) => {
  console.log('Failed:', errorInfo);
};

type FieldType = {
  firstname?:string;
  lastname?:string;
  username?: string;
  email?:string;
  password?: string;
  remember?: string;
};


const FormLayout: React.FC = () => (
  <Form
    name="basic"
    labelCol={{ span: 8 }}
    wrapperCol={{ span: 16 }}
    style={{ maxWidth: 600 }}
    initialValues={{ remember: true }}
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    autoComplete="off"
  >
    
    <Form.Item<FieldType>
      label="First Name"
      name="firstname"
      rules={[{ required: true, message: 'Please input your firstname!' }]}
    >
      <Input placeholder='Firstname'/>
    </Form.Item>
    <Form.Item<FieldType>
      label="Last Name"
      name="lastname"
      rules={[{ required: true, message: 'Please input your lastname!' }]}
    >
      <Input placeholder='Lastname'/>
    </Form.Item>
    <Form.Item<FieldType>
      label="Email"
      name="email"
      rules={[{ required: true, message: 'Please input your lastname!' }]}
    >
      <Input placeholder="Email address"/>
    </Form.Item>
    

    <Form.Item<FieldType>
      label="Password"
      name="password"
      rules={[{ required: true, message: 'Please input your password!' }]}
    >
      <Input.Password placeholder='Password'/>
    </Form.Item>

    <Form.Item<FieldType>
      label="confirmPassword"
      name="password"
      rules={[{ required: true, message: 'Please input your password!' }]}
    >
      <Input.Password placeholder='Confirm Password'/>
    </Form.Item>

 

    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
      <Button type="primary" htmlType="submit">
        Create Account
      </Button>
      <br />
      <p>Already Registered? <Link to='/login'>Login</Link></p>
    </Form.Item>

    
  </Form>
);

export default FormLayout;