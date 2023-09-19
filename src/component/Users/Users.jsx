import { useLoaderData } from "react-router-dom";
import User from "../User/User";
import './Users.css'


const Users = () => {
    const users = useLoaderData();   // get fetched data
    return (
        <div>
            <h1>I am from user component</h1>
            <h1>Number of total users = {users.length}</h1>
            <div className="user-container">
            {
                users.map(user=><User key={user.id} user={user}></User>)
            }
            </div>
        </div>
    );
};

export default Users;