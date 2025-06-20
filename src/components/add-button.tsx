import { MdAdd } from "react-icons/md";

type AddButtonProps = {
    onClick: () => void;
    big?: boolean;
};

export function AddButton({ big, onClick }: AddButtonProps) {
    return (
        <div className={big ? undefined : "add-btn"}>
            <button
                style={{
                    display: "flex",
                    position: "relative",
                    justifyContent: big ? "space-around" : "center",
                    gap: big ? "8px" : undefined,
                    alignItems: "center",
                    boxShadow: "0px 0px 2px grey",
                    borderRadius: "6px",
                    color: "black",
                    height: big ? "30px" : "17px",
                    minWidth: "14px",
                    padding: big ? "8px" : undefined,
                    textAlign: "center",
                    zIndex: 2,
                }}
                onClick={onClick}
            >
                <MdAdd />
                {big ? <p>Add Page</p> : null}
            </button>
        </div>
    );
}
