import {
    MdContentCopy,
    MdContentPaste,
    MdDeleteOutline,
    MdDriveFileRenameOutline,
    MdFlag,
} from "react-icons/md";

type ContextMenuProps = {
    pos: [number, number];
};
export function ContextMenu({ pos }: ContextMenuProps) {
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                width: "250px",
                boxShadow: "0px 0px 2px grey",
                border: "0.5px solid #E1E1E1",
                borderRadius: "12px",
                position: "absolute",
                left: pos[0],
                top: pos[1],
                zIndex: 3,
                background: "#FFFFFF",
                overflow: "hidden",
            }}
        >
            <div
                style={{
                    width: "100%",
                    borderBottom: "1px solid #E1E1E1",
                    background: "#FAFBFC",
                }}
            >
                <h2 style={{ margin: "4px" }}>Settings</h2>
            </div>
            <button className="context-btn">
                <MdFlag color="#2F72E2" fontSize="large" /> Set as first page
            </button>
            <button className="context-btn">
                <MdDriveFileRenameOutline color="#9DA4B2" fontSize="large" />
                Rename
            </button>
            <button className="context-btn">
                <MdContentPaste color="#9DA4B2" fontSize="large" />
                Copy
            </button>
            <button className="context-btn">
                <MdContentCopy
                    color="#9DA4B2"
                    fontSize="large"
                    style={{ rotate: "90deg" }}
                />
                Duplicate
            </button>
            <div
                style={{
                    width: "80%",
                    borderTop: "0.5px solid #E1E1E1",
                    padding: "4px",
                    alignSelf: "center",
                }}
            ></div>
            <button className="context-btn" style={{ color: "#EF494F" }}>
                <MdDeleteOutline fontSize="large" />
                Delete
            </button>
        </div>
    );
}
