import 'react'
import TableExample from '../../../components/Table';
import { PlusCircleTwoTone ,FilterTwoTone} from '@ant-design/icons';
import { Form, Input, Modal, Select } from 'antd';
import { useState } from 'react';
const { Search } = Input;

const Loan = () => {

  const onSearch = (value) => console.log(value);
  const [postLoan,setPostLoan] = useState(false)

  const loanColumns = [
    {
      title:"FullName",
      width:100,
      key:'1',
      dataIndex:'name'
    },
    {
      title:"Amount",
      width:100,
      key:'2',
      dataIndex:'amount'
    },
    {
      title:"Loan Type",
      width:100,
      key:'3',
      dataIndex:'type'
    },
    {
      title:"Description",
      width:100,
      key:'4',
      dataIndex:'description'
    },
    {
      title:"Created Date",
      width:100,
      key:'5',
      dataIndex:'date'
    },
    {
      title:"Status",
      width:100,
      key:'6',
      dataIndex:'status'
    },
  ]

  const data = [
    {
      name:"ZawZaw",
      amount:200000,
      type:"Education",
      description:"I need this money because I want to go to english school.",
      status:"Pending",
      date:"24/2/2025"
    },
    {
      name:"ZawZaw",
      amount:200000,
      type:"Education",
      description:"I need this money because I want to go to english school.",
      status:"Pending",
      date:"24/2/2025"
    },
    {
      name:"ZawZaw",
      amount:200000,
      type:"Education",
      description:"I need this money because I want to go to english school.",
      status:"Pending",
      date:"24/2/2025"
    }
  ]

  const loanDatasource = data.map((i,index)=>{
    return ({
      key:index,
      name:i.name,
      amount:i.amount,
      type:i.type,
      description:i.description,
      status:i.status,
      date:i.date
    })
  })

  return (
    <div>
      <div className='header'>
        <h4>Loan</h4>
        <div className='inputBox'>
          <Search placeholder="input search text" onSearch={onSearch} enterButton style={{padding:'20px 10px'}}/>
          <PlusCircleTwoTone style={{fontSize: '32px',cursor:'pointer',marginLeft:'10px'}} onClick={() => setPostLoan(true)}/>
          <FilterTwoTone style={{fontSize: '32px',cursor:'pointer',marginLeft:'10px'}}/>
        </div>
      </div>
      <TableExample columns={loanColumns} dataSource={loanDatasource}/>
          <Modal
            title="Upload Attance"
            style={{
              top: 120,
            }}
            open={postLoan}
            onOk={() => setPostLoan(false)}
            onCancel={() => setPostLoan(false)}
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
                    <Form.Item label='Amount'>
                        <Input size="large" type='number' placeholder='Enter Amount'/>
                    </Form.Item>
                </div>
                <div className='item'>
                    <Form.Item label='Release Type'>
                        <Select placeholder="Select Loan type" size='large'>
                          <Select.Option value='Education'>Education</Select.Option>
                          <Select.Option value='Home'>Home</Select.Option>
                        </Select>
                    </Form.Item>
                    <Form.Item label='Descriptions'>
                      <Input size="large" placeholder='Enter Descriptions'/>
                    </Form.Item>
                </div>
            </Form>
          </Modal>
    </div>
  )
}

export default Loan
