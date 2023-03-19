import Card from './Card.jsx';
import { useContext } from "react";
import { InputContext } from "../App";

const List = () => {
    const { string } = useContext(InputContext);

    return (
        <div className='list'>
            <div>List</div>
            <h5>Input text: {string}</h5>
            <Card />
        </div>
    )
}

export default List;