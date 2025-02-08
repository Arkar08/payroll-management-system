import { useState} from 'react'
import { Outlet, useNavigate } from 'react-router-dom';
import {  Layout, Menu } from 'antd';
import './Main.css'
import menuList from '../../utils/DummyData';
import profileImage from '/images/boy.png'


const { Header, Content, Sider } = Layout;


const Main = () => {
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate()


  return (
    <div className='main'>
       <Layout
      style={{
        minHeight: '95vh',
      }}
    >
      <Header>
          <h3>Payroll Management System</h3>
          <div className="headerContainer">
            <p>Super Admin</p>
            <div className='profileContainer'>
              <img src={profileImage} alt="profile_img" className='profileImage'/>
            </div>
          </div>
      </Header>
      <Layout>
      <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
        <div className="demo-logo-vertical" />
        <Menu 
          theme="dark" defaultSelectedKeys={[location.pathname]} mode="inline" items={menuList}
          onClick={({key})=>{
            navigate(key)
          }}
        />
      </Sider>
        <Content
          style={{
            margin: '0 16px',
            padding:'20px'
          }}
        >
          <Outlet />
        </Content>
      </Layout>
    </Layout>
    </div>
  )
}

export default Main
