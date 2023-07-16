/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function (n) {
    const matrix = new Array(n).fill(0).map(() => new Array(n).fill(0));

    let top = 0;
    let bottom = n - 1;
    let left = 0;
    let right = n - 1;
    let num = 1;

    while (num <= n * n) {
        // Fill the top row from left to right
        for (let i = left; i <= right; i++) {
            matrix[top][i] = num;
            num++;
        }
        top++;

        // Fill the rightmost column from top to bottom
        for (let i = top; i <= bottom; i++) {
            matrix[i][right] = num;
            num++;
        }
        right--;

        // Fill the bottom row from right to left
        for (let i = right; i >= left; i--) {
            matrix[bottom][i] = num;
            num++;
        }
        bottom--;

        // Fill the leftmost column from bottom to top
        for (let i = bottom; i >= top; i--) {
            matrix[i][left] = num;
            num++;
        }
        left++;
    }

    return matrix;
};
