export default function PatternCell({ 
    row,
    col,
    color,
    borderColor,
    onClick
}) {
    return (
        <>
            <div
                className="patternCell"
                style={{
                    backgroundColor: color,
                }}
            />
        </>
    )
}