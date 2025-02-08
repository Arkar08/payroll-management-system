import 'react'
import TableExample from '../../../components/Table';
import {FilterTwoTone} from '@ant-design/icons';
import { Input } from 'antd';
const { Search } = Input;

const TransactionHistory = () => {

  const generateColumns = [
    {
      title:"FullName",
      width:100,
      key:'1',
      dataIndex:"name"
    },
    {
      title:"Department",
      width:100,
      key:"2",
      dataIndex:"department"
    },
    {
      title:"Leave Ticket",
      width:100,
      key:"3",
      dataIndex:'leaveTicket'
    },
    {
      title:"Attance",
      width:100,
      key:"4",
      dataIndex:"attance"
    },
    {
      title:"Loan",
      width:100,
      key:"5",
      dataIndex:"loan"
    },
    {
      title:"Bonus",
      width:100,
      key:"6",
      dataIndex:"bonus"
    },
    {
      title:"Total Amount",
      width:100,
      key:"7",
      dataIndex:"total"
    },
    {
      title:" Payment Date",
      width:100,
      key:"8",
      dataIndex:"date"
    },
    {
      title:"Remark",
      width:100,
      key:"9",
      dataIndex:"remark"
    }
  ]

  const data = [
    {
      name:'AungAung',
      department:'IT',
      leaveTicket:'3',
      attance:'27',
      loan:0,
      bonus:0,
      total:400000,
      date:'1/2/2025',
      remark:"January salary"
    },
    {
      name:'AungAung',
      department:'IT',
      leaveTicket:'3',
      attance:'27',
      loan:0,
      bonus:0,
      total:400000,
      date:'1/2/2025',
      remark:"January salary"
    },
    {
      name:'AungAung',
      department:'IT',
      leaveTicket:'3',
      attance:'27',
      loan:0,
      bonus:0,
      total:400000,
      date:'1/2/2025',
      remark:"January salary"
    }
  ]

  const generateDatasource = data.map((i,index)=>{
    return ({
      key:index,
      name:i.name,
      department:i.department,
      leaveTicket:i.leaveTicket,
      attance:i.attance,
      loan:i.loan,
      bonus:i.bonus,
      total:i.total,
      date:i.date,
      remark:i.remark
    })
  })

  const onSearch = (value) => console.log(value);
  return (
      <div>
        <div className='header'>
          <h4>All Transaction History</h4>
          <div className='inputBox'>
            <Search placeholder="input search text" onSearch={onSearch} enterButton style={{padding:'20px 10px'}}/>
            <FilterTwoTone style={{fontSize: '32px',cursor:'pointer',marginLeft:'10px'}}/>
          </div>
        </div>
        <TableExample columns={generateColumns} dataSource={generateDatasource}/>
      </div>
  )
}

export default TransactionHistory
