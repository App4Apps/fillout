import type { UniqueIdentifier } from "@dnd-kit/core";
import {
    MdOutlineCheckCircle,
    MdOutlineDescription,
    MdOutlineInfo,
} from "react-icons/md";

type PageIconProps = {
    id: UniqueIdentifier;
    isSelected?: boolean;
};

// quick and dirty just for the demo, we'd want to actually have page types which have relevant icons
export function PageIcon({ id, isSelected }: PageIconProps) {
    const className = isSelected ? "icon-selected" : "icon";

    switch (id) {
        case 1:
            return <MdOutlineDescription className={className} />;
        case 2:
            return <MdOutlineInfo className={className} />;
        case 3:
            return <MdOutlineCheckCircle className={className} />;
        default:
            return <MdOutlineDescription className={className} />;
    }
}
