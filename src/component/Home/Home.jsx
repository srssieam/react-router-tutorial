import { Outlet } from "react-router-dom";
import Header from "../Header/Header";


const Home = () => {
    return (
        <div>
            <Header></Header>
            <h1>Hello i am form home</h1>
            <Outlet></Outlet>
        </div>
    );
};

export default Home;