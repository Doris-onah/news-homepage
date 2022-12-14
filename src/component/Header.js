import React from "react";
import './Header.css'
import logo from '../../src/assets/images/logo.svg'
import iconmenu from '../../src/assets/images/iconmenu.svg'
import menuclose from '../../src/assets/images/menuclose.svg'
import { Link } from "react-router-dom";


function Header() {
    
    const [menu ,setMenu] = React.useState(false)

    const handle = () => {
        setMenu(!menu)
    }

    return(
        <div className="header">
            <div className="header-con">
            <div className="header__left">
                <img src={logo} alt="logo" className="logo" width="65px" height="40px" title="logo"/>
                </div>

<div className="nav" >
                <div onClick={handle}>{menu ? 
               
      <img src={iconmenu}  alt="iconmenu" className="menu-icon" title="iconmenu" width="32px" height="31px"/> :
      <img src={menuclose} alt="iconmenu" className="menu-icon " title="iconmenu" width="32px" height="31"/> }
       </div>
       <ul className={menu ?  "" :"nav-active"  }>
      <li>  <Link to="/" onClick={() => setMenu(!menu)}>Home</Link></li>
      <li> <Link to="/new" onClick={() => setMenu(!menu)}>New</Link> </li>
      <li > <Link to="/trending" onClick={() => setMenu(!menu)}>Trending</Link> </li>
      <li > <Link to="/categories" onClick={() => setMenu(!menu)}>Categories</Link></li>
      <li > <Link to="/popular" onClick={() => setMenu(!menu)}>Popular</Link></li>
    <li> <Link to="/login" onClick={() =>setMenu(!menu)}><button>login</button></Link></li>
       </ul>
     </div>
        </div>
        </div>
    )
}export default Header