import React from "react";
import ReactDOM from "react-dom/client";

const showTime = () => {
    root.render(
        <div>
            <h1>heading 1</h1>
            <h2>
                it's {new Date().toLocaleTimeString()}
            </h2>
        </div>
    );
}
const root = ReactDOM.createRoot(document.getElementById("root"));
setInterval(showTime,1000);