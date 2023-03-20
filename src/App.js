function App(){
    const title ="Title";
    const body ="Body text"
    let comments = [
        {
            id: 1,
            text: "Comment one"
        },
        {
            id: 2,
            text: "Comment one"
        },
        {
            id: 3,
            text: "Comment one"
        }
    ]
    return (
        
        <div className="container">
            <h1>{title}</h1>
            <p>{body}</p>

            <div className="comments">
                <h3>Comments ({})</h3>
                <ul>
                    {comments.map((comment,index) =>(
                        <li key={index}>{comment.text}</li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default App;