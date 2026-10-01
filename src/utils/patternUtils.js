export function createPattern(rows, cols) {
    const rowColors = Array.from(
        { length: rows },
        (_, row) => (row + 1) % 2
    );

    const grid = Array.from({ length: rows}, (_, row) =>
        Array.from({ length: cols }, () => ({
            color: (row + 1) % 2,
            isDc: false,
        }))
    );

    return {
        id: crypto.randomUUID(),
        name: "Untitled Pattern",
        rows,
        cols,
        colors: {
            0: "#3d4e78",
            1: "#818181",
        },
        rowColors,
        grid,
    }
}

export function downloadPattern(pattern) {
    const json = JSON.stringify(pattern, null, 2);
    
    const blob = new Blob([json], {
        type: "application/json"
    });

    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = url;
    link.download = "crochet-pattern.json";
    link.click();

    URL.revokeObjectURL(url);
}

export function importPattern(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();

        reader.onload = () => {
            try {
                const pattern = JSON.parse(reader.result);
                resolve(pattern);
            } catch (error) {
                reject(error);
            }

            reader.onerror = () => {
                reject(reader.error);
            };
        }
        
        reader.readAsText(file);
    }) 
}

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