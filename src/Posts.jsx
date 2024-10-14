import React, {useEffect, useState} from 'react';
import Post from "./Post.jsx";
const Posts = () => {
    const [posts, setPosts] = useState([])
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then((res) => res.json())
        .then((data) => setPosts(data))
    }, []);
    return (
        <div>
            <h1>Posts Found {posts.length}</h1>
            {
                posts.map(post => (
                    <Post post={post} />
                ))
            }
        </div>
    );
};

export default Posts;