import { Fragment } from "react";

import RowCell from "./RowCell.jsx";
import PatternCell from "./PatternCell.jsx";

import { canDc } from "../utils/patternUtils"

export default function RenderedPattern({
    pattern,
    onStitchClick,
}) {
    return (
        <>
            <div 
                className="patternGrid"
                style={{
                    gridTemplateColumns: `repeat(${pattern.cols + 1}, 40px)`,
                    gridAutoRows: '40px'
                }}
            >
                {pattern.grid.map((row, rowIndex) => (
                    <Fragment
                        key={rowIndex}
                    >
                        <RowCell 
                            color={pattern.colors[pattern.rowColors[rowIndex]]}
                            rowNum={pattern.rows - rowIndex}
                        />
                        {row.map((cell, colIndex) => (
                            <PatternCell
                                key={`${rowIndex}-${colIndex}`}
                                row={rowIndex}
                                col={colIndex}
                                color={pattern.colors[cell.color]}
                                borderColor={pattern.borderColor}
                                isDc={cell.isDc}
                                canDc={canDc(pattern, rowIndex, colIndex)}
                                onClick={onStitchClick}
                            />
                        ))}
                    </Fragment>
                ))}
            </div>
        </>
    )
}