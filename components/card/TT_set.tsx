import { Tooltip } from "@nextui-org/react";
import { TooltipContent } from "./TooltipContent";
import data from "@/testdata.json";

export function TT_set({ children }: {children: React.ReactNode}) {
    return (
        <Tooltip
            content={<TooltipContent title={data.username1.title} description={data.username1.description} />}
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