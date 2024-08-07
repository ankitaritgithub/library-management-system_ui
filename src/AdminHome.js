import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import BookmarkAddedIcon from "@mui/icons-material/BookmarkAdded";
import BookmarkRemoveIcon from "@mui/icons-material/BookmarkRemove";
import BookOnlineIcon from "@mui/icons-material/BookOnline";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import BookmarksIcon from "@mui/icons-material/Bookmarks";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import LibraryAddCheckIcon from "@mui/icons-material/LibraryAddCheck";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import LogoutIcon from '@mui/icons-material/Logout';
import "./AdminHome.css";
import React, { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";




function AdminHome() {
  const dropdownRef = useRef(null);
  const [isActive, setIsActive] = useState(false);
  const onClick = () => setIsActive(!isActive);
  const  navigate = useNavigate()
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
        <button onClick={onClick} ><MenuRoundedIcon /></button>
        <Sidebar className="app">
      
          {isActive===true?<Menu>
           
            <MenuItem icon={<BookmarkAddedIcon />}><Link to="/addbook">Addbook</Link></MenuItem>
            <MenuItem icon={<BookmarkRemoveIcon />}><Link to="/deleteBook">Delete book</Link></MenuItem>
            <MenuItem icon={<BookOnlineIcon />}><Link to="/getallbookbyid">Get book by id</Link></MenuItem>
            <MenuItem icon={<LibraryAddCheckIcon />}><Link to="/getallbook">Get All book</Link> </MenuItem>
            <MenuItem icon={<LibraryBooksIcon />}><Link to="/updateBook">Update book</Link></MenuItem>
            <MenuItem icon={<BookmarksIcon />}><Link to="/raiseIssueList">List all book</Link></MenuItem>
            <MenuItem icon={<ThumbUpIcon />}><Link to="/status">Approve</Link></MenuItem>
            <MenuItem icon={<ThumbDownIcon />}><Link to="/reject">Reject book</Link></MenuItem>
            <MenuItem icon={<LogoutIcon />}><div onClick={logout}>Logout</div></MenuItem>

           </Menu>:""}
        </Sidebar>
      </div>

      <main>
        <h1 style={{ color: "Black", marginLeft: "5rem" }}>
          Admin Dashboard
        </h1>
      </main>
    </div>
  );
}

export default AdminHome;
