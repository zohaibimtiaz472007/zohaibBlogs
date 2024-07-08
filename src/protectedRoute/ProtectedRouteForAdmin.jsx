import { Navigate, useNavigate } from "react-router-dom"

export const ProtectedRouteForAdmin = ({ children }) => {

  const admin = JSON.parse(localStorage.getItem('admin'))
  if (admin?.user?.email === "zohaibimtiaz2007@gmail.com") {
    return children
  }
  else {
    return <Navigate to={'/adminlogin'}/>
  }
}