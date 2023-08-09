const Total = (props) => {
    let addedAmount = 0
    const amountArray = []

    //doing this without amountArray and getting the final leaves 101731
    //instead creates an array of [10, 17, 31]
    addedAmount = props.text.map((x) => addedAmount += x.exercises, amountArray.push(addedAmount))
    //addedAmount is reassigned to its final number - 31
    addedAmount = addedAmount.slice(-1)

    return <p>The total amount of exercises is {addedAmount}</p>
}

export default Total