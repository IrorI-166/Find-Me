import { Tooltip } from "@nextui-org/react";
import { TooltipContent } from "./TooltipContent";

export function TT_set({ title, description, children }: { title: string, description: string, children: React.ReactNode }) {

    return (
        <Tooltip
            content={<TooltipContent title={title} description={description} />}
            trigger="hover"
            color="success"
            hideArrow
            css={{
                width: "380px",
                height: "200px"
            }}
            placement="bottomStart"
        >
            {children}
        </ Tooltip>
    );
};