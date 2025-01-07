import { Outlet } from "react-router-dom"
export default function Dashboard() {
  return (
    <div>
        <h1>This is Dash Board</h1>
        <Outlet/>
    </div>
  )
}
