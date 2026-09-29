// at the start of each row, tells users the number and color of yarn
export default function RowCell ({
    color,
    rowNum,
}) {
    return (
        <>
            <div
                className="patternCell"
                style={{
                    backgroundColor: `color-mix(in srgb, ${color} 50%, transparent)`,
                    color: "var(--rowNums)",
                }}
            >
                {rowNum}
            </div>
        </>
    )
}