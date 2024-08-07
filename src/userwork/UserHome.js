import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import MenuBookIcon from '@mui/icons-material/MenuBook';
import LogoutIcon from '@mui/icons-material/Logout';
import ContentPasteSearchIcon from '@mui/icons-material/ContentPasteSearch';
import RequestPageIcon from '@mui/icons-material/RequestPage';
import "./UserHome.css";
import React, { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function UserHome() {
  const dropdownRef = useRef(null);
  const [isActive, setIsActive] = useState(false);
  const onClick = () => setIsActive(!isActive);
  const  navigate =useNavigate()
  console.log(isActive)
  function logout(){
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('user');
    navigate("/")
  }
  return (
    <div
      style={{ display: "flex", height: "100vh" }}
    >
      <div className="hii">
        <button onClick={onClick} ><MenuBookIcon /></button>
        <Sidebar className="app">
      
          {isActive==true?<Menu>
           
            <MenuItem icon={<ContentPasteSearchIcon />}><Link to="/raiseIssue">Raise Issue</Link></MenuItem>
            <MenuItem icon={<RequestPageIcon />}><Link to="/searchBook">Search Book</Link></MenuItem>
            <MenuItem icon={<LogoutIcon />}><div onClick={logout}>Logout</div></MenuItem>
          </Menu>:""}
        </Sidebar>
      </div>

      <main>
        <h1 style={{ color: "black", marginLeft: "5rem" }}>
          User Dashboard
        </h1>
      </main>
    </div>
  );
}

export default UserHome;