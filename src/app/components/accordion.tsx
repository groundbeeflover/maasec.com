import {useState} from "react";

type AccordionProps = {
    Header: string,
    Main: string,
}

export const Accordion = (props: AccordionProps) => {
    const[showMain, setShowMain] = useState(false)
    return (
        <div className="py-4 px-3 my-6 max-w-2xl
        mx-auto border rounded-lg
        flex flex-col gap-6">
            <button
                className = "flex flex-row items-center justify-between gap-4"
                onClick={() => setShowMain(!showMain)}
            >
                <span className="text-2xl text-black">{props.Header}</span>
                <span className="text-gray-500 text-2xl">
                    {showMain ? "↑":"↓"}
                </span>
            </button>
            {showMain && <p className="border-t py-4 text-lg text-black">{props.Main}</p>}
        </div>
    )
}

//export default Accordion