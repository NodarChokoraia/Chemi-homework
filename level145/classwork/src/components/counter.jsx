import { useState } from "react"

export default function Counter() {
    let [count,setCount] = useState(0)

    let plus = () => {
        setCount(count+1)
    }
    let minus = () => {
        setCount(count-1)
    }

    return (
        <>
            <button onClick={plus}>+</button>
            <p>{count}</p>
            <button onClick={minus}>-</button>
        </>
    )

}