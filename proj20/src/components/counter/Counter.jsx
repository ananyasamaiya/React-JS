function Counter({count, func}){
    return (
        <div style={{border:'3px solid #444', padding:'20px', borderRadius:'6px'}}>
                <h3>Count : {count}</h3>
                <button onClick={() => {func(count + 1)}}>Increment Count</button>
        </div>
    )
}

export default Counter;