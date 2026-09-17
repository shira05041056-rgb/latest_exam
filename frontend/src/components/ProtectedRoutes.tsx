import { Navigate } from "react-router";


type ProtectedRoutesProps = {
    children: React.ReactNode
}

export default function ProtectedRoutes({children} : ProtectedRoutesProps) {
    const token = localStorage.getItem("token-user")
    if (!token) return <Navigate to={"/login"}/>
  return (
    <>{children}</>
  )
}
