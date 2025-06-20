import { Dnd } from "./components/dnd";

function App() {
    return (
        <div
            style={{
                width: "100%",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <div>
                <Dnd />
            </div>
        </div>
    );
}

export default App;
