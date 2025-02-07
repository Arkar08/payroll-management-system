import 'react'
import TableExample from '../../../components/Table';
import { PlusCircleTwoTone ,FilterTwoTone} from '@ant-design/icons';
import { Input } from 'antd';
const { Search } = Input;

const Generate = () => {
  const onSearch = (value) => console.log(value);

  return (
    <div>
      <div className='header'>
        <h4>Generate Salary</h4>
        <div className='inputBox'>
          <Search placeholder="input search text" onSearch={onSearch} enterButton style={{padding:'20px 10px'}}/>
          <PlusCircleTwoTone style={{fontSize: '32px',cursor:'pointer',marginLeft:'10px'}}/>
          <FilterTwoTone style={{fontSize: '32px',cursor:'pointer',marginLeft:'10px'}}/>
        </div>
      </div>
      <TableExample />
    </div>
  )
}

export default Generate
