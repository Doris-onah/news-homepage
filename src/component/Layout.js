import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";



import './Layout.css'
export default function Layout() {
    return(
        <div className="layout-con">
          <div className="layout">
          <Header  />
         {/* <Home/> */}
           <Outlet/>
           </div>
        </div>
    )
}