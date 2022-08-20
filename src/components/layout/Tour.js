import { Outlet } from "react-router-dom";
function Tour(){
    return (
      <>
      <h2 className="text-center font-bold text-primary text-3xl mb-2">旅遊頁面</h2>
        <Outlet />
      </>
    )
}
export default Tour;