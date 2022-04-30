import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));
let val = 5;
const reRender = () => {
    root.render(
        <div>
            <div>
                value {val}
            </div>
            <button onClick={
                () => {
                    val++;
                    console.log(val);
                    reRender();
                }
            }>button</button>
        </div>
    )
};

reRender();