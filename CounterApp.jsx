function hangleClick(event, argument) {
    console.log(event)
    console.log(argument)
}

const Button = () => {
    return (
        <button onClick={(event) => hangleClick(event, 'Another argument')}>
            I'm a button
        </button>
    )
}

export const CounterApp = () => {
    return (
        <>
            <h1>Counter: </h1>
            <Button></Button>
        </>
    )
}
