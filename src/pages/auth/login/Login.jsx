import 'react'
import { Button, Checkbox, Form, Input } from 'antd';
import { useNavigate } from 'react-router-dom';



const Login = () => {
  
  const navigate = useNavigate()

  const onFinish = () =>{
    navigate('/dashboard')
  }

  return (
  <div className='loginContainer'>
    <div className="loginForm">
      <Form onFinish={onFinish}>
        <p className='loginText'>Login</p>
        <Form.Item
          label="Username"
          name="username"
          rules={[
            {
              required: true,
              message: 'Please input your username!',
            },
          ]}
        >
          <Input autoComplete='off'/>
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: 'Please input your password!',
            },
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item name="remember" valuePropName="checked" label={null} className='remember'>
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item label={null} className='buttonSubmit'>
          <Button type="primary" htmlType="submit" className='loginButton'>
            Login
          </Button>
        </Form.Item>
      </Form>
    </div>
  </div>
  )
}

export default Login
