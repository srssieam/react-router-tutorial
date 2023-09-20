import { Outlet, useLocation, useNavigation } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import LoadingPage from "../LoadingPage/LoadingPage";


const Home = () => {
    const navigaiton = useNavigation();
    const location = useLocation();
    console.log(location);
    return (
        <div>
            <Header></Header>
            {
                navigaiton.state === "loading" ?
                <LoadingPage></LoadingPage> : <Outlet></Outlet>
            }
            <Footer></Footer>
        </div>
    );
};

export default Home;