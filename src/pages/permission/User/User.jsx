import 'react'
import TableExample from '../../../components/Table';
import { PlusCircleTwoTone ,FilterTwoTone} from '@ant-design/icons';
import { Checkbox, Form, Input, Modal, Select, Space, Switch } from 'antd';
import {EditTwoTone} from '@ant-design/icons'
import { useState } from 'react';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
const { Search } = Input;


const User = () => {

  const [createUser,setCreateUser] = useState(false)
  const [editUser,setEditUser] = useState(false)

  const onChange = (checked) => {
    console.log(`switch to ${checked}`);
  };

  const userColumns = [
    {
      title: 'Full Name',
      width: 100,
      dataIndex: 'name',
      key: '1',
    },
    {
      title: 'Age',
      width: 100,
      dataIndex: 'age',
      key: '2',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      width: 100,
      key: '3',
    },
    {
      title: 'Password',
      dataIndex: 'password',
      width: 100,
      key: '4',
    },
    {
      title: 'Phone',
      dataIndex: 'phone',
      width: 100,
      key: '5',
    },
    {
      title: 'Department',
      dataIndex: 'department',
      width: 100,
      key: '6',
    },
    {
      title: 'Role',
      dataIndex: 'role',
      width: 100,
      key: '7',
    },
    {
      title: 'Address',
      dataIndex: 'address',
      width: 100,
      key: '8',
    },
    {
      title: 'Status',
      dataIndex: 'status',
      width: 100,
      key: '9',
    },
    {
      title: 'Action',
      key: '10',
      fixed: 'right',
      width: 100,
      render: () => <Space size="middle">
          <a className='editIcon' onClick={()=> setEditUser(true)}><EditTwoTone /></a>
          <Switch defaultChecked onChange={onChange} />
        </Space>,
    }
  ]

  const userDataSource = userColumns.map((i)=>{
    return (
      {
        key:i.key,
        name:'KyawKyaw',
        age:Number(i.key) + 20,
        email:`${i.title}@gamail.com`,
        password:i.title,
        phone:'09'+i.key+'4568283',
        department:'It',
        role:'Employee',
        address:"kamayut",
        status:"Active"
      }
    )
  })
 
  const onSearch = (value) => console.log(value);
  
  return (
    <>
        <div className='header'>
          <h4>Employee</h4>
          <div className='inputBox'>
            <Search placeholder="input search text" onSearch={onSearch} enterButton style={{padding:'20px 10px'}}/>
            <PlusCircleTwoTone style={{fontSize: '32px',cursor:'pointer',marginLeft:'10px'}} onClick={()=>setCreateUser(true)}/>
            <FilterTwoTone style={{fontSize: '32px',cursor:'pointer',marginLeft:'10px'}}/>
          </div>
        </div>
        <TableExample columns={userColumns} dataSource={userDataSource}/>
          <Modal
            title="Create Department"
            style={{
              top: 120,
            }}
            open={createUser}
            onOk={() => setCreateUser(false)}
            onCancel={() => setCreateUser(false)}
            width={{
              xs: '90%',
              sm: '80%',
              md: '70%',
              lg: '60%',
              xl: '50%',
              xxl: '40%',
            }}
          >
            <Form layout='vertical'>
                <div className='item'>
                    <Form.Item label='Full Name'>
                        <Input  placeholder='Enter Name' size="large"/>
                    </Form.Item>
                    <Form.Item label='Age'>
                        <Input  placeholder='Enter Age' type='number' size="large"/>
                    </Form.Item>
                </div>
                <div className='item'>
                    <Form.Item label='Email'>
                        <Input  placeholder='Enter Email' addonAfter=".com" size="large"/>
                    </Form.Item>
                    <Form.Item label='Password'>
                        <Input.Password  size="large" placeholder='Enter Password' iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}/>
                    </Form.Item>
                </div>
                <div className='item'>
                    <Form.Item label='Phone'>
                        <Input size="large" addonBefore="+95" placeholder='09********'type='number'/>
                    </Form.Item>
                    <Form.Item label='Department'>
                        <Select placeholder='Select Department' size='large'>
                          <Select.Option value='IT'>IT</Select.Option>
                          <Select.Option value='Testing'>Testing</Select.Option>
                        </Select>
                    </Form.Item>
                </div>
                <div className='item'>
                    <Form.Item label='Role'>
                      <Select placeholder='Select Role' size='large'>
                        <Select.Option value='Manager'>Manager</Select.Option>
                        <Select.Option value='Employee'>Employee</Select.Option>
                      </Select>
                    </Form.Item>
                    <Form.Item label='Address'>
                        <Input size="large" placeholder='Enter address'/>
                    </Form.Item>
                </div>
            </Form>
          </Modal>

          <Modal
            title="Edit Department"
            style={{
              top: 120,
            }}
            open={editUser}
            onOk={() => setEditUser(false)}
            onCancel={() => setEditUser(false)}
            width={{
              xs: '90%',
              sm: '80%',
              md: '70%',
              lg: '60%',
              xl: '50%',
              xxl: '40%',
            }}
          >
            <Form layout='vertical'>
                <div className='item'>
                    <Form.Item label='Full Name'>
                        <Input  placeholder='Enter Name' size="large"/>
                    </Form.Item>
                    <Form.Item label='Age'>
                        <Input  placeholder='Enter Age' type='number' size="large"/>
                    </Form.Item>
                </div>
                <div className='item'>
                    <Form.Item label='Email'>
                        <Input  placeholder='Enter Email' addonAfter=".com" size="large"/>
                    </Form.Item>
                    <Form.Item label='Password'>
                        <Input.Password  size="large" placeholder='Enter Password' iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}/>
                    </Form.Item>
                </div>
                <div className='item'>
                    <Form.Item label='Phone'>
                        <Input size="large" addonBefore="+95" placeholder='09********'type='number'/>
                    </Form.Item>
                    <Form.Item label='Department'>
                        <Select placeholder='Select Department' size='large'>
                          <Select.Option value='IT'>IT</Select.Option>
                          <Select.Option value='Testing'>Testing</Select.Option>
                        </Select>
                    </Form.Item>
                </div>
                <div className='item'>
                    <Form.Item label='Role'>
                      <Select placeholder='Select Role' size='large'>
                        <Select.Option value='Manager'>Manager</Select.Option>
                        <Select.Option value='Employee'>Employee</Select.Option>
                      </Select>
                    </Form.Item>
                    <Form.Item label='Address'>
                        <Input size="large" placeholder='Enter address'/>
                    </Form.Item>
                </div>
                <div className='item'>
                  <Checkbox value="isActive" size='large'>Is Active</Checkbox>
                </div>
            </Form>
          </Modal>


    </>
  )
}

export default User
