import 'react'
import TableExample from '../../../components/Table';
import { PlusCircleTwoTone ,FilterTwoTone, DeleteFilled} from '@ant-design/icons';
import { Form, Input, Modal, Slider, Space } from 'antd';
const { Search } = Input;
import {EditTwoTone} from '@ant-design/icons'
import { useState } from 'react';

const Department = () => {

  const [postDepartment,setPostDepartment] = useState(false)
  const [editDepartment,setEditDepartment] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false);
  const onChange = (value) => {
    console.log('onChange: ', value);
  };
  const onChangeComplete = (value) => {
    console.log('onChangeComplete: ', value);
  };
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const departmentColumns = [
    {
      title: 'Id',
      width: 100,
      dataIndex: 'id',
      key: '1',
    },
    {
      title: 'Name',
      width: 100,
      dataIndex: 'name',
      key: '2',
    },
    {
      title: 'Salary Rate',
      width: 100,
      dataIndex: 'rate',
      key: '3',
    },
    {
      title: 'Action',
      key: '4',
      fixed: 'right',
      width: 100,
      render: () =><Space size="middle">
        <a className='editIcon' onClick={() => setEditDepartment(true)}><EditTwoTone /></a>
        <a className='delteIcon' onClick={showModal}><DeleteFilled /></a>
      </Space> ,
    }
  ]

  const data = [
    {
      id:1,
      name:"IT",
      rate:"250000-500000"
    },
    {
      id:2,
      name:"Testing",
      rate:"250000-500000"
    }
  ]

  const departmentDatasource = data.map((i)=>{
    return ({
      key:i.id,
      id:i.id,
      name:i.name,
      rate:i.rate
    })
  })
  
  const onSearch = (value) => console.log(value);

  return (
    <div>
      <div className='header'>
        <h4>Department</h4>
        <div className='inputBox'>
          <Search placeholder="input search text" onSearch={onSearch} enterButton style={{padding:'20px 10px'}}/>
          <PlusCircleTwoTone style={{fontSize: '32px',cursor:'pointer',marginLeft:'10px'}} onClick={() => setPostDepartment(true)}/>
          <FilterTwoTone style={{fontSize: '32px',cursor:'pointer',marginLeft:'10px'}}/>
        </div>
      </div>
      <TableExample columns={departmentColumns} dataSource={departmentDatasource}/>
          <Modal
            title="Create Department"
            style={{
              top: 120,
            }}
            open={postDepartment}
            onOk={() => setPostDepartment(false)}
            onCancel={() => setPostDepartment(false)}
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
                    <Form.Item label='Department Name'>
                        <Input size="large" placeholder='Enter Department'/>
                    </Form.Item>
                    <Form.Item label='Salary Rate'>
                      <Slider
                        range
                        step={10}
                        defaultValue={[20, 50]}
                        onChange={onChange}
                        onChangeComplete={onChangeComplete}
                      />
                    </Form.Item>
                </div>
            </Form>
          </Modal>

          <Modal
            title="Edit Department"
            style={{
              top: 120,
            }}
            open={editDepartment}
            onOk={() => setEditDepartment(false)}
            onCancel={() => setEditDepartment(false)}
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
                    <Form.Item label='Department Name'>
                        <Input size="large" placeholder='Enter Department'/>
                    </Form.Item>
                    <Form.Item label='Salary Rate'>
                      <Slider
                        range
                        step={10}
                        defaultValue={[20, 50]}
                        onChange={onChange}
                        onChangeComplete={onChangeComplete}
                      />
                    </Form.Item>
                </div>
            </Form>
          </Modal>

          <Modal title="Are You Want To Delete" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}  style={{
              top: 120,
            }}
            width='35%'
            ></Modal>

    </div>
  )
}

export default Department
