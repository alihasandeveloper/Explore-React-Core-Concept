import {useState} from "react";

const Counter = () => {
    const [count, setCount] = useState(0);
    // createLogger(abc)
    return (
        <>
            <h2>Counter: {count}</h2>
            <button onClick={
                () => setCount(count + 1)
            }>Add
            </button>
            <button onClick={
                () => setCount(count - 1)
            }>Delete
            </button>
        </>
    );
};

export default Counter;