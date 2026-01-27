import { useState } from "react";
import './Count.css'

export default function count(){
    const [count, setCount] = useState(0);
    return (
    <div className="count-container">
        <p>Count:{count}</p>
        <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
    )
}