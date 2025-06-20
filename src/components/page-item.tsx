import { DraggableItem } from "./draggable-item";
import { MdOutlineMoreVert } from "react-icons/md";
import { type JSX } from "react";
import type { UniqueIdentifier } from "@dnd-kit/core";

type PageItemProps = {
    title: string;
    id: UniqueIdentifier;
    icon?: JSX.Element;
    isSelected?: boolean;
    onSelect?: (e: React.MouseEvent<HTMLDivElement>) => void;
    onMenuClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

export function PageItem({
    title,
    id,
    icon,
    isSelected,
    onSelect,
    onMenuClick,
}: PageItemProps) {
    return (
        <DraggableItem id={id} key={id}>
            <div
                style={{
                    background: "#f9fafb",
                    position: "relative",
                    zIndex: 2,
                }}
            >
                <div
                    style={{
                        display: "flex",
                        position: "relative",
                        width: "100px",
                        flexDirection: "row",
                        justifyContent: "flex-start",
                        padding: "2px 2px",
                        alignItems: "center",
                        gap: "4px",
                        borderRadius: "8px",
                        boxShadow: "0px 0px 2px grey",
                        cursor: "grab",
                        zIndex: 2,
                    }}
                    className={isSelected ? "page-selected" : "page"}
                    onMouseUp={onSelect}
                >
                    {icon}
                    <p style={{ margin: 0 }}>{title}</p>
                    {isSelected ? (
                        <button
                            style={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                marginLeft: "auto",
                            }}
                            onMouseDown={onMenuClick}
                        >
                            <MdOutlineMoreVert color="#9DA4B2" />
                        </button>
                    ) : null}
                </div>
            </div>
        </DraggableItem>
    );
}
