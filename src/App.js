import { React, useState } from "react";

function App(props) {
    const [val, setVal] = useState(0);
    return (
        <div>
            test {val}
            <button
                onClick={() => setVal((val) => (val+1))}
            >
                change count
            </button>
        </div>
    )
}

export default App;