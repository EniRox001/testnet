import { Button } from "@mui/material";
import { MouseEventHandler } from "react";

interface ChildProps {
    count: number,
    changeCount: MouseEventHandler
}

export default function ChildButton({count: count, changeCount: changeCounts}: ChildProps) {

    return (
        <Button onClick={changeCounts}>
            Add Parent Count from here {count}
        </Button>
    )
}