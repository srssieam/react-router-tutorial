import { useLoaderData } from "react-router-dom";


const UserDetails = () => {
    const userDetail= useLoaderData();
    const {name, email, phone, website} = userDetail;
    const detailStyle={
        textAlign: 'center',
        padding: '10px',
        backgroundColor: 'aqua',
        marginTop: '200px'
    }
    return (
        <div style={detailStyle}>
            <h1>name: {name}</h1>
            <p>email address: {email}</p>
            <p>mobile: {phone}</p>
            <p>website: {website}</p>
        </div>
    );
};

export default UserDetails;