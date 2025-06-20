import { useEffect, useRef } from "react";

type ClickAwayListenerProps = {
    onClickAway: () => void;
} & React.PropsWithChildren;

export function ClickAwayListener({
    children,
    onClickAway,
}: ClickAwayListenerProps) {
    const ref = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        function handleClick(e: MouseEvent) {
            if (ref.current && !ref.current.contains(e.target as Node)) {
                onClickAway();
            }
        }

        document.addEventListener("click", handleClick);

        return () => {
            document.removeEventListener("click", handleClick);
        };
    }, [onClickAway]);

    return <div ref={ref}>{children}</div>;
}
