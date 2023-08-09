
const DisplayAnecdote = ({quote, votes}) => {
    //displays different messages if has 1 or 0 votes
    if (votes === 0){
        return (
            <div>
                <p>{quote}</p>
                <p>this quote has no votes</p>
            </div>
        )
    }
    //gets rid of plutal 'votes'
    else if (votes === 1){
        return (
            <div>
                <p>{quote}</p>
                <p>this quote has 1 vote</p>
            </div>
        )
    }

    return (
        <div>
            <p>{quote}</p>
            <p>this quote has {votes} votes</p>
        </div>
    )
}

export default DisplayAnecdote
