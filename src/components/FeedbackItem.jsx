import { useState } from "react";

function FeedbackItem(){
    const [rating, setRating] = useState(7)
    const [text, setText] = useState('This is an example of feedback item')

    //just use to understand the prev attribute from state;
    /*const handleClick = () => {
        setRating ((prev) => {
            console.log (prev);
            return prev + 0.5
        })
    }*/

    return(
        <div className="card">
            <div className="num-display">{rating}</div>
            <div className="text-display">{text}</div>
            <button onClick={handleClick}>Click</button>
        </div>
    )
}

export default FeedbackItem