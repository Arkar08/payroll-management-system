import 'react'
import TableExample from '../../../components/Table';
import { PlusCircleTwoTone ,FilterTwoTone} from '@ant-design/icons';
import { DatePicker, Form, Input, Modal, Select } from 'antd';
import { useState } from 'react';
const { Search } = Input;

const Leave = () => {

  const [postLeave,setPostLeave] = useState(false)

  const leaveColumns = [
    {
      title:"FullName",
      key:'1',
      width:100,
      dataIndex:'name'
    },
    {
      title:'From Date',
      key:"2",
      width:100,
      dataIndex:'fromDate'
    },
    {
      title:"To Date",
      key:"3",
      width:100,
      dataIndex:'toDate'
    },
    {
      title:"Release Type",
      width:100,
      key:'4',
      dataIndex:'type'
    },
    {
      title:"Release Days",
      key:"5",
      width:100,
      dataIndex:'days'
    },
    {
      title:"Status",
      key:"6",
      width:100,
      dataIndex:'status'
    }
  ]

  const data = [
    {
      name:"AyeAye",
      fromDate:"24/2/2025",
      toDate:"25/2/2025",
      type:"full",
      days:"1",
      status:"Approve"
    },
    {
      name:"AyeAye",
      fromDate:"24/2/2025",
      toDate:"25/2/2025",
      type:"full",
      days:"1",
      status:"Approve"
    },
    {
      name:"AyeAye",
      fromDate:"24/2/2025",
      toDate:"25/2/2025",
      type:"Half",
      days:"0",
      status:"Approve"
    }
  ]

  const leaveDatasource = data.map((i,index)=>{
    return (
      {
        key:index,
        name:i.name,
        fromDate:i.fromDate,
        toDate:i.toDate,
        type:i.type,
        days:i.days,
        status:i.status
      }
    )
  })

  const onSearch = (value) => console.log(value);

  return (
    <div>
      <div className='header'>
        <h4>Leave Tickets</h4>
        <div className='inputBox'>
          <Search placeholder="input search text" onSearch={onSearch} enterButton style={{padding:'20px 10px'}}/>
          <PlusCircleTwoTone style={{fontSize: '32px',cursor:'pointer',marginLeft:'10px'}} onClick={() => setPostLeave(true)}/>
          <FilterTwoTone style={{fontSize: '32px',cursor:'pointer',marginLeft:'10px'}}/>
        </div>
      </div>
      <TableExample columns={leaveColumns} dataSource={leaveDatasource}/>
          <Modal
            title="Upload Attance"
            style={{
              top: 120,
            }}
            open={postLeave}
            onOk={() => setPostLeave(false)}
            onCancel={() => setPostLeave(false)}
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
                    <Form.Item label='From Date'>
                        <DatePicker size="large" className='input'/>
                    </Form.Item>
                </div>
                <div className='item'>
                    <Form.Item label='To Date'>
                      <DatePicker size="large" className='input'/>
                    </Form.Item>
                    <Form.Item label='Release Type'>
                        <Select placeholder="Select type" size='large'>
                          <Select.Option value='full'>Full</Select.Option>
                          <Select.Option value='half'>Half</Select.Option>
                        </Select>
                    </Form.Item>
                </div>
                <div className='item'>
                    <Form.Item label='Release Days'>
                      <Input size="large" disabled/>
                    </Form.Item>
                </div>
            </Form>
          </Modal>
    </div>
  )
}

export default Leave
