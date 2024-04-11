import { useRef, useState } from 'react';

export default function Counter() {
    let ref = useRef(0);
    const [state, setState] = useState(0)

    function handleClick() {
        ref.current = ref.current + 1;
        // alert('You clicked ' + ref.current + ' times!');
        console.log("ref.current", ref.current)
        // setState(state + 1)
    }

    function handleClick2() {
        setState(state + 1)
    }

    console.log("Render")

    return (
        <>
            <button onClick={handleClick}>
                Click me! con ref
            </button><br />
            <button onClick={handleClick2}>
                Render! con state
            </button>
            <p>ref.current: {ref.current}</p>
            {/*<p>state: {state}</p> */}
        </>
    );
}