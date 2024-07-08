import React from 'react'
import {
  HashRouter,
  Route,
  Routes,
} from "react-router-dom";
import { Navigate } from "react-router-dom"
import Home from './pages/home/Home'
import Blog from './pages/blog/Blog'
import AllBlogs from './pages/allBlog/AllBlog'
import BlogInfo from './pages/blogInfo/BlogInfo'
import AdminLogin from './pages/admin/adminLogin/AdminLogin'
import Dashboard from './pages/admin/dashboard/Dashboard'
import NoPage from './pages/nopage/NoPage'
import MyState from './context/myState'
import CreateBlog from './pages/admin/createBlog/CreateBlog';
import { Toaster } from 'react-hot-toast';
import { ProtectedRouteForAdmin } from './protectedRoute/ProtectedRouteForAdmin';



const App = () => {
  return (
    <div>
      <MyState>
      <HashRouter>
        <Routes>
          <Route path='/' element = {<Home/>}/>
          <Route path='/blog' element = {<Blog/>}/>
          <Route path="/allblogs" element={<AllBlogs />} />
          <Route path="/bloginfo/:id" element={<BlogInfo />} />
          <Route path="/adminlogin" element={<AdminLogin />} />
          <Route path="/dashboard" element={
            <ProtectedRouteForAdmin>
              <Dashboard />
            </ProtectedRouteForAdmin>
            } />
          <Route path="/*" element={<NoPage />} />
          <Route path='/createblog' element = {
            <ProtectedRouteForAdmin>
            <CreateBlog/>
            </ProtectedRouteForAdmin>
            }/>
        </Routes>
        <Toaster/>
      </HashRouter>
      </MyState>
    </div>
  )
}

export default App




