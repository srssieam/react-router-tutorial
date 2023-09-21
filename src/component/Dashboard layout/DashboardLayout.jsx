import { Outlet } from "react-router-dom";

import { Link } from "react-router-dom";
const DashboardLayout = () => {
    const btnStyle = {
        padding:'10px 30px',
        backgroundColor:'lightgreen',
        width: '100%'
    }
    return (
        <div style={{display:'flex'}}>
            <div style={{width: '20%', borderRight: '2px solid purple', height:'70vh', display:"flex", flexDirection:'column', gap:'20px'}}>
            <Link to="/dashboard"><button style={btnStyle}>Dashboard</button></Link>
            <Link to="/dashboard/profile"><button style={btnStyle}>Profile</button></Link>
            <Link to="/dashboard/editprofile"><button style={btnStyle}>Edit Profile</button></Link>
            </div>
            <Outlet></Outlet>
        </div>
    );
};

export default DashboardLayout;