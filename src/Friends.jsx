import React from 'react';
import {useState, useEffect} from 'react'
import Friend from "./Friend.jsx";

const Friends = () => {
    const [friends, setFriends] = useState([])
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => setFriends(data))
    }, [])
    console.log(friends)
    return (
        <div>
            {friends.map(friend => (
                <Friend key={friend.id} friend={friend} />
            ))}
        </div>
    );
};

export default Friends;