class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    validRow(row: number, board: string[][]): boolean {
        const map = new Map<string, boolean>();
        for (let i = 0; i < 9; i++) {
            if (board[row][i] === ".") continue;
            if (map.has(board[row][i])) return false;

            map.set(board[row][i], true);
        }

        return true;
    }


    validColumn(column: number, board: string[][]): boolean {
        const map = new Map<string, boolean>();
        for (let row = 0; row < 9; row++) {
            const value = board[row][column];

            if (value === '.') continue;

            if (map.has(value)) return false;

            map.set(value, true);
        }

        return true;
    }

    validBox(startCol: number, startRow: number, board: string[][]): boolean {
        const set = new Set<string>();

        for (let row = startRow; row < startRow + 3; row++) {
            for (let col = startCol; col < startCol + 3; col++) {
                const value = board[row][col];

                if (value === '.') continue;

                if (set.has(value)) return false;

                set.add(value);
            }
        }

        return true;
    }

    isValidSudoku(board: string[][]): boolean {
        for(let i = 0 ; i<9 ; i++) {
            if(!this.validRow(i , board)) return false;
            if(!this.validColumn(i , board)) return false;
        }

        for(let row = 0 ; row < 9 ; row+=3) {
            for(let col = 0 ; col < 9 ; col+=3) {
                if(!this.validBox(col, row, board)) return false;
            }
        }

        return true;
    }
}
