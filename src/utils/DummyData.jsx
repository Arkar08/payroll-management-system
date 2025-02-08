import {
  MoneyCollectOutlined,
  DesktopOutlined,
  LogoutOutlined,
  ApartmentOutlined,
  TeamOutlined,
  UserOutlined,
  AppstoreOutlined,
  UsergroupAddOutlined,
  DeliveredProcedureOutlined,
  DollarOutlined,
  AlignLeftOutlined,
  HistoryOutlined,
  SwapOutlined,
  ReconciliationOutlined,
  CheckSquareOutlined
} from '@ant-design/icons';

 
const menuList = [
  {
    label:'Dashboard',
    key:'/dashboard',
    icon:<AppstoreOutlined /> 
  },
  {
    label:'Role',
    icon:<DesktopOutlined />,
    children:[
      {
        label:"Department",
        key:"/role/department",
        icon:<ApartmentOutlined />
      },
      {
        label:"Employee",
        key:"/role/employee",
        icon:<UserOutlined />
      },
      {
        label:"Permission",
        key:"/role/permission",
        icon:<CheckSquareOutlined />
      }
    ]
  },
  {
    label:'Management',
    icon:<TeamOutlined />,
    children:[
      {
        label:"Attance",
        key:"/management/attance",
        icon:<UsergroupAddOutlined />
      },
      {
        label:'Leave',
        key:'/management/leave',
        icon:<DeliveredProcedureOutlined />
      },
      {
        label:"Loan",
        key:"/management/loan",
        icon:<DollarOutlined />
      }
    ]
  },
  {
    label:'Salary',
    icon:<MoneyCollectOutlined />,
    children:[
      {
        label:"Generate",
        key:"/salary/generate",
        icon:<AlignLeftOutlined />
      },
      {
        label:"History",
        key:"/salary/history",
        icon:<HistoryOutlined />
      }
    ]
  },
  {
    label:"Report",
    icon:<ReconciliationOutlined />,
    children:[
      {
        label:"All Transactions",
        key:"/report/transactionReport",
        icon:<SwapOutlined />
      }
    ]
  },
  {
    label:"Logout",
    icon:<LogoutOutlined />,
    key:'/auth/logout'
  }
]

export default menuList;