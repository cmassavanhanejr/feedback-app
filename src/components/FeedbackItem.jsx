
function FeedbackItem({item}){
    /*const [rating, setRating] = useState(7)
    const [text, setText] = useState('This is an example of feedback item')

    //just use to understand the prev attribute from state;
    const handleClick = () => {
        setRating ((prev) => {
            console.log (prev);
            return prev + 0.5
        })
    }*/

    return(
        <div className="card">
            <div className="num-display">{item.rating}</div>
            <div className="text-display">{item.text}</div>
            {/*<button onClick={handleClick}>Click</button>*/ }
        </div>
    )
}

export default FeedbackItem