export const checkWinner = (board, size) => {
    //row check
    for (let i = 0; i < size; i++) {
        const symbol = board[i][0]
        if (symbol) {
            let winner = true
            for (let j = 1; j < size; j++) {
                if (symbol !== board[i][j]) {
                    winner = false
                    break
                }
            }
            if (winner) {
                console.log("hi");
                return symbol
            }
        }

    }


    for (let i = 0; i < size; i++) {
        const symbol = board[0][i]
        if (symbol) {
            let winner = true
            for (let j = 1; j < size; j++) {
                if (symbol !== board[j][i]) {
                    winner = false
                    break
                }
            }
            if (winner) {
                console.log("hi");
                return symbol
            }
        }

    }


    let symbol = [0][0]
    let winner = true
    if (symbol) {
        for (let i = 1; i < size; i++) {
            if (symbol !== board[i][i]) {
                winner = false
                break
            }

        }
        if (winner) {
            console.log("hi");
            return symbol
        }
    }

    symbol = [0][size - 1]
    winner = true
    if (symbol) {
        for (let i = 1; i < size; i++) {
            if (symbol !== board[i][size - 1 - i]) {
                winner = false
                break
            }
        }
        if (winner) {
            console.log("hi");
            return symbol
        }
    }

    return null

}