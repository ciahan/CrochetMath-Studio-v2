import { useState } from "react";

import RenderedPattern from "../components/RenderedPattern"
import CreatePattern from "../components/CreatePattern"

import { 
    createPattern,
    downloadPattern,
    importPattern,
    applyDc 
} from "../utils/patternUtils"

export default function MosaicCrochetPatternMaker() {
    const [currentPattern, setCurrentPattern] = useState(null);
    const [mode, setMode] = useState("view");

    function handleCreatePattern(rows, cols) {
        setCurrentPattern(createPattern(rows, cols))
    };

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

    function handleSavePattern() {
        downloadPattern(currentPattern);
    }

    async function handleImportPattern(event) {
        const file = event.target.files[0];
        
        if (!file) {
            return;
        }

        try {
            const importedPattern = await importPattern(file);
            setCurrentPattern(importedPattern);
        } catch (error) {
            console.error("Could not import pattern:", error);
        }
    }

    return (
        <>
            {currentPattern === null ? (
                <CreatePattern 
                    onCreate={handleCreatePattern}
                    onImport={handleImportPattern}
                />
            ) : (
                <>
                    <RenderedPattern 
                        pattern={currentPattern}
                        onStitchClick={handleStitchClick}
                    />
                    <button onClick={handleSavePattern}>
                        Save Pattern
                    </button>
                </>
            )}
        </>
    )
}