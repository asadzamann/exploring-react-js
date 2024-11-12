import { useState } from "react";
export default function Team(){
    const [count, setCount] = useState(12);
    const handleAdd = () => {
        const newCount = count + 1;
        setCount(newCount);
    }
    const handleRemove = () => {
        const newCount = count - 1;
        setCount(newCount);
    }
    const teamStyle = {
        border: '2px Solid Red',
        margin: '15px',
        padding: '15px',
        borderRadius: '10px'
    }
    return(
        <div style={{
            border: '2px Solid Red',
            margin: '15px',
            padding: '15px',
            borderRadius: '10px'
        }}>
            <h3>Count Player: {count}</h3>
            <button onClick={handleAdd}>Add Player</button>
            <button onClick={handleRemove}>Remove Player</button>
        </div>
    )
}