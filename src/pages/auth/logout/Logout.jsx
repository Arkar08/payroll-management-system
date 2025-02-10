import { Button } from 'antd'
import 'react'
import { useNavigate } from 'react-router-dom'

const Logout = () => {

  const navigate = useNavigate()

  const logout = () =>{
    navigate('/auth/login')
  }
  
  return (
    <div className='logoutContainer'>
        <h4 className='logoutText'>Are You Want To Logout?</h4>
        <div className='btnGroup'>
            <Button className='noBtn'>No</Button>
            <Button className='yesBtn' onClick={()=>logout()}>Yes</Button>
        </div>
    </div>
  )
}

export default Logout
