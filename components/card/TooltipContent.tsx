import React from "react";
import { Text } from "@nextui-org/react";

export const TooltipContent = ({ title, description }: { title: string, description: string }) => {
    return (
        <>
            <div style={{ wordWrap: "break-word" }}>
                <Text size="$2xl">{title}</Text>
                <Text size="$xl">{description}</Text>
            </div>
        </>
    );
};