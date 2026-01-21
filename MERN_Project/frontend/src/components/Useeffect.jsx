import { useState, useEffect } from "react";

function Example(){
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log("Component rendered or re-rendered!");
    });
    return (
        <div>
            <p>Count:{count}</p>
            <button onClick={() => setCount(count+1)}>Increase</button>
        </div>
    );
}

export default Example;