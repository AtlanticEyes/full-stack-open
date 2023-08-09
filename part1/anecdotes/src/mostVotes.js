const MostVotes = (props) => {
    let mostVoted = {quote : 'there is no voted quotes', votes : 0}
    const votedArray = []
    props.anecdotes.map( (x) => { if (mostVoted.votes < x.votes) {
        mostVoted = x
        votedArray.concat(x.votes)
    }})

    if (mostVoted.votes == 0){
        return <p>you must vote on an anecdote</p>
    }

    return (
        <div>
            {mostVoted.quote}
            <br />
            is the most popular with {mostVoted.votes} votes
        </div>
    )
}

export default MostVotes