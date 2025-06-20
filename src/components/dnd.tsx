import {
    closestCenter,
    DndContext,
    KeyboardSensor,
    PointerSensor,
    type UniqueIdentifier,
    useSensor,
    useSensors,
    type DragEndEvent,
} from "@dnd-kit/core";
import {
    arrayMove,
    horizontalListSortingStrategy,
    SortableContext,
    sortableKeyboardCoordinates,
} from "@dnd-kit/sortable";
import { useState } from "react";
import { AddButton } from "./add-button";
import { PageItem } from "./page-item";
import { PageIcon } from "./page-icon";
import { ContextMenu } from "./context-menu.tsx";
import { ClickAwayListener } from "./click-away-listener.tsx";

// maybe we'd have ids from the DB for pages if we're focused on the online experience
// if it's offline, this could work but we'd probably want something more robust for those unique identifiers
/**
 * Creates an unused UniqueIdentifier given a set of pages
 * @param pages that contain UniqueIdentifiers
 * @returns new UniqueIdentifier that does not overlap with the pages
 */
function getNewId(existingIds: Page[]) {
    let i = 1;
    while (existingIds.some((v) => v.id === i)) {
        i++;
    }
    return i;
}

type Page = {
    id: UniqueIdentifier;
    title: string;
};

export function Dnd() {
    const [items, setItems] = useState<Page[]>([
        { id: 1, title: "Info" },
        { id: 2, title: "Details" },
        { id: 3, title: "Other" },
        { id: 4, title: "Ending" },
    ]);
    const [selected, setSelected] = useState<UniqueIdentifier>(1);
    const [menuLocation, setMenuLocation] = useState<[number, number] | null>(
        null
    );

    const sensors = useSensors(
        useSensor(PointerSensor),
        useSensor(KeyboardSensor, {
            coordinateGetter: sortableKeyboardCoordinates,
        })
    );

    const handleDragEnd = (e: DragEndEvent) => {
        const { active, over } = e;

        if (active?.id !== over?.id && over?.id !== undefined) {
            console.log(active.id, over.id);
            setItems((items) => {
                const oldIndex = items.findIndex((v) => v.id === active.id);
                const newIndex = items.findIndex((v) => v.id === over.id);

                return arrayMove(items, oldIndex, newIndex);
            });
        }
    };

    const handleAdd = (id: UniqueIdentifier) => {
        const idx = items.findIndex((v) => v.id === id);
        const newId = getNewId(items);
        const newItems = [
            ...items.slice(0, idx + 1),
            { id: newId, title: `Page ${newId}` },
            ...items.slice(idx + 1),
        ];

        setItems(newItems);
        setSelected(newId);
    };

    const handleSelect = (id: UniqueIdentifier) => {
        setSelected(id);
    };

    const handleMenuClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        setMenuLocation([e.clientX, e.clientY]);
    };

    return (
        <>
            <div
                style={{
                    position: "relative",
                    width: "100%",
                    padding: "8px 0px",
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    gap: "24px",
                }}
            >
                <div className="dashed" />
                <DndContext
                    sensors={sensors}
                    collisionDetection={closestCenter}
                    onDragEnd={handleDragEnd}
                >
                    <SortableContext
                        items={items}
                        strategy={horizontalListSortingStrategy}
                    >
                        {items.map((item, i) => (
                            <>
                                <PageItem
                                    title={item.title}
                                    id={item.id}
                                    key={item.id}
                                    icon={
                                        <PageIcon
                                            id={item.id}
                                            isSelected={item.id === selected}
                                        />
                                    }
                                    onSelect={() => handleSelect(item.id)}
                                    onMenuClick={handleMenuClick}
                                    isSelected={item.id === selected}
                                />
                                {/* 
                                If I had more time, I wouldn't want to handle the hover this way
                                It would be better to ease the buttons apart to make space for the +
                                We would use the mouse x to determine which 2 buttons are closest and insert between
                                
                                This uses the small + button unless it's the last one, then we get the big one 
                                */}
                                {i <= items.length - 2 ? (
                                    <AddButton
                                        onClick={() => handleAdd(item.id)}
                                    />
                                ) : (
                                    <AddButton
                                        onClick={() => handleAdd(item.id)}
                                        big
                                    />
                                )}
                            </>
                        ))}
                    </SortableContext>
                </DndContext>
            </div>
            {menuLocation !== null ? (
                <ClickAwayListener onClickAway={() => setMenuLocation(null)}>
                    <ContextMenu pos={menuLocation} />
                </ClickAwayListener>
            ) : null}
        </>
    );
}
