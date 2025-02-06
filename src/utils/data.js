
import Home from "../Layouts/Home/Home";
import Main from "../Layouts/Main/Main";
import Login from "../pages/auth/login/Login";
import Logout from "../pages/auth/Logout/Logout";
import Dashboard from "../pages/dashboard/Dashboard";
import Attance from "../pages/management/Attance/Attance";
import Leave from "../pages/management/Leave/Leave";
import Loan from "../pages/management/Loan/Loan";
import NotFound from "../pages/notfound/NotFound";
import Department from "../pages/permission/Department/Department";
import RolePermission from "../pages/permission/Rolepermission/RolePermission";
import User from "../pages/permission/User/User";
import TransactionHistory from "../pages/report/Transaction-History/TransactionHistory";
import Generate from "../pages/salary/GenerateSalary/Generate";
import History from "../pages/salary/History/History";

export const data = [
    {
        path:'auth/login',
        text:'Login',
        Component:Login
    },
    {
        path:"auth/logout",
        text:"Logout",
        Component:Logout
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
                            Component:Attance,
                            text:'Attance',
                            index:true
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
                            Component:TransactionHistory,
                            text:"Transaction History"
                        }
                    ]
                },
                {
                    path:"permission",
                    text:'Permission',
                    children:[
                        {   
                            index:true,
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
        ]
    },
    {
        path:'*',
        text:"Not Found",
        Component:NotFound
    }
]