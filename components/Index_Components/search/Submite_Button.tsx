import { Link, Image, Text, styled } from "@nextui-org/react"
import { relative } from "path";

export function Submite_Button({ url }: { url: string}) {
    return (
        <Link href={url}>
            <Text
            css={{
                
            }}>
                Search
            </Text>
        </Link>
    );
}