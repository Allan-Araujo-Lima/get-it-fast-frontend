import { Outlet } from "react-router-dom";
import { HeaderExp } from "../components/header";

export const LayoutExp = () => {
    return (
        <div className="layout-container">
            <HeaderExp />
            <div className="content">
                <Outlet />
            </div>
        </div>
    )
}