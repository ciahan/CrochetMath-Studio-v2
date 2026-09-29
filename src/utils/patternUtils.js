export function canDc(pattern, row, col) {
    if (row >= pattern.rows - 2) { // stitches in first two rows cannot be double crochets
        return false;
    } else {
        const stitchBelow = pattern.grid[row + 1][col];
        const stitchAbove = pattern.grid[row - 1]?.[col];
        if (stitchBelow.isDc || stitchAbove?.isDc) {
            return false;
        };
        return true;
    }
};

export function applyDc(rowColors, grid, row, col) {
    const clickedStitch = grid[row][col];
    const stitchBelow = grid[row + 1][col];

    clickedStitch.isDc = !clickedStitch.isDc;
    if (clickedStitch.isDc) {
        stitchBelow.color = rowColors[row];
        console.log(row, col, "is now sc")
    } else {
        stitchBelow.color = rowColors[row + 1];
    }
}