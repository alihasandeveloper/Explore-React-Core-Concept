import React from 'react';

const Post = ({post}) => {
    // console.log(post);
    const { id, title, body, userId } = post;
    // console.log(post);
    return (
        <div style={{border: "1px solid tomato", padding: "10px" , margin: "10px", borderRadius: "10px"}}>
            <h2 >Title: {title}</h2>
            <p>Content:{body}</p>
            <p>Post ID:{id}</p>
            <p>User Id:{userId}</p>
        </div>
    );
};

export default Post;