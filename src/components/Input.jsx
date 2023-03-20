import { useContext, useState } from "react";
import { InputContext } from "../App";

const Input = () => {
    const { string, setString } = useContext(InputContext);
    const [inputValue, setInputValue] = useState('');

    return (
        <form className="input" >
            <h3>Input</h3>
            <input type="text" placeholder="Write a text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />

            <button onClick={(e) => {
                e.preventDefault();
                setString(inputValue);
            }}>Submit</button>

            <h2>Input text: {string}</h2>
        </form>

    )
}

export default Input;