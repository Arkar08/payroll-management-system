import 'react';
import TableExample from '../../../components/Table';
import { PlusCircleTwoTone ,FilterTwoTone} from '@ant-design/icons';
import { DatePicker, Form, Input, Modal, TimePicker } from 'antd';
import {EditTwoTone} from '@ant-design/icons'
import { useState } from 'react';

const { Search } = Input;

const Attance = () => {

  const [openResponsive, setOpenResponsive] = useState(false);
  const [editResponsive,setEditResponsive] = useState(false)

  const attanceColumns = [
    {
      title: 'Full Name',
      width: 100,
      dataIndex: 'name',
      key: '1',
    },
    {
      title:"Check-In",
      width:100,
      dataIndex:'checkIn',
      key:'2'
    },
    {
      title:"Check-Out",
      width:100,
      dataIndex:'checkOut',
      key:'3'
    },
    {
      title:'Date',
      width:100,
      dataIndex:'date',
      key:'4'
    },
    {
      title:"Total Time",
      width:100,
      dataIndex:'time',
      key:'5'
    },
    {
      title: 'Action',
      key: '6',
      fixed: 'right',
      width: 100,
      render: () => <a className='editIcon' onClick={() => setEditResponsive(true)}><EditTwoTone /></a>,
    }
  ]

  const data = [
    {
      fullName:"Kyawkyaw",
      checkIn:'9:00AM',
      checkOut:"5:00PM",
      date:'24/2/2025',
      time:'8:00'
    },
    {
      fullName:"Kyawkyaw",
      checkIn:'9:00AM',
      checkOut:"5:00PM",
      date:'24/2/2025',
      time:'8:00'
    },
    {
      fullName:"Kyawkyaw",
      checkIn:'9:00AM',
      checkOut:"5:00PM",
      date:'24/2/2025',
      time:'8:00'
    }
  ]

  const attanceDataSource = data.map((i,index)=>{
    return (
      {
        key:index,
        name:i.fullName,
        checkIn:i.checkIn,
        checkOut:i.checkOut,
        date:i.date,
        time:i.time
      }
    )
  })

  const onSearch = (value) => console.log(value);

  return (
    <div>
      <div className='header'>
        <h4>Attance</h4>
        <div className='inputBox'>
          <Search placeholder="input search text" onSearch={onSearch} enterButton style={{padding:'20px 10px'}}/>
          <PlusCircleTwoTone style={{fontSize: '32px',cursor:'pointer',marginLeft:'10px'}} onClick={() => setOpenResponsive(true)}/>
          <FilterTwoTone style={{fontSize: '32px',cursor:'pointer',marginLeft:'10px'}}/>
        </div>
      </div>
      <TableExample columns={attanceColumns} dataSource={attanceDataSource}/>
          <Modal
            title="Upload Attance"
            style={{
              top: 120,
            }}
            open={openResponsive}
            onOk={() => setOpenResponsive(false)}
            onCancel={() => setOpenResponsive(false)}
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
                  <Form.Item label='FullName'>
                      <Input size="large" placeholder='Enter FullName'/>
                  </Form.Item>
                  <Form.Item label='Date'>
                      <DatePicker size="large" className='input'/>
                  </Form.Item>
              </div>
              <div className='item'>
                  <Form.Item label='Check-In'>
                      <TimePicker size="large" className='input'/>
                  </Form.Item>
                  <Form.Item label='Check-Out'>
                      <TimePicker size="large" className='input'/>
                  </Form.Item>
              </div>
           </Form>
          </Modal>


          <Modal
            title="Edit Attance"
            style={{
              top: 120,
            }}
            open={editResponsive}
            onOk={() => setEditResponsive(false)}
            onCancel={() => setEditResponsive(false)}
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
                  <Form.Item label='FullName'>
                      <Input size="large" placeholder='Enter FullName'/>
                  </Form.Item>
                  <Form.Item label='Date'>
                      <DatePicker size="large" className='input'/>
                  </Form.Item>
              </div>
              <div className='item'>
                  <Form.Item label='Check-In'>
                      <TimePicker size="large" className='input'/>
                  </Form.Item>
                  <Form.Item label='Check-Out'>
                      <TimePicker size="large" className='input'/>
                  </Form.Item>
              </div>
           </Form>
          </Modal>
    </div>
  )
}

export default Attance
