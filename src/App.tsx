import React, {useEffect} from 'react';
import './App.css';


const borderStyle = {border: '1px solid black'}

function App() {
    const [turn, setTurn] = React.useState(0);
    const [ticTacToe, setTicTacToe] = React.useState([9, 9, 9, 9, 9, 9, 9, 9, 9]);
    const [gameEnded, setGameEnded] = React.useState(false);

    useEffect(() => {
        let tttString = ticTacToe.join("")
        if (
            tttString.startsWith("111") || tttString.startsWith("000") ||
            tttString.endsWith("111") || tttString.endsWith("000") ||
            tttString.includes("111", 3) || tttString.includes("000", 3)
        ) {
            setGameEnded(true)
        }
    }, [JSON.stringify(ticTacToe)])

    return (
        <div className="App">
            <table style={{
                border: '1px solid black',
                borderSpacing: 0,
                width: '100%',
                height: 200
            }}>
                <tbody>
                <tr>
                    <Row rowIdx={0} turn={turn} setTurn={setTurn} ticTacToe={ticTacToe}
                         setTicTacToe={setTicTacToe}></Row>
                    <Row rowIdx={1} turn={turn} setTurn={setTurn} ticTacToe={ticTacToe}
                         setTicTacToe={setTicTacToe}></Row>
                    <Row rowIdx={2} turn={turn} setTurn={setTurn} ticTacToe={ticTacToe}
                         setTicTacToe={setTicTacToe}></Row>
                </tr>
                <tr>
                    <Row rowIdx={3} turn={turn} setTurn={setTurn} ticTacToe={ticTacToe}
                         setTicTacToe={setTicTacToe}></Row>
                    <Row rowIdx={4} turn={turn} setTurn={setTurn} ticTacToe={ticTacToe}
                         setTicTacToe={setTicTacToe}></Row>
                    <Row rowIdx={5} turn={turn} setTurn={setTurn} ticTacToe={ticTacToe}
                         setTicTacToe={setTicTacToe}></Row>
                </tr>
                <tr>
                    <Row rowIdx={6} turn={turn} setTurn={setTurn} ticTacToe={ticTacToe}
                         setTicTacToe={setTicTacToe}></Row>
                    <Row rowIdx={7} turn={turn} setTurn={setTurn} ticTacToe={ticTacToe}
                         setTicTacToe={setTicTacToe}></Row>
                    <Row rowIdx={8} turn={turn} setTurn={setTurn} ticTacToe={ticTacToe}
                         setTicTacToe={setTicTacToe}></Row>
                </tr>
                </tbody>
            </table>

            RESULT:
            <div>{ticTacToe}</div>
            <br/>
            Game ended?:
            <div>{String(gameEnded)}</div>
        </div>
    );
}

function Row(props: {
    rowIdx: number, turn: number,
    setTurn: Function,
    ticTacToe: number[],
    setTicTacToe: Function,
}) {

    const [colour, setColour] = React.useState('white');

    return (
        <td
            onClick={() => {
                let localCol = props.turn === 0 ? 'red' : 'blue'
                if (colour === 'white') {
                    setColour(localCol)
                    props.setTurn(props.turn === 0 ? 1 : 0)
                    let newTic = props.ticTacToe
                    newTic[props.rowIdx] = props.turn
                    props.setTicTacToe(newTic)
                }
            }}
            key={props.rowIdx}
            style={{...borderStyle, 'backgroundColor': colour}}
        >{props.ticTacToe[props.rowIdx]}</td>
    )
}

export default App;
