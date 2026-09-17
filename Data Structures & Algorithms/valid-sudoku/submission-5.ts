class Solution {
    checkRows(board: string[][]): boolean {
        for (let i = 0; i < board.length; i++) {
            const set = new Set<string>();

            for (let j = 0; j < board[i].length; j++) {
                if (board[i][j] === ".") continue;

                if (set.has(board[i][j])) return false;

                set.add(board[i][j]);
            }
        }

        return true;
    }

    checkCols(board: string[][]): boolean {
        for (let j = 0; j < board.length; j++) {
            const set = new Set<string>();

            for (let i = 0; i < board.length; i++) {
                if (board[i][j] === ".") continue;

                if (set.has(board[i][j])) return false;

                set.add(board[i][j]);
            }
        }

        return true;
    }

    checkBoxs(board: string[][]): boolean {
        for (let row = 0; row < 9; row += 3) {
            for (let col = 0; col < 9; col += 3) {
                const set = new Set<string>();

                for (let i = row; i < row + 3; i++) {
                    for (let j = col; j < col + 3; j++) {
                        if (board[i][j] === ".") continue;

                        if (set.has(board[i][j])) return false;

                        set.add(board[i][j]);
                    }
                }
            }
        }

        return true;
    }

    isValidSudoku(board: string[][]): boolean {
        return (
            this.checkRows(board) &&
            this.checkCols(board) &&
            this.checkBoxs(board)
        );
    }
}