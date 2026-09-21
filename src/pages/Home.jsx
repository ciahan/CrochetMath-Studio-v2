import RenderedPattern from "../components/RenderedPattern.jsx";
import { pattern } from "../data/pattern.js";

export default function Home() {
    return (
        <>
            <RenderedPattern pattern={pattern}/>
        </>
    )
}