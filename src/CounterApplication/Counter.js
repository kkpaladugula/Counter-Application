import React, {useState} from "react";
import "../CounterApplication/Counter.css";


const Counter = () => {

const [count,setCount] = useState(0);

        const Increase = () => {  
            setCount(prev => prev + 1)
        }
        const Reset = () => { 
            setCount(0)
        }
        const Decrease = () => {  
            setCount(prev => prev - 1)
        }

    return(
        < >
        <div className="counter">
            <div className="counter-box">
           <h1> Simple Counter</h1>
        <h2>{count}</h2>
        <div >
        <button onClick={Increase}>+</button>
        <button onClick={Reset}>Reset</button>
        <button onClick={Decrease}>-</button>
        </div>

            </div>
        </div>
        </>
    )
}
export default Counter;
