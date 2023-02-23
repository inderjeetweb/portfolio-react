import Profile from './CV/Profile';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
// import {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import Home from './Dashboard/Dashboard';
import { Home as DashboardHome} from "./Dashboard/Home";
import { PostAdd } from './Dashboard/Post/PostAdd';
import { PostList } from './Dashboard/Post/PostList';
import { Notfound } from './Notfound';
import { BrowserRouter as Router, Route, Routes,Outlet } from 'react-router-dom' ;




function App() {
  return (
    <div className="App">
      <Router>
          <Routes>
                <Route exact path="/" element={<Profile />} />
                <Route path="/dashboard" element={<Home />}>
                    <Route exact path="/dashboard/home" element={<DashboardHome />} />
                    <Route exact path="/dashboard/post" element={<PostAdd />} />
                    <Route exact path="/dashboard/post-list" element={<PostList />} />
                </Route>
                <Route path="*" element={<Notfound />} />  
          </Routes>
      </Router>

    </div>
  );
}


export default App;
