import React from "react";
import ReactDOM from "react-dom/client";
function Main(){
    return (
        <main>
            <h1>Hello World</h1>
        </main>
    );
}

const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<Main/>);