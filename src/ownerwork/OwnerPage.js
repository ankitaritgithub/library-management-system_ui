import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import PersonRemoveIcon from '@mui/icons-material/PersonRemove';
import SchoolIcon from '@mui/icons-material/School';
import LogoutIcon from '@mui/icons-material/Logout';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import "./Ownerpage.css";
import React, { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function OwnerPage() {
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
           
            <MenuItem icon={<PersonAddIcon />}><Link to="/addadmin">Addadmin</Link></MenuItem>
            <MenuItem icon={<PersonRemoveIcon />}><Link to="/removeAdmin">RemoveAdmin</Link></MenuItem>
            <MenuItem icon={<SchoolIcon />}><Link to="/createLibrary">Create Library</Link></MenuItem>
            <MenuItem icon={<LogoutIcon />}><div onClick={logout}>Logout</div></MenuItem>
          </Menu>:""}
        </Sidebar>
      </div>

      <main>
        <h1 style={{ color: "black", marginLeft: "5rem" }}>
          Owner Dashboard
        </h1>
      </main>
    </div>
  );
}

export default OwnerPage;