
import Home from "../Layouts/Home/Home";
import Main from "../Layouts/Main/Main";
import Login from "../pages/auth/login/Login";
import Logout from "../pages/auth/Logout/Logout";
import Dashboard from "../pages/dashboard/Dashboard";
import Attance from "../pages/management/Attance/Attance";
import Leave from "../pages/management/Leave/Leave";
import Loan from "../pages/management/Loan/Loan";
import Management from "../pages/management/management/Management";
import NotFound from "../pages/notfound/NotFound";
import Department from "../pages/permission/Department/Department";
import Permission from "../pages/permission/Permission/Permission";
import RolePermission from "../pages/permission/Rolepermission/RolePermission";
import User from "../pages/permission/User/User";
import Report from "../pages/report/Report/Report";
import TransactionHistory from "../pages/report/Transaction-History/TransactionHistory";
import Generate from "../pages/salary/GenerateSalary/Generate";
import History from "../pages/salary/History/History";
import Salaray from "../pages/salary/salary/Salaray";

export const data = [
    {
        path:'auth/login',
        text:'Login',
        Component:Login
    },
    {
        path:'/',
        Component:Main,
        children:[
            {
                index:true,
                Component:Home
            },
             
            {
                path:'dashboard',
                Component:Dashboard,
                text:'Dashboard'
            },
            {
                path:'management',
                text:"Management",
                children:[
                        {
                            Component:Management,
                            index:true
                        },
                        {
                            Component:Attance,
                            text:'Attance',
                            path:'attance'
                        },
                        {
                            path:'leave',
                            Component:Leave,
                            text:'Leave'
                        },
                        {
                            path:'loan',
                            Component:Loan,
                            text:"Loan"
                        }
                    ]
                },
                {
                    path:"salary",
                    text:"Salary",
                    children:[
                        {
                            index:true,
                            Component:Salaray
                        },
                        {
                            path:"generate",
                            Component:Generate,
                            text:"Generate Salary"
                        },
                        {
                            path:'history',
                            Component:History,
                            text:"History",
                        }
                    ]
                },
                {
                    path:"report",
                    text:"Report",
                    children:[
                        {
                            index:true,
                            Component:Report
                        },
                        {
                            path:'transactionReport',
                            Component:TransactionHistory,
                            text:"Transaction History"
                        }
                    ]
                },
                {
                    path:"role",
                    text:'Permission',
                    children:[
                        {
                            index:true,
                            Component:Permission
                        },
                        {   
                            path:"permission",
                            Component:RolePermission,
                            text:"UserRolePermission"
                        },
                        {
                            path:'employee',
                            Component:User,
                            text:"Employee"
                        },
                        {
                            path:"department",
                            Component:Department,
                            text:"Department"
                        },
                    ]
                },
                {
                    path:"auth/logout",
                    text:"Logout",
                    Component:Logout
                }
        ]
    },
    {
        path:'*',
        text:"Not Found",
        Component:NotFound
    }
]