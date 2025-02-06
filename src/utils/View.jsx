import "react"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { data } from "./data"

const router = createBrowserRouter(data)
const View = () =>{
    return(
        <RouterProvider router={router}/>
    )
}

export default View