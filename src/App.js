import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React from "react";
import Home from "./Home";
import Dashboard from "./Dashboard";
import AdminHome from "./AdminHome";
import Addbook from "./Adminwork/Addbook";
import Addadmin from "./ownerwork/Addadmin";
import OwnerPage from "./ownerwork/OwnerPage";
import Getallbook from "./Adminwork/Getallbook";
import Getallbookbyid from "./Adminwork/Getallbookbyid";
import UpdateBook from "./Adminwork/UpdateBook";
import DeleteBook from "./Adminwork/DeleteBook";
import RaiseIssue from "./userwork/RaiseIssue";
import UserHome from "./userwork/UserHome";
import RaiseIssueList from "./Adminwork/RaiseIssueList";
import Status from "./Adminwork/Approve";
import CreateLibrary from "./ownerwork/CreateLibrary";
import RemoveAdmin from "./ownerwork/RemoveAdmin";
import SearchBook from "./userwork/SearchBook";
import Approve from "./Adminwork/Reject";
import Reject from "./Adminwork/Reject";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route index element={<Dashboard />} />
          <Route path="home" element={<Home />} />
          <Route path="adminHome" element={<AdminHome />} />
          <Route path="addbook" element={<Addbook />} />
          <Route path="addadmin" element={<Addadmin />} />
          <Route path="ownerPage" element={<OwnerPage />} />
          <Route path="getallbook" element={<Getallbook />} />
          <Route path="getallbookbyid" element={<Getallbookbyid />} />
          <Route path="updateBook" element={<UpdateBook />} />
          <Route path="deleteBook" element={<DeleteBook />} />
          <Route path="raiseIssue" element={<RaiseIssue />} />
          <Route path="userHome" element={<UserHome />} />
          <Route path="raiseIssueList" element={<RaiseIssueList />} />
          <Route path="status" element={<Status />} />
          <Route path="createLibrary" element={<CreateLibrary />} />
          <Route path="removeAdmin" element={<RemoveAdmin />} />
          <Route path="searchBook" element={<SearchBook />} />
          <Route path="status" element={<Status />} />
          <Route path="approve" element={<Approve />} />
          <Route path="reject" element={<Reject />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
