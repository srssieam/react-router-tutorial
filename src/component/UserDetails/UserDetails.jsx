import { useLoaderData, useNavigate } from "react-router-dom";


const UserDetails = () => {
    const userDetail= useLoaderData();
    const {name, email, phone, website} = userDetail;
    const detailStyle={
        textAlign: 'center',
        padding: '10px',
        backgroundColor: 'aqua',
        marginTop: '200px'
    }
    const navigate = useNavigate();
    const handleBackBtn =()=>{
        navigate(-1);
    }
    return (
        <div style={detailStyle}>
            <h1>name: {name}</h1>
            <p>email address: {email}</p>
            <p>mobile: {phone}</p>
            <p>website: {website}</p>
            <button onClick={handleBackBtn}>Go back</button>
        </div>
    );
};

export default UserDetails;