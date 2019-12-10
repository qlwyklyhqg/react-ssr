import React, {useState} from 'react'

function App(props) {
    const [count, setCount] = useState(1)
    return (
        <div>
            <h1>hello, {props.title}</h1>
            <div>{count}</div>
            <button onClick={() => setCount(count + 1)}>add</button>
        </div>
    )
}

export default <App title="app"></App>
