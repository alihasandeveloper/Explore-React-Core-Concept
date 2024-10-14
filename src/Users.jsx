import React from 'react';
import {useState, useEffect} from 'react';

const Users = () => {
    const  [users, setUsers] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => setUsers(data))
    },[])
    // console.log(user)
    return (
        <div>
            <h1>Users{users.length}</h1>
        </div>
    );
};

export default Users;