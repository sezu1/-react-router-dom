import React, {useState} from 'react';
import {Navigate} from "react-router-dom";

export function MainPage() {

    const [count, setCount] = useState(0);

    function addNum(){
       setCount(count + 1);
    }

    function minusNum(){
        setCount(count - 1);
    }

    if(count === 10){
        return <Navigate to={'/login'}/>
    }

    return (
        <div>
            <h2>Main page</h2>
            <button onClick={addNum}>+</button>
            {count}
            <button onClick={minusNum}>-</button>
        </div>
    );
}
