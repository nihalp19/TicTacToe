import React, { useState,useEffect } from 'react'
import { checkWinner } from '../utils/checkWinner'
function TicTacToe({ size = 3 }) {
    const [board, setBoard] = useState(Array.from({ length: size }, () => {
        return Array(size).fill(null)
    }))

    const [winner, setWinner] = useState(null)
    const [xTurn, setXturn] = useState(true)
    const result = checkWinner(board, size)
    useEffect(() => {
        if (result) {
            console.log("hi");
            setWinner(result === 'X' ? 'X is the winner' : 'O is the winner');
        }
    }, [board,size]);


    const handleClick = (rowIndex, colIndex) => {
        if (result) return
        if (board[rowIndex][colIndex] !== null) return
        const newBoard = JSON.parse(JSON.stringify(board))
        newBoard[rowIndex][colIndex] = xTurn ? 'X' : 'O'
        setBoard(newBoard)
        setXturn(!xTurn)
    }

    return (
        <div>
            <div className='grid gap-2' style={{ gridTemplateColumns: `repeat(${size}, 1fr)` }}>
                {board.map((row, rowIndex) =>
                    row.map((col, colIndex) => (
                        <div key={`${rowIndex, colIndex}`} className='w-[50px] h-[50px] flex justify-center items-center border-2' onClick={() => handleClick(rowIndex, colIndex)}>{col}</div>
                    ))
                )}
            </div>
            <p>{winner}</p>
        </div>

    )
}

export default TicTacToe