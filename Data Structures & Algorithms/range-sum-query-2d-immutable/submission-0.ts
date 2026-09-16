class NumMatrix {
    private prefix: number[][];

    /**
     * @param {number[][]} matrix
     */
    constructor(matrix: number[][]) {
        const rows = matrix.length;
        const cols = matrix[0]?.length ?? 0;

        this.prefix = Array.from(
            { length: rows },
            () => Array(cols).fill(0)
        );

        for (let i = 0; i < rows; i++) {
            for (let j = 0; j < cols; j++) {
                this.prefix[i][j] = matrix[i][j];

                if (i > 0) {
                    this.prefix[i][j] += this.prefix[i - 1][j];
                }

                if (j > 0) {
                    this.prefix[i][j] += this.prefix[i][j - 1];
                }

                if (i > 0 && j > 0) {
                    this.prefix[i][j] -= this.prefix[i - 1][j - 1];
                }
            }
        }
    }

    /**
     * @param {number} row1
     * @param {number} col1
     * @param {number} row2
     * @param {number} col2
     * @return {number}
     */
    sumRegion(
        row1: number,
        col1: number,
        row2: number,
        col2: number
    ): number {
        let sum = this.prefix[row2][col2];
        if (row1 > 0) {
            sum -= this.prefix[row1 - 1][col2];
        }

        if (col1 > 0) {
            sum -= this.prefix[row2][col1 - 1];
        }

        if (row1 > 0 && col1 > 0) {
            sum += this.prefix[row1 - 1][col1 - 1];
        }

        return sum;
    }
}