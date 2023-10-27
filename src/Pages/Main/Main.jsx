import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import { Toaster } from "react-hot-toast";

const Main = () => {
    return (
        <div>   
            <Toaster />
            <div>
                <Navbar></Navbar>
            </div>
            <div className="container mx-auto font-Inter"><Outlet></Outlet></div>
        </div>
    );
};

export default Main;