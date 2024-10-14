import React from 'react';

const Friend = ({friend}) => {
    // console.log(friend);
    const  {name, email} = friend;
    return (
        <div style={{ padding: '10px', borderRadius: '10px', border: '1px solid tomato', marginBottom: '10px' }}>
            <h2>Name : {name}</h2>
            <p>Email : {email}</p>
        </div>
    );
};

export default Friend;