import PatternCell from "./PatternCell.jsx";

export default function RenderedPattern({ pattern }) {
    return (
        <>
            <div> HI </div>
            <div 
                className="patternGrid"
                style={{
                    gridTemplateColumns: `repeat(${pattern.cols}, 40px)`,
                    gridAutoRows: '40px'
                }}
            >
                {pattern.grid.map((row, rowIndex) => 
                    row.map((color, colIndex) => (
                        <>
                            <PatternCell
                                key={`${rowIndex}-${colIndex}`}
                                row={rowIndex}
                                col={colIndex}
                                color={pattern.colors[color]}
                                borderColor={pattern.borderColor}
                            />
                        </>
                    ))
                )}
            </div>
        </>
    )
}