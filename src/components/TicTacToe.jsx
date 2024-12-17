import React, { useState } from 'react'

function TicTacToe({ size = 3 }) {
    const [board, setBoard] = useState(Array.from({ length: size }, () => {
       return Array(size).fill(null)
    }))

    const [xTurn,setXturn] = useState(true)

    const handleClick = (rowIndex,colIndex) => {
        if(board[rowIndex][colIndex] !== null) return
        const newBoard = JSON.parse(JSON.stringify(board))
        newBoard[rowIndex][colIndex] = xTurn ? 'X' : 'O'
        setBoard(newBoard)
        setXturn(!xTurn)
    }

    return (
        <div className='grid gap-2' style={{ gridTemplateColumns: `repeat(${size}, 1fr)` }}>
            {board.map((row, rowIndex) =>
                row.map((col, colIndex) => (
                    <div key={`${rowIndex, colIndex}`} className='w-[50px] h-[50px] flex justify-center items-center border-2' onClick={() => handleClick(rowIndex,colIndex)}>{col}</div>
                ))
            )}
        </div>
    )
}

export default TicTacToe