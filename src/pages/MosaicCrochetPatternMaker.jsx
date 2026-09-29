import { useState } from "react";

import RenderedPattern from "../components/RenderedPattern"
import { pattern } from "../data/pattern"

export default function MosaicCrochetPatternMaker() {
    const [currentPattern, setCurrentPattern] = useState(pattern);

    return (
        <>
            <label>
                Rows
                <input 
                    type="number"
                    min="1"
                    value={currentPattern.rows}
                    onChange={(e) => {
                        setCurrentPattern({
                            ...currentPattern,
                            rows: Number(e.target.value)
                        })
                    }}
                />
            </label>
            <label>
                Columns
                <input 
                    type="number"
                    min="1"
                    value={currentPattern.cols}
                    onChange={(e) => {
                        setCurrentPattern({
                            ...currentPattern,
                            rows: Number(e.target.value)
                        })
                    }}
                />
            </label>

            <RenderedPattern pattern={currentPattern}/>
        </>
    )
}