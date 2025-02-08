import { Button } from 'antd'
import 'react'

const Logout = () => {
  return (
    <div className='logoutContainer'>
        <h4 className='logoutText'>Are You Want To Logout?</h4>
        <div className='btnGroup'>
            <Button className='noBtn'>No</Button>
            <Button className='yesBtn'>Yes</Button>
        </div>
    </div>
  )
}

export default Logout
