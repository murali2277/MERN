import { useState, useEffect, use } from "react";

function UserList(){
    const  [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => {
            if (!response.ok){
                throw new Error("Faild to fetch user");
            }
            return response.json();
        })
        .then((data) => {
            setUsers(data);
            setLoading(false);
        })
        .catch((err) => {
            setError(err.message    );
            setLoading(false);
        })
    }, []);

    if (loading){
        return <h3>Loading Users...</h3>
    }
    if (error){
        return <h3>Error: {error}</h3>
    }
    return (
        <div>
            <h2>Users List</h2>
            <ul>
                {users.map((user) => (
                    <li key={user.id}>
                        <strong>{user.name}</strong> - {user.email}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default UserList;