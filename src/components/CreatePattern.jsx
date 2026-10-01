import { useState } from "react";

export default function CreatePattern ({ 
    onCreate, 
    onImport,
}) {
    const [rows, setRows] = useState(20);
    const [cols, setCols] = useState(20);
    
    return (
            <h1>
                Import an Overlay Mosaic Crochet Pattern
            </h1>

            <label>
                Import an Overlay Mosaic Crochet Pattern
                <input 
                    type="file"
                    accept=".json"
                    onChange={onImport}
                />
            </label>

            <h1>
                Create a New Overlay Mosaic Crochet Pattern
            </h1>

            <label>
                Number of rows:
                <input
                    type="number"
                    min="1"
                    value={rows}
                    onChange={(e) => setRows(Number(e.target.value))}
                />
            </label>
            <label>
                Number of columns:
                <input
                    type="number"
                    min="1"
                    value={cols}
                    onChange={(e) => setCols(Number(e.target.value))}
                />
            </label>

            <button onClick={() => onCreate(rows, cols)}>
                Create Pattern
            </button>
        </>
    )
}