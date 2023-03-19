import { useContext } from "react";
import { InputContext } from "../App";

const Input = () => {
    const { string, setString } = useContext(InputContext);

    const inputHendler = () => {
        const input = document.querySelector('input');
        return input.value;
    }

    // const result = inputHendler();

    return (
        <form className="input" >
            <h3>Input</h3>
            <input type="text" placeholder="Write a text" />

            <button onClick={(e) => {
                e.preventDefault();
                let result = inputHendler();
                setString(result);
            }}>Submit</button>

            <h2>Input text: {string}</h2>
        </form>

    )
}

export default Input;