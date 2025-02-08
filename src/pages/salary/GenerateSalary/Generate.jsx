import { Button, Form, Input, Select, Space } from 'antd'
import 'react'
import { useNavigate } from 'react-router-dom'

const Generate = () => {
  const navigate = useNavigate()

  const generateSalary = ()=>{
    navigate('/salary/history')
  }

  return (
    <div>
      <h4>Generate</h4>
      <Form className='form' layout='vertical'>
        <div className='item'>
          <Form.Item rules={[{ required: true }]} label='FullName' name='fullName'>
              <Select size='large' placeholder="Select FullName">
                <Select.Option value='Arkar'>
                      Arkar
                </Select.Option>
              </Select>
          </Form.Item>
          <Form.Item label='Department'>
             <Input placeholder="Enter department" disabled size="large"/>
          </Form.Item>
        </div>
        <div className='item'>
          <Form.Item label='Attance'>
             <Input placeholder="Enter Attance" disabled size="large"/>
          </Form.Item>
          <Form.Item label='Leave Ticket'>
             <Input placeholder="Enter tickets" disabled size="large"/>
          </Form.Item>
        </div>
        <div className='item'>
          <Form.Item label='Loan'>
             <Input placeholder="Enter loan" disabled size="large"/>
          </Form.Item>
          <Form.Item label='Bonus'>
             <Input placeholder="Enter Bonus" type='number' size="large"/>
          </Form.Item>
        </div>
        <div className='item'>
          <Form.Item label='Total Amount' rules={[{ required: true }]} name='amount'>
             <Input placeholder="Enter amount" size="large" type='number'/>
          </Form.Item>
          <Form.Item label='Remarks' rules={[{ required: true }]} name='remarks'>
             <Input placeholder="Enter remarks" size="large"/>
          </Form.Item>
        </div>
        <div className='btn'>
          <Form.Item>
            <Space>
              <Button className='button' onClick={()=> generateSalary()}>
                Cancel
              </Button>
              <Button type="primary" className='button' onClick={()=> generateSalary()}>
                Generate
              </Button>
            </Space>
          </Form.Item>
        </div>
      </Form>
    </div>
  )
}

export default Generate
