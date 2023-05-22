import { Tooltip } from "@nextui-org/react";
import { TooltipContent } from "./TooltipContent";
import { Top_Users } from "@/data/User_Data";

export function TT_set({ index, children }: { index: number, children: React.ReactNode }) {
    return (
        <Tooltip
            content={<TooltipContent title={Top_Users[index].title} description={Top_Users[index].description} />}
            trigger="hover"
            color="success"
            hideArrow
            css={{
                width: "380px",
                height: "200px"
            }}
        >
            {children}
        </ Tooltip>
    );
};