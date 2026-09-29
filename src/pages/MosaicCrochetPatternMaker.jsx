import { useState } from "react";

import RenderedPattern from "../components/RenderedPattern"
import { pattern } from "../data/pattern"

import { applyDc } from "../utils/patternUtils"

export default function MosaicCrochetPatternMaker() {
    const [currentPattern, setCurrentPattern] = useState(pattern);
    const [mode, setMode] = useState("view");

    function handleStitchClick(row, col) {
        console.log("clicked:", row, col);
        setCurrentPattern(previousPattern => {
            const newGrid = structuredClone(previousPattern.grid);

            applyDc(previousPattern.rowColors, newGrid, row, col);

            return {
                ...previousPattern,
                grid: newGrid,
            }
        })
    }

    return (
        <>
            <RenderedPattern 
                pattern={currentPattern}
                onStitchClick={handleStitchClick}
            />
        </>
    )
}