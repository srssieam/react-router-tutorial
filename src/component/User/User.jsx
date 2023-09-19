import { Link } from "react-router-dom";

const User = ({user}) => {
    const {name, id, phone, email}= user;
    const userStyle={
        border: '2px solid purple',
        padding: '10px',
        borderRadius: '10px'
    }
    return (
        <div style={userStyle}>
            <h2>{name}</h2>
            <p>Email: {email}</p>
            <p>Phone Number: {phone}</p>
            <Link to={`/user/${id}`}><button>Show details</button></Link>
        </div>
    );
};

export default User;