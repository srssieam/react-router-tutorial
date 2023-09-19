import { useLoaderData } from "react-router-dom";


const Users = () => {
    const users = useLoaderData();   // get fetched data
    return (
        <div>
            <h1>I am from user component</h1>
            <h1>Number of total users = {users.length}</h1>
        </div>
    );
};

export default Users;